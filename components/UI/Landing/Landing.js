import { FaTimes, FaSun} from "react-icons/fa";
import { useStateContext } from '../../Jarvis'

const Landing = () => {
  const globalState = useStateContext()
  return (
    <div className="landing">
      <FaTimes className="side-nav__closeBtn" onClick={() => globalState.setSideNavOpenAction(true)} />
      <FaSun className="side-nav__closeBtn" onClick={() => globalState.setSideNavOpenAction(true)} />
      <h1>spaceBridge</h1>
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
