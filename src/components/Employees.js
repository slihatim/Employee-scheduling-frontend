import React from 'react';
import '../styles/employees.css';
import { Outlet, useOutletContext, Link, useNavigate } from 'react-router-dom';

const Employees = () => {
  const { employeesObj, editedObj: { setEditedEmployeeName } } = useOutletContext();

  const navigate = useNavigate();

  function handleDelete(name){
    const employees = employeesObj.employees.filter(employee => employee.name !== name);
    employeesObj.setEmployees(employees);
    localStorage.setItem('employees',JSON.stringify( employees ));
  }

  return (
    <div className='center'>
      <section className='employees'>
        <h1>Add employees</h1>
        <Link to="/new-employee"><button className='add-button'>Add</button></Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skills</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {employeesObj.employees.map(employee => (
              <tr key={employee.name}>
                <td>{employee.name}</td>
                <td>{employee.skills.join(', ')}</td>
                <td>
                  <button className='edit-button' 
                    onClick={() => {
                      setEditedEmployeeName(employee.name);
                      navigate('/edit-employee');
                    }}
                  >Edit</button>
                  <button className='delete-button' onClick={() => handleDelete(employee.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </section>
    </div>
    
  )
}

export default Employees