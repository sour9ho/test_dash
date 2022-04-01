import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Title from "components/Title/Title";
import Questions from "components/Questions/Questions";
import Progress from 'components/Progress/Progress';
import useQuestions from "hooks/useQuestions";
import Result from "pages/Result";

const PlayBlock = styled.div`
  margin: 0 auto;
  max-width: 30rem;
  padding: 0;
`;

const TitleBlock = styled.div`
  margin: 6rem 15% 3rem 15%;
  max-width: 30rem;
  padding: 0;
`

function Play({test, testName, refresh}) {

  const [questionInfo, questions, setSelected, progress, getResult] = useQuestions(test)

  const [isPlayPage, setIsPlayPage] = useState(true);
  const [result, setResult] = useState({})

  const handleEvent = (questionNumber, optionNumber) => {
    setSelected(questionNumber, optionNumber)
  }

  const showResult = (total, current) => {
    if (total === current) {
      setResult(getResult())
      setIsPlayPage(false)
    } else {
      console.log(total, current)
    }
  }

  return (
    <>
      {
        isPlayPage ?
        (<>
          <PlayBlock className='play'>
            <TitleBlock>
              <Title
                testName={testName}
              />
            </TitleBlock>
            <Questions
              questions={questions}
              reportSelection={(qn, on) => handleEvent(qn, on)}
            />
            <Progress
              progress={progress}
              onClick={(total, current) => showResult(total, current)}
            />
          </PlayBlock>
        </>) :
        (<>
          <Result
            result={result}
            testName={testName}
          />
        </>)
      }
      
    </>
  );
}

export default Play;