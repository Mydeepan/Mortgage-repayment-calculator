import { useState } from 'react'
import { Repament } from './Repayment/Repament'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Repament/>
    </>
  )
}

export default App
