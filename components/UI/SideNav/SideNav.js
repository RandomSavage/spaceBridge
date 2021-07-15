import { FaTimes, FaSun} from "react-icons/fa";
import { useStateContext } from '../../Jarvis'
import React, { useEffect } from "react";
import { gsap } from "gsap"

const SideNav = (props) => {
  const globalState = useStateContext()
  useEffect(() => {
    var navTween1 = gsap.fromTo(".side-nav__inside-container1", {y: 20, opacity: 0}, {duration: 1, y: 0, delay: 1, opacity: 1});
    var navTween2 = gsap.fromTo(".side-nav__inside-container2", {y: 20, opacity: 0}, {duration: 1, y: 0, delay: 1.1, opacity: 1});
    var navTween3 = gsap.fromTo(".side-nav__inside-container3", {y: 20, opacity: 0}, {duration: 1, y: 0, delay: 1.2, opacity: 1});
    var navTween4 = gsap.fromTo(".side-nav__inside-container4", {y: 20, opacity: 0}, {duration: 1, y: 0, delay: 1.3, opacity: 1});
    navTween1.play()
    // navTween1.pause()
    navTween2.play()
    // navTween2.pause()
    navTween3.play()
    // navTween3.pause()
    navTween4.play()
  }, [])
  return (
    <div className={`side-nav ${globalState.sideNavOpen ? 'side-nav--active': ''}`}>
      <FaTimes className="side-nav__closeBtn" />
      <FaSun className="side-nav__closeBtn" onClick={() => globalState.setSideNavOpenAction(false)}/>
      <div className="side-nav__inside">
        <div className="side-nav__inside-container1">
          <ul className="side-nav__linkContainer">
            <li>
              <a href="/" className="active">Welcome</a>
            </li>
          </ul>
        <div className="side-nav__divider" />
        </div>
        <div className="side-nav__inside-container2">
        <ul className="side-nav__linkContainer">
          <li>
            <a href="/" className="active">Who We Are</a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        </div>
        <div className="side-nav__inside-container3">
        <ul className="side-nav__linkContainer">
          <li>
            <a href="/" className="active">What We Do</a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        </div>
        <div className="side-nav__inside-container4">
        <ul className="side-nav__linkContainer">
          <li>
            <a href="/" className="active">Get In Touch</a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        </div>
      </div>
    </div>
  )
}

export default SideNav
