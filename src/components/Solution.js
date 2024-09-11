import React, {useEffect, useState} from 'react';
import '../styles/solution.css';
import { useOutletContext } from 'react-router-dom';
import ReverseTimer from './ReverseTimer';
import SchedulerComponent from './Scheduler';

const Solution = () => {
  const { startDateObj: {startDate}, employeesObj: {employees}, settingsObj:{settings} } = useOutletContext();
  const URL = 'https://quarkus-app-backend-employee-scheduing.onrender.com/schedules/';

  const [lastId, setLastId] = useState(localStorage.getItem('lastId') || '');
  const [isLoading, setIsLoading] = useState(false);

  const input = {
    shiftAssignments : [],
    settings : [],
    shiftTypes : ["M","S","N","R"],
    score : null,
    solverStatus : null
  };
  const [output, setOutput] = useState({shiftAssignments: []});
  useEffect(() => {
    if(lastId){
      const initialFetch = async () => {
        try {
          const response = await fetch(URL + lastId);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          setOutput(data);
          console.log(data);
        } catch (error) {
          console.error(error.message);
        }
      }
      (async () => await initialFetch())()
      
    }
  },[])

  async function solve(){
    if(!startDate){
      alert('Enter a start Date');
    }
    else if(!employees){
      alert('Enter at least one employee');
    }
    else {
      generateInput();
      //posting input data to server
      let errorFlag = true;
      let tempLastId = '';
      try{
        const response = await fetch(URL,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        })
        //if response was not ok
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        errorFlag = false;
        const data = await response.text();
        setLastId(data);
        tempLastId = data;
        localStorage.setItem('lastId',data);
        console.log('Success:', data);
      }catch(error){
        console.error(error.message);
      }finally{
        if(!errorFlag){
          setIsLoading(true);
          (async () => await gettingSolution(tempLastId))()
        }

      }
    }
    
  }

  async function gettingSolution(tempLastId){
    //getting the solution
    setTimeout(async () => {
      console.log(tempLastId);
      try {
        const response = await fetch(URL + tempLastId);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setOutput(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }finally{
        setIsLoading(false);
      }
    }, 180000);
  }

  function generateInput(){
    //shiftAssignments
    input.shiftAssignments = [];
    let id = 1;
    employees.forEach(employee => {
      for(let i=0; i<21; i++){
        let date = new Date(startDate);
        date.setDate(date.getDate() + i);

        input.shiftAssignments.push({
          id: id+'',
          employee,
          date: date.toISOString().slice(0, 10),
          shiftType: null
        })

        id++;
      }
    })
    //settings
    input.settings = [];
    settings.forEach(setting => {
      input.settings.push(setting);
    })
  }

  return (
    <div className='center'>
      <section className='solution'>
        <h1>Visualizing the solution</h1>
        <button className='add-button' onClick={solve}>Solve</button>
        {isLoading ? <ReverseTimer /> : ''}
      </section>
      <section style={{flexBasis: '90%',marginBottom:'20px'}}> 
        <SchedulerComponent className='scheduler' isLoading={isLoading} startDate={startDate} shifts={output.shiftAssignments}/>
      </section>
    </div>
  )
}

export default Solution