import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#b71c1c' }}>
          Contact Us
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Team Members:</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>Yasaswi Suneera Rayana</Typography>
          <Typography variant="body1">Suguna Kotte</Typography>
          <Typography variant="body1">Mounika Metta</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>Anusmitha Sathuluri</Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Contact Email</Typography>
          <Card variant="outlined" sx={{ backgroundColor: '#fff0f0', borderRadius: 2 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmailIcon sx={{ color: '#b71c1c' }} />
              <Typography variant="body1">contact@strokeshield.org</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default ContactUs;
