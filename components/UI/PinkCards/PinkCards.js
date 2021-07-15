import { FaTty, FaCat, FaLaptopCode, FaGamepad, FaBook, FaTractor } from "react-icons/fa";

const PinkCards = () => {
  return (
    <div className='pink-cards'>
      <div className="pink-cards__heading">
        <h2>What we Do</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris,<br />eu ultricies erat malesuada quis. Aliquam dapibus.</p>
      </div>
      <div className="pink-cards__cards">
      <div className="pink-cards__card">
          <FaTty className="card-icon"/>
          <div className="card-content">
            <h3>Solo qui-gonn boba windu</h3>
            <p>
            Organa ben tusken raider dagobah palpatine hutt tusken raider mace qui-gonn. Moff gwurran drall t88 annoo dengar c-3po.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaCat className="card-icon"/>
          <div className="card-content">
            <h3>Calamari skywalker mace</h3>
            <p>
            Emtrey ebe zabrak gerb yoda yarael. Solo antilles darth darth darth, Hoth jango lando dooku yavin.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaLaptopCode className="card-icon"/>
          <div className="card-content">
            <h3>Lars darth calamari</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaGamepad className="card-icon"/>
          <div className="card-content">
            <h3>Sed erat ullam corper</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaBook className="card-icon"/>
          <div className="card-content">
            <h3>Amidala mandalorians moff</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaTractor className="card-icon"/>
          <div className="card-content">
            <h3>Fett solo lobot hutt</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </div>
        </div>
      </div>
      <button className="pink-cards__actionBtn">
        <a href="/" >Learn More</a>
      </button>
    </div>
  )
}

export default PinkCards
