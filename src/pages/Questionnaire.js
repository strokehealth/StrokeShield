import React, { useState } from 'react';
import { Container, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Navbar from '../components/Navbar';

function Questionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 1, text: 'Do you smoke?', options: ['Yes', 'No'] },
    { id: 2, text: 'Do you have high blood pressure?', options: ['Yes', 'No'] },
    { id: 3, text: 'Do you exercise regularly?', options: ['Yes', 'No'] },
  ];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      alert('Assessment Complete!');
    }
  };

  const handleAnswerChange = (event) => {
    setAnswers({ ...answers, [questions[step].id]: event.target.value });
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Question {step + 1} of {questions.length}
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">{questions[step].text}</FormLabel>
          <RadioGroup
            value={answers[questions[step].id] || ''}
            onChange={handleAnswerChange}
          >
            {questions[step].options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ marginTop: 2 }}
        >
          {step < questions.length - 1 ? 'Next' : 'Finish'}
        </Button>
      </Container>
    </div>
  );
}

export default Questionnaire;