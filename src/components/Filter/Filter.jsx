import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FindLabel, PromptFind, FindInput } from './Filter.styled.jsx';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterRedax = useSelector(getFilter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <FindLabel>
      <PromptFind>Find contacts by name</PromptFind>
      <FindInput
        type="text"
        name="filter"
        value={filterRedax}
        onChange={handleChange}
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
