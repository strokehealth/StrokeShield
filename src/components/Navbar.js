import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Heart Stroke Risk Assessment
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Questionnaire</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;