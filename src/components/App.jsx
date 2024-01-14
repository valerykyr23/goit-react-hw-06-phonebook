// eslint-disable-next-line



import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';




export const App = () => {
  
  const arrayFriends = useSelector(state => state.contacts);

  console.log(arrayFriends)
    
    return (
      
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
          color: '#010101',
          flexDirection: 'column',
      }}
    >
        <h1>Phonebook</h1>

        <ContactForm></ContactForm>

        <h2>Contacts</h2>

        <Filter></Filter>
        <ContactList></ContactList>
        
      </div>
    
    )
 }

