import React, { useContext, useState } from 'react'
// import ls from 'local-storage'

export const StateContext = React.createContext()

export function useStateContext() {
  return useContext(StateContext)
}

export function Jarvis({children}) {
const [user, setUser] = useState('')

const [sideNavOpen, setSideNavOpenAction] = useState(false)

const[myContent, setMyContent] = useState(
  [
    {
      heading: 'heading 1',
      paragraph: 'Paragraph 1',
      bgColor: '#5052b5',
      screen: '.8',
      image: 'https://i.pinimg.com/originals/78/53/ec/7853ecc94a462304864cddd8c311d8e4.jpg',
      alt: "Model 500 Telephone"
    },
    {
      heading: 'heading 2',
      paragraph: 'Paragraph 2',
      bgColor: '##b74e91',
      screen: '.9',
      image: 'https://cdn.shopify.com/s/files/1/0149/4302/products/telephone_wire_rainbow_1200x1200.jpg?v=1571262738',
      alt: "African Woven Basket Fabricated from telephone wires"
    },
    {
      heading: 'heading 3',
      paragraph: 'Paragraph 3',
      bgColor: '5e42a6',
      screen: '1',
      image: 'https://i.pinimg.com/originals/d9/05/c8/d905c8230817bea67982718d9def02bc.jpg',
      alt: "Model in a red Telephone Booth"
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
      setMyContent,
      sideNavOpen,
      setSideNavOpenAction
    }}
    >
      {children}
    </StateContext.Provider>
  )
}