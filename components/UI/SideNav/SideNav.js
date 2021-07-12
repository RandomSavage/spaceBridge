import { FaTimes, FaSun} from "react-icons/fa";
import { useStateContext } from '../../Jarvis'


const SideNav = (props) => {
  const globalState = useStateContext()
  return (
    <div className={`side-nav ${globalState.sideNavOpen ? 'side-nav--active': ''}`}>
      <FaTimes className="side-nav__closeBtn" />
      <FaSun className="side-nav__closeBtn" onClick={() => globalState.setSideNavOpenAction(false)}/>
      <div className="side-nav__inside">
        <ul className="side-nav__linkContainer">
          <li>
            <a href="/" className="active">Welcome</a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="side-nav__linkContainer">
          <li>
            <a href="/" className="active">Who we Are</a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="side-nav__linkContainer">
          <li>
            <a href="/" className="active">What We Do</a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="side-nav__linkContainer">
          <li>
            <a href="/" className="active">Get In Touch</a>
          </li>
        </ul>
        <div className="side-nav__divider" />
      </div>
    </div>
  )
}

export default SideNav
