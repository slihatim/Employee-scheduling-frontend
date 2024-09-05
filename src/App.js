import './App.css';
import SharedLayout from './SharedLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StartDate from './components/StartDate';
import Employees from './components/Employees';
import Settings from './components/Settings';
import Solution from './components/Solution';
import NewEmployee from './components/NewEmployee';
import EditEmployee from './components/EditEmployee';
import NewSetting from './components/NewSetting';
import EditSetting from './components/EditSetting';

function App() {
  return (
    
    <div className="App">
      <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path="start-date" element={<StartDate />}/>
            <Route path="employees" element={<Employees />}/>
            <Route path="new-employee" element={<NewEmployee/>}/>
            <Route path="edit-employee" element={<EditEmployee/>}/>
            <Route path="settings" element={<Settings />}/>
            <Route path="new-setting" element={<NewSetting />}/>
            <Route path="edit-setting" element={<EditSetting />}/>
            <Route path="solution" element={<Solution />}/>
            <Route path="*" element={<div>404 Not found</div>}></Route>
          </Route>
      </Routes>
    </div>

      
    
    
  );
}

export default App;
