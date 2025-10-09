import './Landing.css'
import { Link } from "react-router-dom"

function Landing() {

  return (
    <div id="landing">
      <div id="app-title-wrapper">
        <div id="app-title"> <span  id="yellow-text">quick</span>start.gg</div>
        <div id="app-subtitle"> a start.gg wrapper for TOs</div>
      </div>
      <a id="login-link" href='https://start.gg'>sign in with start.gg</a>
      <Link to={"/about"}>what is this site?</Link>
    </div>
  )
}

export default Landing
