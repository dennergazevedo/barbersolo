import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import Routes from './routes';

/** Global Styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  function initializeReactGoogleAnalytics() {
    ReactGA.initialize('G-EDGREG5ZLQ');
    ReactGA.pageview('/');
  }

  initializeReactGoogleAnalytics();
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default App;
