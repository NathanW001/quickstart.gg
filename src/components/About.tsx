import './About.css'
import { Link } from "react-router-dom"

function About() {

  return (
    <>
      <div id="about">
        <div><span id="yellow-text">quick</span>start.gg is a web app that acts as a <b>wrapper</b> for start.gg, which means that it runs on top of and simplifies the usage of it. when you sign into this site using start.gg, start.gg provides an authorization token that lets you make changes to start.gg brackets from here instead of on start.gg itself.
        </div>
        <Link to={"/"}>back to home</Link>
      </div>
      <div id='copyright'>©nathan wootton, 2025</div>
    </>
  )
}

export default About
