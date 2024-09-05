import React from 'react';
import '../styles/employees.css';
import { useOutletContext, useNavigate } from 'react-router-dom';

const NewEmployee = () => {
  let name = '';
  let skills = '';

  const { employeesObj } = useOutletContext();
  const navigate = useNavigate();

  function addEmployee(name, skills){
    const employees = [...employeesObj.employees];
    employees.push({name, skills: skills.split(',').map(skill => skill.trim())});
    employeesObj.setEmployees(employees);
    localStorage.setItem('employees',JSON.stringify(employees));
  }

  return (
    <div className='center'>
        <section className='new-employee'>
            <h3>New Employee</h3>
            <form style={{display:'inline'}} onSubmit={e => e.preventDefault()}>
                <label>Name : 
                  <input style={{display: 'block', width: '100%',marginBottom: '15px'}} 
                    type='text' 
                    required
                    autoFocus
                    placeholder='name'
                    onChange={(e) => name = e.target.value}
                    />
                </label>

                <label>Skills : 
                  <input style={{display: 'block', width: '100%',marginBottom: '25px'}} 
                      type='text' 
                      required
                      placeholder='comma seperated values'
                      onChange={(e) => skills = e.target.value}
                      />
                </label>

                <button className="add-button"
                    type='submit'
                    onClick={() => {
                      if(name && skills){
                        addEmployee(name, skills);
                        navigate('/employees');
                      }
                    }}
                >Add</button>
                
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

export default NewEmployee;