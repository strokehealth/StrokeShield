import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Heart Stroke Risk Assessment Tool
        </Typography>
        <Typography variant="body1" gutterBottom>
          This tool helps you assess your risk of heart stroke based on a series of questions.
        </Typography>
        <Button variant="contained" color="primary" href="/questionnaire">
          Start Assessment
        </Button>
      </Container>
    </div>
  );
}

export default HomePage;