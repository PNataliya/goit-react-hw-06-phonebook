import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/contactsSlice';
import { FindLabel, PromptFind, FindInput } from './Filter.styled.jsx';

export const Filter = () => {
  const contactsFilter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <FindLabel>
      <PromptFind>Find contacts by name</PromptFind>
      <FindInput
        type="text"
        name="filter"
        value={contactsFilter}
        onChange={changeFieldFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FindLabel>
  );
};

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
