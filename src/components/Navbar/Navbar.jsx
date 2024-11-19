import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const navActive = ({ isActive }) => (isActive ? s.active : s.item); 

const Navbar = () => {
  return (
    <nav className={s.navbar}>

      <div className={s.item}>
        <NavLink to="/profile" className={ navActive }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={ navActive }>Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={ navActive }>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={ navActive } >Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={ navActive }>Settings</NavLink>
      </div>

    </nav>
  )
}

export default Navbar; 
