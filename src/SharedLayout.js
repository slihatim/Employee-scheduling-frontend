import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { useState,useEffect } from 'react';
import { settingsData, employeesData } from './data/data';

const SharedLayout = () => {
  let data = '';

  useEffect(() => {
    const initialGetRequest = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if(!response.ok)  throw new Error('server is not running');
        data = await response.json();
      }catch(err){
        alert(err);
      }
    }
    (async () => await initialGetRequest())()

  }, [])
  
  const [startDate, setStartDate] = useState(localStorage.getItem('startDate') || '');
  
  const [employees, setEmployees] = useState(() => {
    if( JSON.parse(localStorage.getItem('employees')) )
      return JSON.parse(localStorage.getItem('employees'));
    else{
      localStorage.setItem('employees', employeesData);
      return JSON.parse(employeesData);
    }
  });
  
  const [settings, setSettings] = useState(() => {
    if( JSON.parse(localStorage.getItem('settings')) )
      return JSON.parse(localStorage.getItem('settings'));
    else{
      localStorage.setItem('settings', settingsData);
      return JSON.parse(settingsData);
    }
  });

  const [editedEmployeeName, setEditedEmployeeName] = useState('');
  const [editedSettingId, setEditedSettingId] = useState('');

  const props = {
    startDateObj : {
      startDate,
      setStartDate
    },
    employeesObj : {
      employees,
      setEmployees
    },
    settingsObj : {
      settings, 
      setSettings
    },
    editedObj : {
      editedEmployeeName,
      setEditedEmployeeName,
      editedSettingId,
      setEditedSettingId
    }
  }

  return (
    <main>
        <NavBar />
        <div>{data}</div>
        <Outlet context={props}/>
    </main>
  )
}

export default SharedLayout;