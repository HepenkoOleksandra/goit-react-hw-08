import clsx from "clsx";
import css from '../../App.module.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const navLinkClassActive = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });
// clsx(css.navLink, isActive && css.active);

const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={navLinkClassActive} to="/">Home</NavLink>
          {isLoggedIn ? (
            <>
              <NavLink className={navLinkClassActive} to="/contacts">Contacts</NavLink>
            </>
          ) : (
            <>
              <NavLink className={navLinkClassActive} to="/register">Register</NavLink>
              <NavLink className={navLinkClassActive} to="/login">Login</NavLink>
            </>
          )}  
        </nav>
      </header>

        <main>
              {children}
        </main>
    </div>
  );
};

export default Layout