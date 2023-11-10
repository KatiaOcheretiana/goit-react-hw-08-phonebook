import { FindSection, Title, InputField } from './Filter.styled';

export const Filter = ({ searchContact }) => {
  return (
    <FindSection>
      <Title>Find contacts by name</Title>
      <InputField onChange={searchContact} />
    </FindSection>
  );
};
