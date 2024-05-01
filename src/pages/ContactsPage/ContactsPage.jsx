import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contacts/operations"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import css from './ContactsPage.module.css'

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div className={css.contactsPageContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default ContactsPage