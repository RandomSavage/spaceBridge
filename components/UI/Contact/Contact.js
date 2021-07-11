import { FaJediOrder, FaUsb, FaXbox, FaHamsa, FaPooStorm } from "react-icons/fa";



const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__heading">
        <h2>What we Do</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris,<br />eu ultricies erat malesuada quis. Aliquam dapibus.</p>
      </div>
      <div className="contact__split">
        <section className="split-left">
        <form action="#" method="post">
        <div className="fields">
          <div className="field-half">
            <label>Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-half">
            <label>Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field-half">
            <label>Message</label>
            <textarea name="message" id="message" rows="10"></textarea>
          </div>
        </div>
        <button className="contact__actionBtn">
          <a href="/" >Send Message</a>
        </button>
      </form>
        </section>
        <section className="split-right">
          <ul className="contact-info">
            <li className="li-header">
              <h3>Address</h3>
              <ul>
                <li>12345 SomeWhere Road</li>
                <li>#654</li>
                <li>Nashville, TN 00000-0000</li>
                <li>USA</li>
              </ul>
            </li>
            <li className="li-header">
              <h3>Email</h3>
              <a href="#">AlphaPrime@universe.io</a>
            </li>
            <li className="li-header">
              <h3>Phone</h3>
              <span>
                (000) 000-0000
              </span>
            </li>
            <li className="li-header">
              <h3>Social</h3>
              <ul className="icons">
                <li>
                  <a href="#"><FaJediOrder className="fa-icons" /></a>
                </li>
                <li>
                  <a href="#"><FaUsb className="fa-icons" /></a>
                </li>
                <li>
                  <a href="#"><FaXbox className="fa-icons" /></a>
                </li>
                <li>
                  <a href="#"><FaHamsa className="fa-icons" /></a>
                </li>
                <li>
                  <a href="#"><FaPooStorm className="fa-icons" /></a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>


    </div>
  )
}

export default Contact
