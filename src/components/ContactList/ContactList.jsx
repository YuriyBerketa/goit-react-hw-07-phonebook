import React from 'react';
import { Contact, ContactsLi, BTN } from './ContactList.styled';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/phoneBooksApi';
import { getFilter } from 'redux/selector';
import { useSelector } from 'react-redux';

export function ListContact() {
  const { data: contacts = [], isLoading, error } = useGetContactsQuery();

  const filter = useSelector(getFilter).trim();

  const visibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const [deleteContact, { isLoading: isLoadingDelete, error: errorDelete }] =
    useDeleteContactsMutation();

  const handleClick = id => {
    deleteContact(id);
  };

  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Завантажуємо дані з беку</h2>}
      {errorDelete && <h2>{errorDelete}</h2>}
      {isLoadingDelete && <h2>Видяляємо контакт</h2>}

      <Contact>
        {visibleContacts().map(e => (
          <ContactsLi key={e.id}>
            <span>
              {e.name} - {e.number}
            </span>
            <BTN onClick={() => handleClick(e.id)}>Delete</BTN>
          </ContactsLi>
        ))}
      </Contact>
    </>
  );
}
