import { useDispatch } from 'react-redux';
import { FindBox } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';
import { InputAdornment, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FindBox>
      <TextField
        onChange={e => dispatch(changeFilter(e.target.value))}
        id="input-with-icon-textfield"
        label="Find contacts by name"
        sx={{ width: '96%' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </FindBox>
  );
};
