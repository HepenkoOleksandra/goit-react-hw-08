import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import css from './Contact.module.css';
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();

    const onDeleteContact = (contactId) => {
    
        dispatch(deleteContact(contactId));
    };
    
    return (
        <div className={css.contactContainer}>
            <div className={css.contact}>
                <h3 className={css.name}>
                    <BiSolidUser className={css.icon} />
                    {name}
                </h3>
                <p className={css.number}>
                    <BsFillTelephoneFill className={css.icon} />
                    {number}
                </p>
            </div>
            <button className={css.button} onClick={() => { onDeleteContact(id) }}>Delete</button>
        </div>
    );
};

export default Contact;