import { FaPiedPiperHat, FaCat, FaBong, FaCannabis, FaBookMedical, FaBookDead } from "react-icons/fa";

const PinkCards = () => {
  return (
    <div className='pink-cards'>
      <div className="pink-cards__heading">
        <h2>What we Do</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris,<br />eu ultricies erat malesuada quis. Aliquam dapibus.</p>
      </div>
      <div className="pink-cards__cards">
      <div className="pink-cards__card">
          <FaPiedPiperHat className="card-icon"/>
          <div className="card-content">
            <h3>Sed erat ullam corper</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaCat className="card-icon"/>
          <div className="card-content">
            <h3>Sed erat ullam corper</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaBong className="card-icon"/>
          <div className="card-content">
            <h3>Sed erat ullam corper</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaCannabis className="card-icon"/>
          <div className="card-content">
            <h3>Sed erat ullam corper</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaBookMedical className="card-icon"/>
          <div className="card-content">
            <h3>Sed erat ullam corper</h3>
            <p>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
            </p>
          </div>
        </div>
        <div className="pink-cards__card">
          <FaBookDead className="card-icon"/>
          <div className="card-content">
            <h3>Sed erat ullam corper</h3>
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
