import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const BackgroundComponent = () => {
  const [isPatternOne, setIsPatternOne] = useState(true);

  const togglePattern = () => {
    setIsPatternOne(prevPattern => !prevPattern);
  };
  const bgColor = isPatternOne ? 'black' : 'white';
  const textColor = isPatternOne ? 'white' : 'black';

  const style = {
    width: '100%',
    height: '100vh',
    backgroundColor: bgColor,
    color: textColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    fontSize: '2rem',
  };

  return (
    <div style={style}>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Change Pattern"
        checked={isPatternOne}
        onChange={togglePattern}
        className="toggle-switch"
      />
      <div>This is the text</div>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <BackgroundComponent />
    </div>
  );
};

export default App;
