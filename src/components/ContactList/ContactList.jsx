import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
// import { selectFilteredContacts, selectIsError, selectIsLoading } from "../../redux/contacts/slice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { selectFilteredContacts, selectIsError, selectIsLoading } from "../../redux/contacts/selectors";

const ContactList = () => {
    // const contacts = useSelector(selectContacts);//1
    // const filter = useSelector(selectNameFilter); //2
    const filterContacts = useSelector(selectFilteredContacts);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectIsError);
  
    // const filterContacts = contacts.filter((contact) => {
    //     return contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    //         contact.number.toLowerCase().includes(filter.toLowerCase())
    //     }
    // ); 

    return (
        <ul className={css.contactList}>
            {loading && <Loader/> }
            {error && <ErrorMessage />}
            {Array.isArray(filterContacts) && filterContacts.length === 0 &&
                (<li>There are no contacts. Please add contacts!</li>)}
        {Array.isArray(filterContacts) && filterContacts.map(({name, number, id}) => {
                return (<li className={css.contactListItem} key={id}>
                    <Contact name={name} number={number} id={id} />
                </li>)
            })}
        </ul>
    );
};

export default ContactList;