// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { fetchContacts } from "../redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
//lazy
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage ";
import Layout from "./Layout/Layout";
import { apiRefreshUser } from "../redux/auth/operations";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
     // dispatch(fetchContacts());
     dispatch(apiRefreshUser());
    }, [dispatch]);
   
  return (
    <Layout>
     {/* <Suspense fallback={<Loader />}> */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
      {/* </Suspense> */}
    </Layout>
      
    // <div className='container'>
    //   <h1 className='containerTitle'>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   <ContactList />
    //   </div>
    // </div>
  )
}

export default App