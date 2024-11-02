import React from 'react';
import Calculator from './Components/Calculator';
import Calculator_Footer from './Components/Calculator_Footer';
import Calculator_Header from './Components/Calculator_Header';

const App = () => {
  return (
    <div style={{height: '100%'}}>
      <Calculator_Header />
      <Calculator />
      <Calculator_Footer />
    </div>
  );
};

export default App;
