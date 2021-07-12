import { useStateContext } from '../../Jarvis'

const loopContent = (content, num) => {
  let loopedContent = []
  let myIndex;
  for(let i = 0; i < num; i += 1) {
    loopedContent.push(content)
  }
  for(let j = 0; j < index; j += 1) {
    myIndex = j
  }
    return loopedContent
}

const Content = () => {
  const globalState = useStateContext()
  console.log(globalState.myContent)
  let loopMeBitch = globalState.myContent
  return (
    <div className="content-container">
    { 
    loopMeBitch.map((obj, index) => {
      return (
        <div className="content-area">
          <img src={loopMeBitch[index].image} alt={loopMeBitch[index].alt} />
          <div className="content-area__inner" style={{background: loopMeBitch[index].bgColor, opacity: loopMeBitch[index].screen}}>
            <h2>Sed gitsum Dolor</h2>
            <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris,<br />eu ultricies erat malesuada quis. Aliquam dapibus.</p>
            <button className="content-area__actionBtn">
              <a href="/" >Learn More</a>
            </button>
          </div>
        </div>
      )        
    }) 
  } 
  </div>
  )
}

export default Content
