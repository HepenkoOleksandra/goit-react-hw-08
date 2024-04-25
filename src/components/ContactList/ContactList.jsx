import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
    const contacts = useSelector(selectContacts);//1
    const filter = useSelector(selectNameFilter); //2
  
    const filterContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.toLowerCase().includes(filter.toLowerCase())
        }
    );
    
    return (
        <ul className={css.contactList}>
            {filterContacts.map((contact) => {
                return (<li className={css.contactListItem} key={contact.id}>
                    <Contact name={contact.name} number={contact.number} id={contact.id} />
                </li>)
            })}
        </ul>
    );
};

export default ContactList;