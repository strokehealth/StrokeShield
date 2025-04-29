import React, { useState } from 'react';
import { Container, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Stack, Card, CardContent, FormHelperText, LinearProgress } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const questions = [
    { id: 1, text: 'What is your age?', options: ['Above 65', 'Below 65'] },
    { id: 2, text: 'What is your gender?', options: ['Male', 'Female'] },
    { id: 3, text: 'Have you ever been diagnosed with high blood pressure (hypertension)?', options: ['Yes', 'No'] },
    { id: 4, text: 'Have you ever been diagnosed with diabetes?', options: ['Yes', 'No'] },
    { id: 5, text: 'Have you ever been diagnosed with high cholesterol?', options: ['Yes', 'No'] },
    { id: 6, text: 'Have you ever been told by a doctor or health professional that you are obese?', options: ['Yes', 'No'] },
  ];

  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        <Box sx={{ width: '100%', mb: 4 }}>
          <LinearProgress variant="determinate" value={50} sx={{ height: 8, borderRadius: 4, backgroundColor: '#ffe5e5', '& .MuiLinearProgress-bar': { backgroundColor: '#d32f2f' } }} />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={4}>
          <FavoriteIcon sx={{ color: '#A6192E', fontSize: 40 }} />
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Prevention Stroke Assesment
          </Typography>
        </Box>

        <Stack spacing={4}>
          {questions.map((question) => (
            <Card key={question.id} variant="outlined" sx={{ boxShadow: 2, borderRadius: 2 }}>
              <CardContent>
                <FormControl component="fieldset" error={!!errors[question.id]} sx={{ width: '100%' }}>
                  <FormLabel component="legend" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                    {question.text}
                  </FormLabel>
                  <RadioGroup
                    value={answers[question.id] || ''}
                    onChange={(e) => {
                      setAnswers({ ...answers, [question.id]: e.target.value });
                      if (errors[question.id]) {
                        setErrors({ ...errors, [question.id]: null });
                      }
                    }}
                  >
                    {question.options.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                  {errors[question.id] && (
                    <FormHelperText>{errors[question.id]}</FormHelperText>
                  )}
                </FormControl>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 4, backgroundColor: '#A6192E', '&:hover': { backgroundColor: '#871324' } }}
          onClick={() => {
            const newErrors = {};
            questions.forEach((q) => {
              if (!answers[q.id]) {
                newErrors[q.id] = 'This field is required';
              }
            });
            setErrors(newErrors);

            if (Object.keys(newErrors).length === 0) {
              navigate('/results', { state: { answers } });
            }
          }}
        >
          Submit Assessment
        </Button>
      </Container>
    </div>
  );
}

export default Questionnaire;