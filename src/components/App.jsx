
import {ListContact} from "./ContactList";

import {Form} from './Form';

import {Filter} from "./Filter";

import { Div } from "./App.styled";







export function App() {
return (
      <Div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ListContact />
      </Div>
    )

}