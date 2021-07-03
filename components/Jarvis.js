import React, { useContext, useState } from 'react'
// import ls from 'local-storage'

export const StateContext = React.createContext()

export function useStateContext() {
  return useContext(StateContext)
}

export function Jarvis({children}) {
const [user, setUser] = useState('')

const[myContent, setMyContent] = useState(
  [
    {
      heading: 'heading 1',
      paragraph: 'Paragraph 1',
      bgColor: '#1b1b1b'
    },
    {
      heading: 'heading 2',
      paragraph: 'Paragraph 2',
      bgColor: '#303030'
    },
    {
      heading: 'heading 3',
      paragraph: 'Paragraph 3',
      bgColor: '#fff'
    }
  ]
)

let [bgChoice, setBgChoice] = useState('linear-gradient(312deg, rgba(26, 39, 103, 1) 0%, rgba(48, 20, 94, 1), 45%, rgba(0, 0, 0, 1) 100%)')

const alterBg = (choice) => {
  setBgChoice(choice)
  console.log('The New Background Color is:' + bgChoice)
  
}
  return (
    <StateContext.Provider
    value={{
      alterBg,
      myContent,
      setMyContent
    }}
    >
      {children}
    </StateContext.Provider>
  )
}