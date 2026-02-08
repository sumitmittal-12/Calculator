import {useState} from 'react';
import './Common.css'

const CarbonEmission = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);

  const handleCalculation =  () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      alert("Error: Enter numbers in both fields");
      return;
    }

    let res1 = (0.82*n1)/1000;
    let res2 = (0.82*n1*n2)/100000;
    setResult1(res1.toFixed(4));
    setResult2(res2.toFixed(4));
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult1(null);
    setResult2(null);
  };
  return (
    <div className='parent'>
      <div className='box'>
        <h2 style={{fontSize:'40px' ,margin:'10px'}}>Carbon Emission Calculator</h2>
        <p style={{fontSize:'40px' ,margin:'10px',marginTop:'0px'}}>Enter the data below!</p>
        <div>
          <div className='input-group'>
           <label className='label'>Total unit Imported from grid (kWh)</label>
           <input
            type='number'
            value={num1}
            onChange={(e)=>setNum1(e.target.value)}
            className='input'
            />
          </div>
          <div className='input-group'>
           <label className='label'>Transmission loss (%)</label>
           <input
            type='number'
            value={num2}
            onChange={(e)=>setNum2(e.target.value)}
            className='input'
            />
          </div>
        </div>

        <div className="operator-buttons">
          <button className='btn' onClick={() => handleCalculation()}>Calculate</button>
        </div>

        <div className="utility-buttons">
          <button className="btn" onClick={handleClear}>Clear Everything</button>
        </div>

        {result1 !== null && result2 !==null && (
          <div className="result-area">
            <div>
             <span style={{fontSize:'35px' ,marginLeft:'-40px'}}>Total Grid Emission is:</span>
             <div style={{fontSize:'30px',marginLeft:'-40px'}}>{result1}</div>
            </div>
            <div>
             <span style={{fontSize:'35px' ,marginLeft:'-40px'}}>T&D Loss:</span>
             <div style={{fontSize:'30px' ,marginLeft:'-40px'}}>{result2}</div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default CarbonEmission
