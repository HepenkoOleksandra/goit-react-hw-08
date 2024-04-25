import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name must be at least 3 characters!")
    .max(50, "The name must not exceed 50 characters!")
    .required("Contact name is required!"),
  number: Yup.string()
    .min(7, "The number must have at least 7 characters!")
    .max(20, "The number must not exceed 20 characters!")
    .required("Contact number is required!"),
});

const initialValues = {
  name: "",
  number: "", 
};

const ContactForm = () => {
  const dispatch = useDispatch(); 

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    
    const action = addContact(newContact);
    
    dispatch(action);
    
    actions.resetForm();
  };
    
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.span}>Name</span>
          <Field type="text" name="name" className={css.field} />
          <ErrorMessage component="p" name="name" className={css.error} />
        </label>
        <label className={css.label}>
          <span className={css.span}>Number</span>
          <Field type="text" name="number" className={css.field} />
          <ErrorMessage component="p" name="number" className={css.error} />
        </label>
        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;