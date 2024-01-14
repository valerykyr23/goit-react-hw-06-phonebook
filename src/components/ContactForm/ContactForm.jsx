// eslint-disable-next-line

import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'components/Redux/ContactsSlice';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';


export const ContactForm = () => {
  
 
  const dispatch = useDispatch();

  const formSubmithandler = (event) => {



    event.preventDefault();
   
    const newContact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value
    }

    dispatch(addContact(newContact));

    event.target.reset();

  }
  

  return (
      
    <form className={css.mainForm} onSubmit={formSubmithandler}>
      <div>
        <label className={css.formLabel}>
          
          Name
          <input
            className={css.formInput}
            // value={name}
            // onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>

      <div>
        <label className={css.formLabel}>
          
          Number
          <input
            className={css.formInput}
            // value={number}
            // onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>

      <button className={css.addButton} type="submit"> Add contact</button>
    </form>
  );
  
}
  

