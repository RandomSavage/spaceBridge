const SideNav = (props) => {
  return (
    <div className="side-nav">
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
  )
}

export default SideNav
