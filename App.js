import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JsonDataDisplay from './DataDisplay';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={JsonDataDisplay} />
    </Router>
  );
};

export default App;
