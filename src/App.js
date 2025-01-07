import React, { useState } from 'react';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Yes from './components/Yes';
import No from './components/No';

function App() {
  const [showYes, setShowYes] = useState(false);
  const [showNo, setShowNo] = useState(false);
  const [buttonPosition, setButtonPosition] = useState("");

  const getRandomPosition = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = 100;
    const buttonHeight = 50;

    const randomTop = Math.floor(Math.random() * (screenHeight - buttonHeight));
    const randomLeft = Math.floor(Math.random() * (screenWidth - buttonWidth));

    return { top: randomTop, left: randomLeft };
  };

  const handleClickNo = () => {
    setShowNo(true);
    setButtonPosition(getRandomPosition());
  };

  const handleClick = () => {
    setShowYes(true);
  };

  return (
    <Container>
      <div className="App">
        <h1>Do You Love Me <Spinner animation="grow" /> 😉❤</h1>

        <div className='buttons'>
          <Button variant="primary" size="lg" style={{ margin: 20 }} onClick={handleClick}>
            Yes
          </Button>
          <div>
            <Button
              variant="secondary"
              size="lg"
              style={{
                position: 'absolute',
                top: `${buttonPosition.top}px`,
                left: `${buttonPosition.left}px`,
                margin: 20,
              }}
              onClick={handleClickNo}
            >
              NO
            </Button>
          </div>
        </div>
        <div>

          {showYes && <Yes />} <br />
          {showNo && <No />}
        </div>

      </div>
    </Container >
  );
}

export default App;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;