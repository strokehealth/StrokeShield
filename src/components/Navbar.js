import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar
  position="static"
  elevation={0}
  sx={{ backgroundColor: '#fff', color: '#000' }}
>
            <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <Box sx={{ width: 50, height: 50, mr: 1 }}>
            <img
              src={process.env.PUBLIC_URL + '/stroke loge.jpg'}
              alt="Stroke Logo"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          </Box>
          <Typography 
            variant="h6" 
            color="inherit" 
            noWrap 
            component={Link} 
            to="/"
            sx={{ 
              textDecoration: 'none', 
              color: '#A6192E', 
              cursor: 'pointer',
              fontWeight: 700 
            }}
          >
            Stroke <br />
            Shield
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" sx={{ mr: 1 }} component={Link} to="/about">About</Button>
        <Button color="inherit" sx={{ mr: 1 }} component={Link} to="/resources">Resources</Button>
        <Button color="inherit" sx={{ mr: 1 }} component={Link} to="/hospitals">Hospitals</Button>
        <Button color="inherit" sx={{ mr: 1 }} component={Link} to="/faqs">FAQs</Button>
        <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;