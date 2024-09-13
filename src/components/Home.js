import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='center'>
      <section className='home'>
        <h1>Employee Scheduling App</h1>
        
        <p>This app <span className='green'>schedules shifts</span> for employees for 3 weeks. There are work shifts : M (Matin), S (Soir), N (Nuit), and there is Rest shift R (Repos).</p>
        
        <ul>
          <li>You can specify your <span className='green'>daily needs</span> for each skill (Engineer, Consultant...), for each shift (M,S,N,R), in each day (MONDAY, TUESDAY...).</li>
          
          <li><span className='green'>Example of a daily need :</span> "On a Monday, in M shift, i need at least 2 Engineers, and 3 Consultants"</li>
          
          <li>Each employee <span className='green'>has to work 5 days</span> in the same shift, and <span className='green'>get 2 days of rest</span>. Specifically, the pattern during 3 weeks should be <code style={{fontFamily: 'Poppins'}}>MMMMMRRNNNNNRRSSSSSRR</code> in a cyclic manner, to ensure that he gets at least 2 days and a half of rest. </li>
        </ul>
        
        <h2 className='blue'>How to run the application</h2>
        <ol>
          
          <li>Start out by entering the <span className='green'>start date</span> (should be a Monday).</li>
          
          <li><span className='green'>Add employees</span> either manually, or <span className='green'>import them as a JSON</span> array in this specific format <code>[ <br/>&nbsp;&nbsp;{'{'}"name": "worker 0", skills: ["Engineer"]{'}'},<br/>&nbsp;&nbsp;{'{'}"name": "worker 1", skills: ["Consultant"]{'}'} <br/>]</code></li>
          
          <li><span className='green'>Add daily needs</span> either manually, or <span className='green'>import them as a JSON</span> array in this specific format <code>[<br/>&nbsp;&nbsp;{'{'}"id": "1","day": "MONDAY","shift": "M","skill": "Consultant","minEmployees": 2{'}'},<br/>&nbsp;&nbsp;
            {'{'}"id": "2","day": "MONDAY","shift": "M","skill": "Engineer","minEmployees": 1{'}'}]</code></li>
          
          <li>Finally, you can click on the <span className='green'>solve</span> button, and wait 3 minutes for the solving to happen. Also, you can <span className='green'>export the solution as JSON</span>. </li>
        </ol>
      </section>
    </div>
  )
}

export default Home