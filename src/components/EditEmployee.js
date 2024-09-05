import React, { useState } from 'react';

import { useOutletContext, useNavigate } from 'react-router-dom';

const EditEmployee = () => {

  const { employeesObj, editedObj: {editedEmployeeName} } = useOutletContext();
  const navigate = useNavigate();

  const [skills, setSkills] = useState(() => {
    const employee = employeesObj.employees.find(employee => employee.name === editedEmployeeName);
    return employee ? employee.skills.join(',') : ''; 
  });

  function editEmployee(name, skills){
    const employees = [...employeesObj.employees];
    employees.filter(employee => employee.name == editedEmployeeName)[0].skills =  skills.split(',').map(skill => skill.trim());
    employeesObj.setEmployees(employees);
    localStorage.setItem('employees',JSON.stringify(employees));
  }

  return (
    <div className='center'>
        <section className='new-employee'>
            <h3>Edit Setting</h3>
            <form style={{display:'inline'}} onSubmit={e => e.preventDefault()}>
                <label>Name : 
                  <input style={{display: 'block', width: '100%',marginBottom: '15px'}} 
                    type='text' 
                    required
                    autoFocus
                    value={editedEmployeeName}
                    placeholder='name'
                    disabled
                    />
                </label>

                <label>Skills : 
                  <input style={{display: 'block', width: '100%',marginBottom: '25px'}} 
                      type='text' 
                      required
                      value={skills}
                      placeholder='comma seperated values'
                      onChange={(e) => setSkills(e.target.value)}
                      />
                </label>

                <button className="add-button"
                    type='submit'
                    onClick={() => {
                      if(skills){
                        editEmployee(editedEmployeeName, skills);
                        navigate('/employees');
                      }
                    }}
                >Edit</button>
                
            </form>
            <button className='cancel-button'
                onClick={() => navigate('/employees')}
            >
                  Cancel
                </button>
        </section>
    </div>
    
  )
}

export default EditEmployee;