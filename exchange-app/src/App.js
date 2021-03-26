import React, { useEffect, useState } from 'react';
import { exchange } from './apiCalls/apiCalls';


const App = () => {
  const [firstCurrency,setFirstCurrency] = useState("USD");
  const [secondCurrency,setSecondCurrency] = useState("TRY");
  const [amount,setAmount] = useState(0);
  const [result,setResult] = useState(0);

  const onChangeFirst = event => {
    const{value} = event.target;
    setFirstCurrency(value);
  }
  const onChangeSecond = event => {
    const{value} = event.target;
    setSecondCurrency(value);
  }
  const onChangeAmount = event => {
    const{value} = event.target;
    setAmount(value);
  }

  const onExchange = async () => {
    const response = await exchange(firstCurrency);
    const rate = response.data.rates[secondCurrency];
    const result = rate * amount;
    if(firstCurrency === secondCurrency){
      setResult(amount);
    }else if(amount === ""){
      setAmount(0);
    }
    else{
      setResult(result);
    }
  }

  useEffect(() => {
    onExchange();
  },[onChangeFirst,onChangeSecond,onChangeAmount]);

  return (
    <div >
      <div className="container mt-5 col-6" style={{backgroundColor: 'whitesmoke', borderRadius: 25}}>
          <form className="p-4">
            <h1 className="text-center">Exchange Money</h1>
            <div className="form-group">
              <label>Amount</label>
              <input type="number" pattern="[0-9]{10}" className="form-control" onChange={onChangeAmount}></input>
            </div>
            <select className=" form-control form-select form-select-lg mb-3" onChange={onChangeFirst}>
            <option selected>USD</option>
                <option>EUR</option>
                <option>JPY</option>
                <option>BGN</option>
                <option>CZK</option>
                <option>DKK</option>
                <option>GBP</option>          
                <option>HUF</option>
                <option>PLN</option>
                <option>RON</option>
                <option>SEK</option>
                <option>CHF</option>
                <option>ISK</option>
                <option>NOK</option>          
                <option>HRK</option>
                <option>RUB</option>
                <option>TRY</option>
                <option>AUD</option>
                <option>BRL</option>          
                <option>CAD</option>
                <option>CNY</option>
                <option>HKD</option>
                <option>IDR</option>          
                <option>ILS</option>
                <option>INR</option>
                <option>KRW</option>
                <option>MXN</option>          
                <option>MYR</option>
                <option>NZD</option>
                <option>PHP</option>
                <option>SGD</option>
                <option>THB</option>          
                <option>ZAR</option>
            </select>
            <select className=" form-control form-select form-select-lg mb-3" onChange={onChangeSecond} >
                <option>USD</option>
                <option>EUR</option>
                <option>JPY</option>
                <option>BGN</option>
                <option>CZK</option>
                <option>DKK</option>
                <option>GBP</option>          
                <option>HUF</option>
                <option>PLN</option>
                <option>RON</option>
                <option>SEK</option>
                <option>CHF</option>
                <option>ISK</option>
                <option>NOK</option>          
                <option>HRK</option>
                <option>RUB</option>
                <option selected>TRY</option>
                <option>AUD</option>
                <option>BRL</option>          
                <option>CAD</option>
                <option>CNY</option>
                <option>HKD</option>
                <option>IDR</option>          
                <option>ILS</option>
                <option>INR</option>
                <option>KRW</option>
                <option>MXN</option>          
                <option>MYR</option>
                <option>NZD</option>
                <option>PHP</option>
                <option>SGD</option>
                <option>THB</option>          
                <option>ZAR</option>
            </select>
            <div className="alert alert-secondary mt-3">
                 <h3 className="text-center">{amount} {firstCurrency} = {result} {secondCurrency}</h3>
            </div>
          </form>
      </div>
      </div>
    );
};

export default App;
