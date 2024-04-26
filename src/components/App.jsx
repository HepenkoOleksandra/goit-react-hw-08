import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import css from '../App.module.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const navLinkClassActive = ({ isActive }) =>
  // clsx(css.navLink, { [css.active]: isActive });
clsx(css.navLink, isActive && css.active);

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
   
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={navLinkClassActive} to="/">Home</NavLink>
          <NavLink className={navLinkClassActive} to="/movies">Movies</NavLink>
          <NavLink className={navLinkClassActive} to="/movies">Movies</NavLink>
          <NavLink className={navLinkClassActive} to="/movies">Movies</NavLink>
        </nav>
      </header>

    <div className='container'>
      <h1 className='containerTitle'>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      </div>
    </>
  )
}

export default App