
import { Wrapper, Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';

import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {

    const dispatch = useDispatch();
    
 
    return (
        <Wrapper>
            <Label htmlFor='filter'>Find contacts by name</Label>
            <Input type='text'
                
                onChange={evt => dispatch(filterContacts(evt.currentTarget.value))}></Input>
        </Wrapper>
    );
};




