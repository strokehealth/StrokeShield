import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Box, LinearProgress, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { mealPlans } from '../utils/mealPlanSelector';
import { exercisePlans } from '../utils/exercisePlanData';

function getMealPlanKey({ age, gender, obese, comorbidities }) {
  // const ageGroup = age >= 65 ? '≥65' : '<65';
  const obeseStatus = obese ? 'Obese' : 'NonObese';
  let diseaseStatus = 'NoDiseases';
  if (comorbidities && comorbidities.length > 0) {
    if (comorbidities.length > 1) {
      diseaseStatus = 'Multiple';
    } else {
      diseaseStatus = comorbidities[0];
    }
  }
  return `${diseaseStatus}_${gender}_${obeseStatus}`;
}

function getExercisePlanKey({ age, gender, obese, comorbidities }) {
  const ageGroup = age >= 65 ? '≥65' : '<65';
  // const obeseStatus = obese ? 'Obese' : 'NonObese';
  let diseaseStatus = 'NoDiseases';
  if (comorbidities && comorbidities.length > 0) {
    if (comorbidities.length > 1) {
      diseaseStatus = 'Multiple';
    } else {
      diseaseStatus = comorbidities[0];
    }
  }
  return `${ageGroup}_${gender}_${diseaseStatus}`;
}

function ResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { answers } = location.state || {};
  const ageAnswer = answers?.[1];
  const gender = answers?.[2];
  const htn = answers?.[3];
  const dm = answers?.[4];
  const cholesterol = answers?.[5];
  const obeseAnswer = answers?.[6];

  const age = ageAnswer === 'Above 65' ? 68 : 45;
  const obese = obeseAnswer === 'Yes';

  const comorbidities = [];
  if (htn === 'Yes') comorbidities.push('HTN');
  if (dm === 'Yes') comorbidities.push('DM');
  if (cholesterol === 'Yes') comorbidities.push('Cholesterol');

  const mealKey = getMealPlanKey({ age, gender, obese, comorbidities });
  const exerciseKey = getExercisePlanKey({ age, gender, obese, comorbidities });
  const mealPlan = mealPlans[mealKey] || mealPlans['NoDiseases_Female_NonObese'];
  const exercisePlan = exercisePlans[exerciseKey] || exercisePlans['<65_Female_NoDiseases'];

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Box sx={{ width: '100%', mb: 4 }}>
          <LinearProgress variant="determinate" value={100} sx={{ height: 8, borderRadius: 4, backgroundColor: '#ffe5e5', '& .MuiLinearProgress-bar': { backgroundColor: '#d32f2f' } }} />
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={4}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            Your Personalized Stroke Recovery Meal Plan
          </Typography>
        </Box>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#ffcccc' }}>
              <TableRow>
                <TableCell><strong>Day</strong></TableCell>
                <TableCell><strong>Breakfast</strong></TableCell>
                <TableCell><strong>Lunch</strong></TableCell>
                <TableCell><strong>Snack</strong></TableCell>
                <TableCell><strong>Dinner</strong></TableCell>
                <TableCell><strong>Calories</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mealPlan.map((meal, idx) => (
                <TableRow
                  key={idx}
                  sx={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#0000' }}
                >
                  <TableCell>{meal.day}</TableCell>
                  <TableCell>{meal.breakfast}</TableCell>
                  <TableCell>{meal.lunch}</TableCell>
                  <TableCell>{meal.snack}</TableCell>
                  <TableCell>{meal.dinner}</TableCell>
                  <TableCell>{meal.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Paper elevation={3} sx={{ p: 3, mt: 8, backgroundColor: '#0000' }}>
          <Typography variant="h5" sx={{ color: '#c62828' }} gutterBottom>
            Personalized Exercise Recommendations
          </Typography>
          {exercisePlan.map((exercise, idx) => (
            <Typography key={idx} variant="body2" sx={{ mb: 1 }}>
              • {exercise}
            </Typography>
          ))}
        </Paper>

        <Box sx={{ mt: 6, textAlign: 'center', color: '#c62828' }}>
          <Button
            variant="outlined"
            color='#c62828'
            onClick={() => navigate('/questionnaire')}
          >
            Go Back to Assessment
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default ResultsPage;