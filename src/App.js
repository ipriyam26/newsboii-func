import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import { useState } from 'react';
import NewsView from './components/NewsView';
import LoadingBar from 'react-top-loading-bar'

function App() {
  let country = "in"
  let pageSize = 9
 const [progress, setProgress] = useState(0)

  return (
    <Router>
    <NavBar />
    <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={()=>{setProgress(0)}}
          height={3}
        />
        <Routes>
          <Route exact path="/business" element={<NewsView setProgress={setProgress} country={country} key="business" pageSize={pageSize} category="business" />}>

          </Route>
          <Route exact path="/entertainment" element={<NewsView setProgress={setProgress} country={country} key="entertainment" pageSize={pageSize} category="entertainment" />} >
          </Route>
          <Route exact path="/health" element={<NewsView setProgress={setProgress} country={country} key="health" pageSize={pageSize} category="health" />} >
            

          </Route>
          <Route exact path="/science" element={<NewsView setProgress={setProgress} country={country} key="science" pageSize={pageSize} category="science" />} >
          </Route>
          <Route exact path="/sports" element={<NewsView setProgress={setProgress} country={country} key="sports" pageSize={pageSize} category="sports" />}>

          </Route>
          <Route exact path="/technology" element={

            <NewsView setProgress={setProgress} country={country} key="technology" pageSize={pageSize} category="technology" />
          }>
          </Route>
          <Route exact path="/" element={
            <NewsView setProgress={setProgress} country={country} key="general" pageSize={pageSize} category="general" />
          }>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
