// import { combineReducers } from "@reduxjs/toolkit";
// import { contactReduser } from "./contactSlice";
import { filterReduser } from "./filterSlice";
import { phoneBooksApi } from "./phoneBooksApi";


export const reducer = {
    // contacts: contactReduser,
    filter: filterReduser,
    [phoneBooksApi.reducerPath]: phoneBooksApi.reducer,
};