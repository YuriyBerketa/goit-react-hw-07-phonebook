import React from 'react';
import { Contact, ContactsLi, BTN } from './ContactList.styled';
// import { deleteContact } from "redux/contactSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { getFilterContacts } from "redux/selector";
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/phoneBooksApi';

export function ListContact() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(getFilterContacts);
    const { data: contacts = [], isLoading, error } = useGetContactsQuery();
    // console.log([contacts.name]);

  
  const [deleteContact, { isLoading: isLoadingDelete, error: errorDelete }] =
        useDeleteContactsMutation();
    
  const handleClick = id => {
      deleteContact(id)
   
  };

    return (
        <>
         { error && <h2>{error}</h2>}
            {isLoading && <h2>Завантажуємо дані з беку</h2>}
            { errorDelete && <h2>{errorDelete}</h2>}
        {isLoadingDelete && <h2>`Видяляємо контакт ${contacts.name}`</h2>}

    <Contact>
      {contacts.map(e => (
        <ContactsLi key={e.id}>
          <span>
            {e.name} - {e.number}
          </span>
          <BTN onClick={() => handleClick(e.id)}>Delete</BTN>
        </ContactsLi>
      ))}
    </Contact></>
  );
}
