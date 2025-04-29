import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Box } from '@mui/material';

function About() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#b71c1c' }}>
          About Stroke
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" paragraph>
            Stroke is a serious medical emergency that happens when blood flow to a part of the brain is blocked or a blood vessel bursts, causing brain cells to die within minutes. Because the brain is responsible for controlling all bodily functions, a stroke can disrupt movement, speech, vision, memory, and more depending on which area of the brain is affected. When blood flow can’t reach a region that controls a particular body function, that part of the body will not work as it should.
          </Typography>

          <Typography variant="body1" paragraph>
            Stroke remains the fifth leading cause of death and a major source of long-term disability in the United States. Certain risk factors, such as high blood pressure, diabetes, heart disease, obesity, and lack of physical activity, increase the chances of having a stroke. Older adults, especially those over age 55, and certain racial or ethnic groups are at greater risk. Women are more likely to die from stroke than men.
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', color: '#b71c1c' }}>
            Encouragingly, up to 80% of strokes may be prevented through healthy lifestyle changes and proper management of medical conditions.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default About;
