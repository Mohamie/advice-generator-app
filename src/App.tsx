import { useState } from 'react'
import './App.css'
import AdviceCard from './AdviceModule/AdviceCard'
import AdviceAPI from "./AdviceModule/AdviceAPI"


function App() {
  const [advice, setAdvice] = useState({
    id: "177", 
    description: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  });


  const generateNewAdvice = async() => {
    const response = await AdviceAPI.getAdvice();

    if(response) setAdvice({id: response.id, description: response.advice})
  }

  return (
    <>
      <AdviceCard 
        id={advice.id} 
        description={advice.description}
        generateNewAdvice={generateNewAdvice}
      />
    </>
  )
}

export default App
