import React from 'react'
import '../styles/start-date.css';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const StartDate = () => {
  const navigate = useNavigate();
  const { startDateObj } = useOutletContext();
  
  return (
    <div className='center'>
      <section className='start-date'>
        <h1>Enter the Start date :</h1>
        <p>Should be a Monday</p> 

        <form onSubmit={(e) => e.preventDefault()}>
          <input required 
            type='date'
            value={startDateObj.startDate}
            onChange={(e) => startDateObj.setStartDate(e.target.value)}
            />
          <button onClick={(event) => 
            {if(startDateObj.startDate && new Date(startDateObj.startDate).getDay() != 1)
              alert("should be a monday");
              
            else if(startDateObj.startDate) {
              localStorage.setItem('startDate', startDateObj.startDate);
              navigate('/employees');
            }}
            }>Save</button>
        </form>

      </section>
    </div>
    
  )
}

export default StartDate