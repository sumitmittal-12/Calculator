import React from 'react';
import { Link } from 'react-router-dom' ;
import './Home.css'

const Home = () => {
  return (
    <div className='parent'>
      <div className='box'>
        <h2 className='heading'>Grid Emission Tool</h2>
        <p className='subheading'>Welcome! Click below to start calculating.</p>
        
        <div>  
         <Link to="/carbonEmission">
            <button className='btn'>
            Carbon Emission
            </button>
         </Link>
        </div>
        <div>
         <Link to="/fuel">
          <button className='btn'>
            Fuel
          </button>
         </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
