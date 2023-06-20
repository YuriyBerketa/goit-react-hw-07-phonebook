
import { Wrapper, Label, Input } from './Filter.styled';
import { useDispatch} from 'react-redux';

import { filterContacts } from 'redux/filterSlice';
// import { getFilterContacts } from 'redux/selector';

export const Filter = () => {

    const dispatch = useDispatch();
    // const filter = useSelector(getFilterContacts);
    
 
    return (
        <Wrapper>
            <Label htmlFor='filter'>Find contacts by name</Label>
            <Input type='text'
                // value={filter}
                onChange={evt => dispatch(filterContacts(evt.currentTarget.value))}></Input>
        </Wrapper>
    );
};




