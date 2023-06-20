import { filterReduser } from "./filterSlice";
import { phoneBooksApi } from "./phoneBooksApi";


export const reducer = {
    filter: filterReduser,
    [phoneBooksApi.reducerPath]: phoneBooksApi.reducer,
};