import { FaTimes, FaSun} from "react-icons/fa"
import React, { useEffect, useRef } from 'react'
import { gsap, Power3} from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'
import { useStateContext } from '../../Jarvis'



const Landing = () => {
  // Force CSSPlugin to not get dropped during build
  const globalState = useStateContext()
  let landingHeader = useRef(null)
  let mySun = useRef(null)
  const SunIcon = React.forwardRef((props, ref) => (
    <FaSun ref={mySun} {...props} onClick={() => globalState.setSideNavOpenAction(true)} />
  ));
  
  // You can now get a ref directly to the DOM button:
  const ref = React.createRef()
  // const element = ref.current
  //useEffect runs after all dom elements are loaded/returned below
  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      document.querySelectorAll('.landing__closeBtn'),
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 8
      },
    )
    let mySelectors = [".landing h1", ".landing p", ".landing button" ]
    mySelectors.map((selector) => {
      return     gsap.fromTo(
        document.querySelector(selector),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2
        },
      )
    })

  }, [])

  return (
    <div className="landing">
      <FaTimes className="landing__closeBtn" onClick={() => globalState.setSideNavOpenAction(true)} />
      <SunIcon className="landing__closeBtn"  />
      {/* <FaSun className="landing__closeBtn" onClick={() => globalState.setSideNavOpenAction(true)} /> */}
      <h1 ref={el => {landingHeader = el}}>spaceBridge</h1>
      <p>
        Just another RandomSavage Clone produced under the influence of <a  href="https://www.youtube.com/watch?v=InGPB36CFCI" className="landing__links" target="_blank">Techno Music</a>
        <br/>
        and put on  <a  href="https://github.com/RandomSavage" className="landing__links" target="_blank">Github.</a>
      </p>
      <button className="landing__actionBtn">
        <a href="/" >Learn More</a>
      </button>
    </div>
  )
}

export default Landing
