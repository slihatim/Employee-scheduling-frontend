import React, { useState } from 'react';

import { useOutletContext, useNavigate } from 'react-router-dom';

const EditSetting = () => {

  const { settingsObj: {settings, setSettings}, employeesObj: {employees}, editedObj: {editedSettingId} } = useOutletContext();
  const navigate = useNavigate();

  const skillsSet = new Set();
  employees.map(employee => employee.skills.map(skill => skillsSet.add(skill)));

  const [temp, setTemp] = useState(() => {
    const setting = settings.find(setting => setting.id == editedSettingId);
    return setting ? {...setting} : {id:'',day:'',shift:'',skill:'',minEmployees:0};
  });

  function editSetting(day, shift, skill, minEmployees){
    const tempSettings = settings.map(setting => setting.id ===editedSettingId ? {id : editedSettingId, day, shift, skill, minEmployees} : setting);
    setSettings(tempSettings);
    localStorage.setItem('settings',JSON.stringify(tempSettings));
  }

  return (
    <div className='center'>
        <section className='new-employee' style={{minHeight: '440px'}}>
        <h3>Edit Daily Need</h3>
            <form style={{display:'inline'}} onSubmit={e => e.preventDefault()}>
                <label>Day : 
                  <select style={{display: 'block', width: '100%',marginBottom: '15px'}} 
                    autoFocus
                    required
                    onChange={(e) => setTemp({...temp, day : e.target.value})}
                    defaultValue={temp.day}
                    >
                        <option value="">-- Choose a day --</option>
                        <option value="MONDAY">MONDAY</option>
                        <option value="TUESDAY">TUESDAY</option>
                        <option value="WEDNESDAY">WEDNESDAY</option>
                        <option value="THURSDAY">THURSDAY</option>
                        <option value="FRIDAY">FRIDAY</option>
                        <option value="SATURDAY">SATURDAY</option>
                        <option value="SUNDAY">SUNDAY</option>
                    </select>
                </label>

                <label>Shift : 
                  <select style={{display: 'block', width: '100%',marginBottom: '15px'}} 
                      required
                      onChange={(e) => setTemp({...temp, shift : e.target.value})}
                      defaultValue={temp.shift}
                      >
                        <option value="">-- Choose a shift --</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        <option value="N">N</option>
                        <option value="R">R</option>
                      </select>
                </label>

                <label>Skill : 
                  <select style={{display: 'block', width: '100%',marginBottom: '15px'}} 
                      required
                      onChange={(e) => setTemp({...temp, skill : e.target.value})}
                      defaultValue={temp.skill}
                      >
                        <option value="">-- Choose a skill --</option>
                        {Array.from(skillsSet).map(skill => <option value={skill}>{skill}</option>)}
                      </select>
                </label>

                <label>Minimum employees : 
                  <input style={{display: 'block', width: '100%',marginBottom: '25px'}} 
                      type='number' 
                      required
                      min="1"
                      value={temp.minEmployees}
                      onChange={(e) => setTemp({...temp, minEmployees : e.target.value})}
                      />
                </label>

                <button className="add-button"
                    type='submit'
                    onClick={() => {
                        if(temp.day && temp.shift && temp.skill && temp.minEmployees){
                            editSetting(temp.day, temp.shift, temp.skill, temp.minEmployees);
                            navigate('/settings');
                        }
                    }}
                >Edit</button>
                
            </form>
            <button className='cancel-button'
                onClick={() => navigate('/settings')}
            >
                  Cancel
                </button>
        </section>
    </div>
    
  )
}

export default EditSetting;