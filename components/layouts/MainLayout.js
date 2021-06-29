
import { useStateContext } from '../Jarvis'
 

const MainLayout = (props) => {
  const globalState = useStateContext()
  return(
    <div style={{background: globalState.bgChoice, minHeight: '100vh', minWidth: '100%', backgroundAttachment: 'fixed'}}>
      <section className="content-container">
        {props.children}
      </section>
    </div>
  )
}

export default MainLayout;

//linear-gradient(133deg, rgba(2,27,64,1) 11%, rgba(181,210,6,1) 100%)