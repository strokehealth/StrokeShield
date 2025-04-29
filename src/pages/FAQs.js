import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionAnswerSharpIcon from '@mui/icons-material/QuestionAnswerSharp';

function FAQs() {
  const faqData = [
    {
      question: 'What should I do if I think someone is having a stroke?',
      answer: 'A stroke is a medical emergency and must be treated as quickly as possible. Remain calm and call 9-1-1 immediately, even if the person seems to “recover.” Do not wait—early treatment can reduce the risk of permanent brain damage.'
    },
    {
      question: 'Am I at risk for a stroke?',
      answer: 'Certain factors can increase your risk, including smoking, obesity, high blood pressure, high cholesterol, and diabetes. You can lower your risk by quitting smoking, eating a healthy diet, exercising regularly, and managing your health metrics.'
    },
    {
      question: 'What are the warning signs of a stroke?',
      answer: 'Think F.A.S.T.: Face drooping, Arm weakness, Speech difficulties, Time to call 9-1-1 immediately if any symptoms appear.'
    },
    {
      question: 'What are the benefits of a plant-based diet for heart and stroke health?',
      answer: 'A plant-based diet can improve cholesterol levels, lower blood pressure, reduce inflammation, and increase fiber intake. Preparing plant-based meals may take effort but can be time-saving by batch cooking.'
    },
    {
      question: 'How can I add more exercise to my busy schedule?',
      answer: 'Short activities like brisk walking or 5-minute routines can benefit your health. Start small and gradually build up. Always check with your doctor before beginning a new program.'
    },
    {
      question: 'Are symptoms of stroke different for men and women?',
      answer: 'While most symptoms are similar, women may also experience subtle signs like weakness, confusion, fatigue, or nausea, which can sometimes delay treatment.'
    },
  ];

  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
        >
          <QuestionAnswerSharpIcon sx={{ color: '#A6192E', fontSize: 38 }} />
          Frequently Asked Questions
        </Typography>

        <Box sx={{ mt: 4 }}>
          {faqData.map((faq, idx) => (
            <Accordion key={idx} sx={{ mb: 2, backgroundColor: '#ffff' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${idx}-content`} id={`faq-${idx}-header`}>
                <Typography sx={{ fontWeight: 'bold', color: '#c62828' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default FAQs;
