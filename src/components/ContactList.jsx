import { useSelector } from "react-redux";
import { getContacs } from "redux/selectors";
import { ListItem } from "./Listitem";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactSlisce";
import { getFilter } from "redux/selectors";


// .includes(filter.toLowerCase()

export function ContactList (){
  const dispatch = useDispatch();
  const contacts = useSelector(getContacs);
  const filter = useSelector(getFilter);

  

  const onDeleteContact = ()=> dispatch(deleteContact(contacts.id))

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = filtredContacts()
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase())
 
  
    return (
      <ul >
        {visibleContacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteItem={() => onDeleteContact(id)}
          />
        ))}
      </ul>
    )
  };

     

