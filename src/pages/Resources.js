import React, { useState } from 'react';
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
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Resources() {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const resources = [
    {
      title: 'Dressing Tips for Stroke Survivors',
      description: 'Learn practical techniques and tools to make dressing easier after a stroke.',
      content: (
        <>
          <Typography paragraph>
            Dressing after a stroke can be challenging due to limited mobility, weakness, or coordination difficulties. Here are some practical tips and tools to help make dressing safer and simpler:
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
            Choose Easy-to-Wear Clothing
          </Typography>
          <Typography paragraph>
            Opt for clothes with front fastenings like buttons or Velcro, elastic waistbands, and loose-fitting garments. Avoid tight or complicated clothing that requires excessive movement or dexterity.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
            Use Adaptive Tools
          </Typography>
          <Typography paragraph>
            Consider using dressing aids such as button hooks, zipper pulls, and long-handled shoehorns. These tools can help you manage fasteners and reach difficult areas more easily.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
            Develop a Dressing Routine
          </Typography>
          <Typography paragraph>
            Establish a consistent sequence for dressing, such as dressing the affected side first. This can improve efficiency and reduce frustration.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
            Safety Tips
          </Typography>
          <Typography paragraph>
            Sit down while dressing to maintain balance, and use sturdy chairs or grab bars for support. Take your time and avoid rushing to prevent falls or injuries.
          </Typography>
          <Typography paragraph>
            Consult with occupational therapists who can provide personalized strategies and recommend specific adaptive equipment based on your needs.
          </Typography>
        </>
      ),
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
        <Grid container spacing={3} justifyContent="center" alignItems="stretch" sx={{ mt: 4 }}>
          {resources.map((resource, idx) => {
            const expanded = expandedIdx === idx;
            const handleExpandClick = () => {
              setExpandedIdx(expanded ? null : idx);
            };
            return (
              <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 2,
                    mb: 3,
                    border: '1px solid #e0e0e0',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    minHeight: 250,
                    minWidth: 275,
                    maxWidth: 400
                    
                  }}
                >
                  <CardHeader
                    avatar={<resource.icon sx={{ fontSize: 28, color: '#b71c1c' }} />}
                    title={<Typography sx={{ fontWeight: 'bold' }}>{resource.title}</Typography>}
                    action={
                      <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    }
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography variant="body2">{resource.description}</Typography>
                  </CardContent>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      {resource.content ? (
                        <Box>{resource.content}</Box>
                      ) : (
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
                      )}
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Resources;
