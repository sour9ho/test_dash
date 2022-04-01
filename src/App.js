import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Play from 'pages/Play';
import { sampleQuestions } from 'data/sampleQuestions';
import useQuestions from 'hooks/useQuestions';
import 'App.css'


const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 30rem;
  padding: 0;
`;

function App() {

  const [questionInfo, questions, setSelected, progress, getResult] = useQuestions(sampleQuestions)
  const testName = "DASH"
  const refresh = () => {
    window.location.reload()
  }
  
  return (
    <>
      <AppBlock>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={
              <Home
                questionInfo={questionInfo}
                testName={testName}
              />
            }/>
            <Route path="/home" element={
              <Home
                questionInfo={questionInfo}
                testName={testName}
              />
            }/>
            <Route path="/play" element={
              <Play
                test={sampleQuestions}
                testName={testName}
                refresh={refresh}
              />
            }/>
          </Routes>
        </BrowserRouter>
      </AppBlock>
    </>
  )
  
}

export default App;
