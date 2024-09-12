import React from 'react';
import '../styles/employees.css';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';

const Settings = () => {
  const { settingsObj: {settings, setSettings}, editedObj: { setEditedSettingId } } = useOutletContext();

  const navigate = useNavigate();

  function handleDelete(id){
    const tempSettings = settings.filter(setting => setting.id !== id);
    setSettings(tempSettings);
    localStorage.setItem('settings',JSON.stringify( tempSettings ));
  }

  return (
    <div className='center'>
      <section className='employees'>
        <h1>Add daily needs</h1>
        <Link to="/new-setting"><button className='add-button'>Add</button></Link>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Day</th>
              <th>Shift</th>
              <th>Skill</th>
              <th>Min Employees</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {settings.map(setting => (
              <tr key={setting.id}>
                <td>{setting.id}</td>
                <td>{setting.day}</td>
                <td>{setting.shift}</td>
                <td>{setting.skill}</td>
                <td>{setting.minEmployees}</td>
                <td>
                  <button className='edit-button' 
                    onClick={() => {
                      setEditedSettingId(setting.id);
                      navigate('/edit-setting');
                    }}
                  >Edit</button>
                  <button className='delete-button' onClick={() => handleDelete(setting.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </section>
    </div>
    
  )
}

export default Settings;