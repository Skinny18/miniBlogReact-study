import { NavLink } from "react-router-dom"
import styles from "./Navbar.modules.css"

const Navbar = () => {
  return (
    <nav className="navbar">
       <NavLink to="/" className="brand">
           Mini<span>Blog</span>
        </NavLink> 
        <ul className="links_list">
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : " ")}>                   
                 Home
                </NavLink>
            </li>
            <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : " ")}>                    

                    Sobre
                </NavLink>
            </li>
            <li>
            <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : " ")}>                    

                    Login
                </NavLink>
            </li>
            <li>
            <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : " ")}>                    

                    Register
                </NavLink>
            </li>
        </ul>
    </nav>
 )
}

export default Navbar