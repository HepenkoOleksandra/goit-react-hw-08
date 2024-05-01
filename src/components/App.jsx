import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";
import Layout from "./Layout/Layout";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { apiRefreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage '));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

   useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
   
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={
          <RestrictedRoute>
            <RegistrationPage />
          </RestrictedRoute>} />
        <Route path='/login' element={
          <RestrictedRoute>
            <LoginPage />
          </RestrictedRoute>} />
        <Route path='/contacts' element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        } />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </Layout>
  );    
}

export default App