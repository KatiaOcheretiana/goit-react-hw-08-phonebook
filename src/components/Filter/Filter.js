import { useDispatch } from 'react-redux';
import { FindSection, Title, InputField } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FindSection>
      <Title>Find contacts by name</Title>
      <InputField onChange={e => dispatch(changeFilter(e.target.value))} />
    </FindSection>
  );
};
