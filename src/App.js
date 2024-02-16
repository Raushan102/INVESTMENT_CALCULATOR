
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { useState } from 'react';
import Result from './components/Result';


function App() {

  let [interData, setInterData] = useState(
    {
      initialInvestment: 1000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 5,
    },
  );

  let isVisible= interData.duration>=1;

  function inputHandler(identifierData, newValue) {
    setInterData((previousData) => {
      return {
        ...previousData,
        [identifierData]: +newValue,
      };
    });
  }

  return (
    <div className="App">
     
     <Header/>    
     <Main onChange={inputHandler }  userInputData={interData}/>
     {!isVisible && <p className='duration_bug'>please inter  duration more than zero </p>}
     { isVisible && <Result input={interData}/>}
    </div>
  );
}

export default App;
