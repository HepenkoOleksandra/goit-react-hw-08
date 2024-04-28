import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from '../../App.module.css';

const navLinkClassActive = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });
// clsx(css.navLink, isActive && css.active);

const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
        <NavLink className={navLinkClassActive} to="/">Home</NavLink>
        {isLoggedIn && <NavLink className={navLinkClassActive} to="/contacts">Contacts</NavLink>}
    </div>
  )
}

export default Navigation