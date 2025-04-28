import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Card, CardContent, useTheme } from '@mui/material';
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
import OpacityRounded from '@mui/icons-material/OpacityRounded';
import WaterDropRounded from '@mui/icons-material/WaterDropRounded';
import SmokingRoomsRounded from '@mui/icons-material/SmokingRoomsRounded';

const features = [
  {
    icon: <OpacityRounded color="primary" sx={{ fontSize: 48 }} />, 
    title: 'High Blood Pressure',
    caption: 'Monitor and manage your blood pressure for a healthier heart.'
  },
  {
    icon: <WaterDropRounded color="info" sx={{ fontSize: 48 }} />, 
    title: 'High Cholesterol',
    caption: 'Keep your cholesterol in check to reduce heart risk.'
  },
  {
    icon: <SmokingRoomsRounded color="warning" sx={{ fontSize: 48 }} />, 
    title: 'Smoking',
    caption: 'Quitting smoking greatly improves your heart health.'
  }
];

function HeartHealthPage() {
  const theme = useTheme();
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      {/* AppBar */}
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #e53935, #fbc02d, #43a047)', mr: 1 }} />
            <Typography variant="h6" color="inherit" noWrap>
              Health
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" sx={{ mr: 1 }}>About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 8 }}>
        <FavoriteRounded sx={{ fontSize: 80, color: theme.palette.error.main, mb: 2 }} />
        <Typography variant="h3" align="center" gutterBottom>
          Take Charge of Your Heart Health
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: 500 }}>
          Discover your risk factors and get personalized tips to improve your heart health. Start your assessment now and take the first step toward a healthier future.
        </Typography>
        <Button variant="contained" color="error" size="large" sx={{ px: 4, mb: 8 }}>
          Start Assessment
        </Button>
        {/* Feature Cards */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 0 }}>
          {features.map((feature, idx) => (
            <Grid item xs={12} sm={4} key={feature.title}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  transition: 'box-shadow 0.2s',
                  boxShadow: 1,
                  '&:hover': { boxShadow: 6 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  py: 4,
                }}
              >
                <Box mb={2}>{feature.icon}</Box>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{feature.caption}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HeartHealthPage;
