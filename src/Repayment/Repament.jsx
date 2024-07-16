import React, { useState } from 'react'
import 'boxicons/css/boxicons.min.css';
import './repayment.css'
import calculate from '../assets/calculate.webp'


export const Repament = () => {
  const [result,setResult] = useState('');
  const [mortgageAmount,setMortgageAmount] =useState('300000');
  const [year,setyear] =useState('25');
  const [interest,setInterst] =useState('5.25');
  const [selectAmount,setSelectAmount] = useState('');
  const convertValue = interest/100 ;
  const [valid,setValid] = useState('');
  const activeButton = (!mortgageAmount || !year || !interest || !selectAmount);
  const handleSubmit = (e)=>{
      e.preventDefault();
      if (isNaN(mortgageAmount) || isNaN(year) || isNaN(interest)) {
      setValid('Please enter valid numbers for all fields.');
      setResult('');
      return;
    }
      let totalValue = mortgageAmount*Math.pow(1+convertValue,year);
      setResult(totalValue.toFixed(2));
      setValid('')
  }
const clearAll =()=>{
  setMortgageAmount('');
  setResult("");
  setValid("");
  setyear('');
  setInterst('');
}
  return (
    <>
      <div className="container">
         <div className="calculate-page">
          <div className="heading-tag">
            <h2>Mortgage Calculator</h2>
            <h5 onClick={clearAll}>Clear All</h5>
          </div>
          <p style={{color:"red"}}>{valid} </p>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="amount-box">
              <label htmlFor="amount">Mortgage Amount</label>
              <div className="input-tag">
                <input style={mortgageAmount.length? null : {borderColor:"tomato"}}  type="text" id='amount' value={mortgageAmount} onChange={(e)=>setMortgageAmount(e.target.value)}/>
                <i style={mortgageAmount.length? null : {background:"rgba(255, 0, 0, 0.502)"}} className='bx bx-pound'></i>
              </div>
              <p style={{color:'tomato', marginLeft:5, fontSize:15, marginBottom:5}}>{mortgageAmount.length ? '' : 'Enter the Mortgage Amount'} </p>
              <div className="input-tag year-intrest">
                <div className="years">
                  <label htmlFor="year">Mortgage Term</label>
                  <input style={year.length? null : {borderColor:"tomato"}} type="text" id='year' value={year} onChange={(e)=>setyear(e.target.value)}/>
                  <span style={year.length? null : {background:"rgba(255, 0, 0, 0.502)"}}>Years</span>
                </div>
                <div className="intrest">
                  <label htmlFor="in">Interest Rate</label>
                  <input style={interest.length? null : {borderColor:"tomato"}} type="text" id='in' value={interest} onChange={(e)=>setInterst(e.target.value)}/>
                  <span style={interest.length? null : {background:"rgba(255, 0, 0, 0.502)"}}>%</span>
                </div>
              </div>
              <p style={{color:'tomato', marginLeft:5, fontSize:15, marginBottom:5}}>{(interest.length && year.length) ? "" : "Please enter Year and Interest"}</p>
              <div className="Mortgage-Type">
                  <p>Mortgage Type</p>
                  <div className="checked-box">
                    <div className="repayment">
                      <input  type="radio" name="amount-type" id="Repayment" value={'Repayment'} onChange={(e)=> setSelectAmount(e.target.value)}/>
                      <label htmlFor="Repayment">Repayment</label>
                    </div>
                    <div className="interest">
                      <input  type="radio" name="amount-type" id="Interest" value={'Interest Only'} onChange={(e)=> setSelectAmount(e.target.value)}/>
                      <label htmlFor="Interest">Interest Only</label>
                    </div>
                    <p style={{marginLeft:10, color:'tomato'}}>{selectAmount.length?"" : "Select anyone"}</p>
                  </div>
              </div>
              <div className="btn">
                <button disabled={activeButton} type='submit'><span className='bx bx-calculator'></span> Calculate Repayments</button>
              </div>
            </div>
          </form> 
        </div>
        <div className="result-container">
        {result.length? 
        <>
           <div className="result-add-tag">
            <h3>Your results</h3>
            <p>Your results Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            <div className="box">
              <div className="amount-box2">
                <p>Your monthly {selectAmount}</p>
                <span>£ {result}</span>
                <p>Total you'll repay over the term</p>
                <b>£ {mortgageAmount}</b>
              </div>
            </div>
          </div> 
        </>:
         <div>
             <div className="img-tag">
              <img src={calculate} alt="result pic" width={250} height={250}/>
            </div>
            <div className="content-tag">
              <h3>Results shown here</h3>
              <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be. </p>
            </div>
          </div> 
        }
        </div>
      </div>
    </>
  )
}
