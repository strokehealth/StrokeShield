import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeartHealthPage from './pages/HeartHealthPage';
import Questionnaire from './pages/Questionnaire';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Resources from './pages/Resources';
import Hospitals from './pages/Hospitals';
import ContactUs from './pages/ContactUs';
import ResultsPage from './pages/ResultsPage';
import './styles/HomePage.css';
import './styles/Questionnaire.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeartHealthPage />,
  },
  {
    path: '/questionnaire',
    element: <Questionnaire />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/faqs',
    element: <FAQs />,
  },
  {
    path: '/resources',
    element: <Resources />,
  },
  {
    path: '/hospitals',
    element: <Hospitals />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
  {
    path: '/results',
    element: <ResultsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
