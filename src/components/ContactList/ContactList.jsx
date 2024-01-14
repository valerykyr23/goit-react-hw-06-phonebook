import css from "./ContactList.module.css";
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "components/Redux/ContactsSlice";

export const ContactList = () => {
    
    const dispatch = useDispatch();

    
    const contacts = useSelector(state => state.contacts.items)

    
    
    return (
        <ul className={css.contactsList}>
            {contacts.map(({ id, name, number }) => (<li className={css.contactItem} key={id}><p>{name}:</p> <span>{number}</span> <button className={css.delButton} onClick={() => dispatch(deleteContact(id))} >Delete</button></li>))}
        </ul>
    )
}


// ContactList.propTypes = {
//     contactsList: PropTypes.array,
//     onDeleteContact: PropTypes.func
// }