import clsx from "clsx";
import { NavLink } from "react-router-dom"
import css from './AuthNav.module.css';

const navLinkClassActive = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });
// clsx(css.navLink, isActive && css.active);

const AuthNav = () => {
  return (
    <div className={css.authContainer}>
        <NavLink className={navLinkClassActive} to="/register">Register</NavLink>
        <NavLink className={navLinkClassActive} to="/login">Login</NavLink>
    </div>
  )
}

export default AuthNav