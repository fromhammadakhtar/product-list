import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export default function SearchComponent({ onSearch }) {
  const onSub = (e) => {
    onSearch(e.target.value.toLowerCase());
  };
  return (
    <div>
      <TextField
        fullWidth
        placeholder='Search for Products'
        onChange={onSub}
        InputProps={{
          endAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
