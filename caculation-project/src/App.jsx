import React, { useEffect } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result'
import { useState } from 'react'


function App() {
  const [input, setInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 2000,
    expectedReturn: 2,
    duration: 10
  })


  function handleInputChange(identifier, inputValue) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: inputValue
      }
    })

  }
  const inputIsValid = input.duration >=1;
  return (
    <>
      <Header />
      <UserInput
        onChangeInput={handleInputChange}
        input={input}
      />
      {!inputIsValid && <p className='center'>Please vaild data</p>}
      {inputIsValid &&<Result output={input} />}
    </>
  )
}

export default App
