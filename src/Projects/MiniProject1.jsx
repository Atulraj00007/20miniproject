import React from "react";
import { useState } from "react";
import './MiniProject1.css';

const MiniProject1 = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if(weight===0 || height===0){
      alert('Please Enter a valid Weight and Height');
    }

    else{
      let bmi = (weight/(height*height))
      setBmi(bmi.toFixed(1));

      if(bmi < 16){
        setMessage("Severe Thinness");
      }
      else if(bmi >= 16 && bmi <= 17){
        setMessage("Moderate Thinness");
      } 
      else if(bmi >= 17 && bmi <= 18.5){
        setMessage("Mild Thinness");
      }
      else if(bmi >= 18.5 && bmi <= 25){
        setMessage("Normal")
      }
      else if(bmi >= 25 && bmi <= 30){
        setMessage("Over Weight");
      }
      else if(bmi >= 30 && bmi <= 40){
        setMessage("Obese Classes");
      }
    }
  }

  let reload = () => {
    window.location.reload();
  }

  return (
    <div className="bar">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(in kgs)</label>
            <input
              type="text"
              placeholder="Enter Your Weight..."
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in meter)</label>
            <input
              type="text"
              placeholder="Enter Your Height..."
              value={height}
              onChange={(e)=>setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MiniProject1;
