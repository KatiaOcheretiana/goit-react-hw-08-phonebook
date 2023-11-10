import styled from 'styled-components';

export const List = styled.ul`
  padding: 4px;
  margin-top: 24px;
  width: 290px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 4px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 12px;

  &:hover,
  &:focus {
    background-color: orange;
  }
`;
