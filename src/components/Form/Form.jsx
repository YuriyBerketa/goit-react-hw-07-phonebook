import React, { useState } from "react";
import { Forma, Label, Input , BTN} from './Form.styled';
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "redux/contactSlice";


export function Form() {
    
    const dispatch = useDispatch();

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

        const contact = {
            id: nanoid(),
            ...state
        };
        dispatch(addContact(contact));

        res();
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


