import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
// import OpacityRounded from '@mui/icons-material/OpacityRounded';
// import WaterDropRounded from '@mui/icons-material/WaterDropRounded';
// import SmokingRoomsRounded from '@mui/icons-material/SmokingRoomsRounded';
import Navbar from '../components/Navbar';
// import FeatureCards from '../components/FeatureCards';

// const features = [
//   {
//     icon: <OpacityRounded color="primary" sx={{ fontSize: 48 }} />, 
//     title: 'High Blood Pressure',
//     caption: 'Monitor and manage your blood pressure for a healthier heart.'
//   },
//   {
//     icon: <WaterDropRounded color="info" sx={{ fontSize: 48 }} />, 
//     title: 'High Cholesterol',
//     caption: 'Keep your cholesterol in check to reduce heart risk.'
//   },
//   {
//     icon: <SmokingRoomsRounded color="warning" sx={{ fontSize: 48 }} />, 
//     title: 'Smoking',
//     caption: 'Quitting smoking greatly improves your heart health.'
//   }
// ];

function HeartHealthPage() {
  const theme = useTheme();
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 8 }}>
        <FavoriteRounded sx={{ fontSize: 80, color: theme.palette.error.main, mb: 2 }} />
        <Typography variant="h3" align="center" gutterBottom>
          Take Charge of Your Heart Health
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: 500 }}>
          Discover your risk factors and get personalized tips to improve your heart health. Start your assessment now and take the first step toward a healthier future.
        </Typography>
        <Button 
          variant="contained" 
          color="error" 
          size="large" 
          sx={{ px: 4, mb: 8 }}
          href="/questionnaire"
        >
          Start Assessment
        </Button>
        {/* Feature Cards */}
        {/* <FeatureCards features={features} /> */}
      </Container>
    </Box>
  );
}

export default HeartHealthPage;