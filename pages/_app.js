import './styles/styles.scss'
import { Jarvis } from '../components/Jarvis'

function MyApp({ Component, pageProps}) {
  return(
    <Jarvis>
      <Component {...pageProps} />
    </Jarvis>
  ) 
}

export default MyApp