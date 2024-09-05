import React, {useState} from 'react';
import '../styles/solution.css';
import { useOutletContext } from 'react-router-dom';

const Solution = () => {
  const { startDateObj: {startDate}, employeesObj: {employees}, settingsObj:{settings} } = useOutletContext();

  const input = {
    shiftAssignments : [],
    settings : [],
    shiftTypes : ["M","S","N","R"],
    score : null,
    solverStatus : null
  };

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

  console.log(input.shiftAssignments);

  return (
    <div className='center'>
      <section className='solution'>
        <h1>Visualizing the solution</h1>
      </section>
    </div>
  )
}

export default Solution