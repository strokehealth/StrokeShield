import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeartHealthPage from './pages/HeartHealthPage';
import Questionnaire from './pages/Questionnaire';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Resources from './pages/Resources';
import Hospitals from './pages/Hospitals';
import ContactUs from './pages/ContactUs';
import ResultsPage from './pages/ResultsPage';
import './styles/HomePage.css';
import './styles/Questionnaire.css';
import { Container, Typography, Box, Button, Stack } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeartHealthPage />,
  },
  {
    path: '/questionnaire',
    element: <Questionnaire />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/faqs',
    element: <FAQs />,
  },
  {
    path: '/resources',
    element: <Resources />,
  },
  {
    path: '/hospitals',
    element: <Hospitals />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
  {
    path: '/results',
    element: <ResultsPage />,
  },
]);


function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 4,
        backgroundColor: '#fff0f0',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Container maxWidth="md">
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <Button href="/contact" variant="text" color="error">
            Contact Us
          </Button>
          <Button href="/about" variant="text" color="error">
            About
          </Button>
          <Button href="/resources" variant="text" color="error">
            Resources
          </Button>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Team Members: Yasaswi Suneera Rayana, Suguna Kotte, Mounika Metta, Anusmitha Sathuluri
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} Stroke Shield. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: '1 0 auto' }}>
        <RouterProvider router={router} />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
