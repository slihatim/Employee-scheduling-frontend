import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { useState,useEffect } from 'react';
import { settingsData, employeesData } from './data/data';

const SharedLayout = () => {

  useEffect(() => {
    const initialGetRequest = async () => {
      try{
        const response = await fetch('https://quarkus-app-backend-employee-scheduing.onrender.com/');
        if(!response.ok)  throw new Error(`Server is inactive, HTTP error! status: ${response.status}`);
        const data = await response.text();
      }catch(err){
        console.error(err.message);
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
        <Outlet context={props}/>
    </main>
  )
}

export default SharedLayout;