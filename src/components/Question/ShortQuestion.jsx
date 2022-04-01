import React from 'react';
import styled from 'styled-components';
import DivisionLine from 'components/DivisionLine/DivisionLine';
import Description from 'components/Description/Description';
import UserInput from 'components/UserInput/UserInput';

const ShortQuestionBlock = styled.div`
  margin: 0 15% 3rem 15%;
`

function ShortQuestion({ questionNumber, description, inputType, inputText , satisfied, onChange }) {
  const handleEvent = (selection) => {
    onChange(questionNumber, selection)
  }

  const { text, score } = description

  return (
    <ShortQuestionBlock className='question'>
      <DivisionLine/>
      <Description
        number={questionNumber}
        sentence={text}
        score={score}
      />
      <UserInput
        inputType={inputType}
        inputText={inputText}
        satisfied={satisfied}
        onChange={(selection) => handleEvent(selection)}
      />
    </ShortQuestionBlock>
  )
}

export default ShortQuestion;