import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function NavBar(props) {
const [active, setActive] = useState("general");
const [darkmode, setDarkmode] = useState(false);
const topics= ["business", "entertainment", "health", "science", "sports", "technology"];

let handleMode = () => {
    setDarkmode(!darkmode)
    this.props.handleDarkMode(
        darkmode
    )
    if (!darkmode) {
        document.body.style.backgroundColor = "#292432";
    }
    else{
        document.body.style.backgroundColor = "#D5D5D5";
    }
}
  return (
 <nav className={`navbar navbar-expand-lg navbar-${darkmode?"dark":"light"} bg-${darkmode?"dark":"light"}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsBoii</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {topics.map((topic, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link className={`nav-link ${active === topic ? "active" : ""}`} to={`/${topic}`} onClick={() => {
                                            console.log("clicked");
                                            setActive(topic)
                                        }}>{topic[0].toUpperCase()}{topic.slice(1)}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <form className="d-flex">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={darkmode} onClick={handleMode} />
                                <label className={`form-check-label text-${darkmode?"light":"dark"}`} forhtml="flexSwitchCheckDefault">DarkMode</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

  )
}



export default NavBar
