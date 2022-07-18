import React from 'react'
import PropTypes from 'prop-types'

function NewsItem(props) {
let { title, description, url, urlToImage, source, author, time, darkmode } = props
  return (
    <div className='my-3'>
    <div className="card" style={{width:"24rem"}}>
        <span style={{'zIndex':'1'}} className="position-absolute badge rounded-pill bg-danger">
            {source}
        </span>
        <img src={urlToImage} className="card-img-top"alt="..." />
        <div className={`card-body text-${darkmode?"light":"dark"} bg-${!darkmode?"light":"dark"} `}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{color:"grey"}}>{description.slice(0, 120)}...</p>
            <p className="card-text"><small className="text-muted">By <strong>{author??"Unknown"}</strong> at {new Date(time).toUTCString()}</small></p>
            <a href={url} className={`btn btn-${darkmode?"light":"dark"}`}>View More</a>
        </div>
    </div>
</div>
  )
}

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    darkmode: PropTypes.bool.isRequired
}

//set default props
NewsItem.defaultProps = {
    title: "No Title",
    description: "No Description",
    url: "No URL",
    urlToImage: "No URL",
    source: "No Source",
    author:"Unknown",
    time: new Date().toUTCString(),
    darkmode: false
}
export default NewsItem
