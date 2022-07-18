import React, {  useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

function NewsView(props) {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(10)

    const update =  async () => {
        let url = `https://newsapi.org/v2/top-headlines?&category=${props?.category}&country=${props?.country}&apiKey=ffe6a81d1bb6483d9335d3796d1433e5&pageSize=${props?.pageSize}&page=${page}`
        const response = await fetch(url);
        props.setProgress(30)
        let data = await response.json();
        setArticles(articles.concat(data.articles))
        props.setProgress(70)
        setTotalResults(data.totalResults)
        props.setProgress(100)

    }

    const fetchMoreData = () => {
        setPage(page + 1)
        update()
    }

    useEffect(() => {
            update()
    }, [])
    return (

        <div className='container my-2 '>
            <div className={`container text-center my-4 text-${props?.darkmode ? "light" : "dark"}`}>
                <h1>Top {props?.category[0].toUpperCase()}{props?.category.slice(1)} Headlines</h1>
            </div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="row d-flex justify-content-center" >
                    {articles.map((article, index) => {
                        if (article.urlToImage != null) {
                            return (
                                <div className="col" key={index}>
                                    <NewsItem darkmode={props?.darkmode} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} author={article.author} time={article.publishedAt} source={article.source.name} ></NewsItem>
                                </div>)
                        }
                        return null;
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}

NewsView.propTypes = {
    category: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    darkmode: PropTypes.bool.isRequired,
    handleProgress: PropTypes.func.isRequired,

}
//set default props
NewsView.defaultProps = {
    darkmode: false,
}

export default NewsView
