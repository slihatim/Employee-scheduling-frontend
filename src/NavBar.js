import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{textAlign:'center'}}>
        <ul>
            <li>
                <NavLink to="/" 
                className={({isActive}) => (isActive ? "selected no-style-link" : "no-style-link")}
                >Home</NavLink>
            </li>
            <li>
                <NavLink to="start-date" 
                className={({isActive}) => (isActive ? "selected no-style-link" : "no-style-link")}
                >1. Start date</NavLink>
            </li>
            <li>
                <NavLink to="employees" 
                className={({isActive}) => (isActive ? "selected no-style-link" : "no-style-link")}
                >2. Employees</NavLink>
            </li>
            <li>
                <NavLink to="settings" 
                className={({isActive}) => (isActive ? "selected no-style-link" : "no-style-link")}
                >3. Daily needs</NavLink>
            </li>
            <li>
                <NavLink to="solution" 
                className={({isActive}) => (isActive ? "selected no-style-link" : "no-style-link")}
                >4. Solution</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;