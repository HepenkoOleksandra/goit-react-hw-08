import { useDispatch } from "react-redux"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { useEffect } from "react"
// import { apiGetAllContacts } from "../../services/contactsApi"
import { fetchContacts } from "../../redux/contacts/operations"

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div>
      <h1 className='containerTitle'>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default ContactsPage