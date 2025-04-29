import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Grid, Button, Card, CardContent, Box } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

function Resources() {
  const resources = [
    {
      title: 'Dressing Tips for Stroke Survivors',
      description: 'Get practical advice on choosing easy-to-wear clothing, using adaptive tools, and making dressing safer and simpler after a stroke.',
      link: 'https://www.stroke.org/en/life-after-stroke/recovery/daily-living/dressing-tips-for-stroke-survivors',
      icon: CheckroomIcon
    },
    {
      title: 'Driving After Stroke',
      description: 'Learn how to safely return to driving, evaluate your readiness, and explore adaptive options to stay independent.',
      link: 'https://www.stroke.org/en/life-after-stroke/recovery/daily-living/driving-after-stroke',
      icon: DirectionsCarIcon
    },
    {
      title: 'Bathing Tips for Stroke Survivors',
      description: 'Find step-by-step tips and helpful tools for safe, comfortable bathing after a stroke.',
      link: 'https://www.stroke.org/en/life-after-stroke/recovery/daily-living/bathing-tips-for-survivors',
      icon: BathtubIcon
    },
    {
      title: 'Stress Management After Stroke',
      description: 'Discover practical tips for managing stress and supporting your emotional well-being after a stroke.',
      link: 'https://www.heart.org/en/-/media/Healthy-Living-Files/Infographics/Stress_Strain_Body_and_Brain_Infographic.pdf?sc_lang=en',
      icon: SelfImprovementIcon
    },
    {
      title: 'Healthy Recipes for Stroke Survivors',
      description: 'Enjoy delicious, heart-healthy meals with easy recipes designed for stroke recovery.',
      link: 'https://www.stroke.org/en/-/media/Stroke-Files/Simplygood-Cookbook/SimplyGoodCookbook_11052020.pdf?sc_lang=en',
      icon: RestaurantIcon
    },
    {
      title: 'Shoulder, Arm, and Hand Exercises',
      description: 'Improve mobility and strength in your shoulders, arms, and hands after a stroke. Follow guided exercises designed to support your recovery and restore functional movement.',
      link: 'https://www.youtube.com/watch?v=MS2hx7dOAes',
      icon: FitnessCenterIcon
    },
    {
      title: 'Leg, Ankle, and Foot Exercises',
      description: 'Strengthen your legs, ankles, and feet with targeted exercises to enhance balance, walking ability, and lower body strength post-stroke.',
      link: 'https://www.youtube.com/watch?v=6BzBTUPqOPE',
      icon: DirectionsRunIcon
    },
    {
      title: 'Balance Exercises',
      description: 'Work on your stability and reduce fall risk with simple balance exercises tailored for stroke recovery. These routines help you regain confidence in daily activities.',
      link: 'https://www.youtube.com/watch?v=BEd-TMi7Le0',
      icon: AccessibilityNewIcon
    },
  ];

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#b71c1c' }}>
          Resources
        </Typography>
        <Grid 
          container 
          rowSpacing={{ xs: 4, sm: 6 }}
          columnSpacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mt: 4 }}
        >
          {resources.map((resource) => (
            <Grid item xs={12} sm={6} md={4} key={resource.title} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: 2,
                  '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  py: 4,
                  px: 4,
                  width: '100%',
                  maxWidth: 320,
                  minHeight: 300,
                  border: '1px solid #e0e0e0',
                  backgroundColor: '#ffffff', // Changed to white
                }}
              >
                <CardContent 
                  sx={{ 
                    textAlign: 'left',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    p: 0,
                  }}
                >
                  <Box mb={2}>
                    <resource.icon sx={{ fontSize: 40, color: '#b71c1c' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {resource.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {resource.description}
                  </Typography>
                </CardContent>
                {/* Simulated Footer Area */}
                <Box sx={{ mt: 'auto', pt: 2 }}>
                  <Button
                    href={resource.link}
                    target="_blank"
                    sx={{
                      color: '#b71c1c',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      px: 0,
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Visit Resource &nbsp; &gt;
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Resources;
