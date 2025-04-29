import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

function FeatureCards({ features }) {
  return (
    <Grid 
      container 
      rowSpacing={{ xs: 4, sm: 6 }}
      columnSpacing={{ xs: 2, sm: 3, md: 4 }}
      justifyContent="center"
      alignItems="stretch"
      sx={{ mt: 0 }}
    >
      {features.map((feature) => (
        <Grid item xs={12} sm={6} md={4} key={feature.title} sx={{ display: 'flex', height: '100%', flex: 1, maxWidth: { xs: '100%', sm: '50%', md: '33.3333%' } }}>
          <Card
            variant="outlined"
            sx={{
              borderRadius: 4,
              transition: 'box-shadow 0.2s',
              boxShadow: 1,
              '&:hover': { boxShadow: 6 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 4,
              px: 2,
              flexGrow: 1,
              height: '100%',
              width: '100%',
              minHeight: 320,
              border: '1px solid #e0e0e0',
            }}
          >
            <Box mb={2}>{feature.icon}</Box>
            <CardContent 
              sx={{ 
                textAlign: 'center', 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                minHeight: 150,
                width: '100%',
                p: 2, // add padding inside card
              }}
            >
              <Typography variant="h6" gutterBottom>{feature.title}</Typography>
              <Typography variant="body2" color="text.secondary">{feature.caption}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default FeatureCards;