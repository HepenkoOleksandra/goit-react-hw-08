// import clsx from "clsx";
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from '../../App.module.css';
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav />}  
        </nav>
      </header>
    </div>
  )
}

export default AppBar
