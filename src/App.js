import React, { useState, useEffect } from 'react';
import './demo.css';

const URL = "https://api.exchangerate-api.com/v4/latest/USD"; 

function Demo() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [rates, setRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchRates();
  }, []);

  const handleConversion = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount(amount * rate);
      setShowResult(true); 
    }
  };

  return (
    <div className='container'>
      <h2>Currency Converter</h2>
      <form>
        <div className='amount'>
          <p>Enter amount:</p>
          <input
            className='amount-input'
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className='dropdown'>
          <div className='from'>
            <p>From</p>
            <div className='select-container'>
              <select
                className='choose'
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
          </div>
          <div className='to'>
            <p>To</p>
            <div className='select-container'>
              <select
                className='choose'
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
          </div>
        </div>
        <button type='button' onClick={handleConversion}>Convert</button>
      </form>
      {showResult && convertedAmount !== null && (
        <div className='result'>
          <p>
            {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
}

export default Demo;
