
export const getFilter = state => state.filter.filter;

export const getItem = state => state.contacts.contacts;

export const getFilterContacts = state => { 
    const contacts = getItem(state); 
    const filter = getFilter(state); 
    const getFilterContacts = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())); 
    return getFilterContacts; 
};



