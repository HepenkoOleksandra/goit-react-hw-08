import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import css from './Contact.module.css';

const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();
    
    const onDelete = (contactId) => {
        const action = deleteContact(contactId);

        dispatch(action);
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
            <button className={css.button} onClick={() => { onDelete(id) }}>Delete</button>
        </div>
    );
};

export default Contact;