

import { useEffect } from 'react'
import { useStateContext } from '../components/Jarvis'
import { useRouter } from 'next/router' 

export default function Home() {
  const globalState = useStateContext()
  const router = useRouter()
  useEffect( ()=> {
    const loggedIn = false
    if(loggedIn === false) {
      router.push('/')
    }
  }, [])
  return (
    <>
      
    </>
  )
}

{/* <h3><FaTimes style={{ color: "#fff", cursor: "pointer"}} /></h3> */}


