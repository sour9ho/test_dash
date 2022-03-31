import React from 'react';
import styled from 'styled-components';
import DivisionLine from '../DivisionLine/DivisionLine';
import Description from '../Description/Description';
import Options from '../Options/Options';

const MultipleQuestionBlock = styled.div`
  margin: 0 15% 3rem 15%;
`

function MultipleQuestion({ questionNumber, description, options, onClick }) {
  const handleClick = (option) => {
    onClick(questionNumber, option)
  }

  const { text, score } = description

  return (
    <MultipleQuestionBlock className='question'>
      <DivisionLine/>
      <Description
        number={questionNumber}
        sentence={text}
        score={score}
      />
      <Options
        options={options}
        onClick={(on) => handleClick(on)}
      />
    </MultipleQuestionBlock>
  )
}

export default MultipleQuestion;