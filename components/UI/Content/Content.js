import { useStateContext } from '../../Jarvis'

const loopContent = (content, num) => {
  let loopedContent = []
  for(let i = 0; i < num; i += 1) {
    loopedContent.push(content)
  }
    return loopedContent

}

const Content = () => {
  const globalState = useStateContext()
  return (
    <>
    {loopContent(
      (<div className="content-area">
      <img src="https://i.pinimg.com/originals/78/53/ec/7853ecc94a462304864cddd8c311d8e4.jpg" alt="model 500 telephone" />
      <aside className="content-area__inner" style={{background: globalState.myContent.bgColor}}>
        <h2>Sed gitsum Dolor</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris,<br />eu ultricies erat malesuada quis. Aliquam dapibus.</p>
        <button className="content-area__actionBtn">
          <a href="/" >Learn More</a>
        </button>
      </aside>
    </div>), 3)}
  
  </>
  )
}

export default Content
