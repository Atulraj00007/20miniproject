import React, { useState } from 'react';
import './MiniProject2.css';

const MiniProject3 = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [compoundFrequency, setCompoundFrequency] = useState(1);
  const [simpleInterest, setSimpleInterest] = useState(null);
  const [compoundInterest, setCompoundInterest] = useState(null);

  const calculateSimpleInterest = (e) => {
    e.preventDefault();
    const SI = (principal * rate * time) / 100;
    setSimpleInterest(SI);
  };

  const calculateCompoundInterest = (e) => {
    e.preventDefault();
    const CI = principal * (Math.pow(1 + (rate / (compoundFrequency * 100)), compoundFrequency * time)) - principal;
    setCompoundInterest(CI);
  };

  return (
    <div className="mini-project-container">
      <h1>Interest Calculator</h1>
      
      <form className="interest-form">
        <label>
          Principal Amount:
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
          />
        </label>

        <label>
          Rate of Interest (in %):
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </label>

        <label>
          Time Period (in years):
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </label>

        <label>
          Compound Frequency:
          <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(Number(e.target.value))}>
            <option value={1}>Yearly</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
          </select>
        </label>

        <div className="button-group">
          <button className="calc-btn" onClick={calculateSimpleInterest}>Calculate Simple Interest</button>
          <button className="calc-btn" onClick={calculateCompoundInterest}>Calculate Compound Interest</button>
        </div>
      </form>

      <div className="results">
        {simpleInterest !== null && <h2>Simple Interest: {simpleInterest.toFixed(2)}</h2>}
        {compoundInterest !== null && <h2>Compound Interest: {compoundInterest.toFixed(2)}</h2>}
      </div>
    </div>
  );
}

export default MiniProject3;
