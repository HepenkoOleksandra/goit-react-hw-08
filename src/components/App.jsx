import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import css from '../App.module.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import clsx from "clsx";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage ";

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

      <main>
        {/* <Suspense fallback={<Loader />}> */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        {/* </Suspense> */}
      </main>

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