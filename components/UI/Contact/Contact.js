


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__heading">
        <h2>What we Do</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris,<br />eu ultricies erat malesuada quis. Aliquam dapibus.</p>
      </div>
      <div className="contact__split">
        <section>
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
            <label>Email</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
        </div>
        <button className="contact__actionBtn">
          <a href="/" >Learn More</a>
        </button>
      </form>
        </section>
        <section>
          <ul className="contact__contact-info">
            <li>
              <h3>Address</h3>
              <span>
                "12345 SomeWhere Road #654"
                <br />
                "NashVille, Tn 00000-000"
                <br />
                "USA"
              </span>
            </li>
            <li>
              <h3>Email</h3>
              <a href="#">AlphaPrime@universe.io</a>
            </li>
            <li>
              <h3>Phone</h3>
              <span>
                (000) 000-0000
              </span>
            </li>
            <li>
              <h3>Social</h3>
              <ul className="icons">
                <li>
                  <a href="#">twitter</a>
                </li>
                <li>
                  <a href="#">facebook</a>
                </li>
                <li>
                  <a href="#">github</a>
                </li>
                <li>
                  <a href="#">pinterest</a>
                </li>
                <li>
                  <a href="#">linkedin</a>
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
