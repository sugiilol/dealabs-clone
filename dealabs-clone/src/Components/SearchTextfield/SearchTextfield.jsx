import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SearchTextfield.css'

export default function SearchTextfield() {
  return (
      <TextField id="outlined-basic" label="Recherche..." variant="outlined"/>
  );
}