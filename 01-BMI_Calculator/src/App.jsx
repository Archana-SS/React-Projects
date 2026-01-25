import { useState } from "react"
import './App.css'

function App() {
  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState('');
  const [message,setMessage]=useState('');

  let calcBmi = (e) => {

    e.preventDefault();

    if(weight===0 || height===0){
      alert('Please enter a valid weight and height')
    }

    else{
      let bmi=weight/((height*0.3048)*(height*0.3048))
      setBmi(bmi.toFixed(1))

      if(bmi<18.5){
        setMessage('You are underweight')
      }
      else if(bmi>=18.5 && bmi<24.9){
        setMessage('You are healthy weight')
      }
      else{
        setMessage('You are overweight')
      }
    }
  }


  let reload=(e)=>{
    window.location.reload()
  }

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <br/>
        <br/>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg): </label>
            <input type="text" placeholder="Enter your Weight value"  value={weight} onChange={(e)=>setWeight(e.target.value)} required/>
          </div>
          <br/>
          <br/>
          <div>
            <label>Height (feet): </label>
            <input type="text" placeholder="Enter your height value" value={height} onChange={(e) => setHeight(e.target.value)} required/>
          </div>
          <br/>
          <br/>
          <div>
            <button className="btn" type="submit" >Submit</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
