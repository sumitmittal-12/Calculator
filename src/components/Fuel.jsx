import {useState} from 'react'
import './Common.css'

const Fuel = () => {

  const [num, setNum] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation =  () => {
    const n = parseFloat(num);
    if (isNaN(n)) {
      alert("Error: Enter numbers in all fields");
      return;
    }

    let res = (2.65*n)/1000;
    setResult(res.toFixed(4));
  };


  const handleClear = () => {
    setNum("");
    setResult(null);
  };

  return (
    <div className='parent'>
      <div className='box'>
        <h2 style={{fontSize:'40px' ,margin:'10px'}}>Carbon Emission from Fuel</h2>
        <p style={{fontSize:'40px' ,margin:'10px',marginTop:'0px'}}>Enter the data below!</p>
        <div className='input-group'>
           <label className='label'>Total fuel consumption (L)</label>
           <input
            type='number'
            value={num}
            onChange={(e)=>setNum(e.target.value)}
            className='input'
           />
        </div>

        <div className="operator-buttons">
          <button className='btn' onClick={() => handleCalculation()}>Calculate</button>
        </div>

        <div className="utility-buttons">
          <button className="btn" onClick={handleClear}>Clear Everything</button>
        </div>

        {result !== null && (
          <div className="result-area">
            <div>
             <span style={{fontSize:'35px' ,marginLeft:'-40px'}}>Total Grid Emission is:</span>
             <div className="result-value" style={{fontSize:'30px' ,marginLeft:'-40px'}}>{result}</div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Fuel
