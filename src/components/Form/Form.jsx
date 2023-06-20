import React, { useState } from "react";
import { Forma, Label, Input , BTN} from './Form.styled';
// import { useDispatch } from "react-redux";
// import { nanoid } from "nanoid";
// import { addContact } from "redux/contactSlice";
import { useCreateContactsMutation } from "redux/phoneBooksApi";
// import { useCreateContactsMutation, useGetContactsQuery } from "redux/phoneBooksApi";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


export function Form() {
    const [create] = useCreateContactsMutation();
    // const { data: contactsList = [] } = useGetContactsQuery();
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');

    // const handleInputChange = (evt) => {
    //     const { name, value } = evt.currentTarget;
    //     if (name === 'name') setName(value);
    //     if (name === 'phone') setPhone(value);
    // }

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();

    //     const normalizeFilter = name.toLowerCase();
    //     const verification = contactsList.every(contact => contact.name.toLowerCase() !== normalizeFilter);

    //     verification ? addContact() : copyContact(name);

    //     setName('');
    //     setPhone('');

    // }

    // const addContact = async () => {
    //     await create({ name, phone });
    // }

    // const copyContact = name => {
    //     Notify.warning(`${name} is already in contacts`)
    // }


    
    // const dispatch = useDispatch();

    const [state, setState] = useState({
        name: '',
        number: '',
    })

    function handleInputChange(evt) {
        const { name, value } = evt.currentTarget;
        setState(state => ({
            ...state,
            [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        // const contact = {
        //     id: nanoid(),
        //     ...state
        // };
        // dispatch(addContact(contact));
        createNewContacts();

        res();
    }
    const createNewContacts = async () => {
         await create(state)
    }
    
    function res() {
        setState({
            name: '',
            number: '',
        })
    }

        return (
            <Forma
                onSubmit={handleSubmit}>
                <Label>Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={state.name}
                        onChange={handleInputChange}
                    />
                </Label>
                <Label>Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={state.number}
                        onChange={handleInputChange}
                    />
                </Label>
                <BTN type="submit">Add contact</BTN>
            </Forma>
        )
    }

