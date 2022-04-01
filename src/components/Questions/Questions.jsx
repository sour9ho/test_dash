import React from "react";
import styled from "styled-components";
import MultipleQuestion from "components/Question/MultipleQuestion";
import ShortQuestion from "components/Question/ShortQuestion";
import { questionType } from 'constants/constants'

const QuestionsBlock = styled.div`
  margin-bottom: 7rem;
`

function Questions({ questions, reportSelection }) {
  const handleEvent = (questionNumber, selection) => {
    reportSelection(questionNumber, selection)
  }

  const makeQuestionsComponents = (questions) => {
    const qc = []
    for (let questionNumber in questions) {
      const { description, type } = questions[questionNumber]
      if (type === questionType.multiple || type === questionType.multipleAll) {
        const { options } = questions[questionNumber]
        qc.push(
          <MultipleQuestion
            key={questionNumber}
            questionNumber={questionNumber}
            description={description}
            options={options}
            onClick={(qn, s) => handleEvent(qn, s)}
          />
        )
      } else if (type === questionType.short) {
        const { answer, text, satisfied } = questions[questionNumber]
        
        qc.push(
          <ShortQuestion
            key={questionNumber}
            questionNumber={questionNumber}
            description={description}
            inputType={(/^[0-9]+$/.test(answer)) ? 'number' : 'text'}
            inputText={text}
            satisfied={satisfied}
            onChange={(qn, s) => handleEvent(qn, s)}
          />
        )
      }
      
    }
    return qc
  }

  return (
    <>
      <QuestionsBlock className="questions">
        {makeQuestionsComponents(questions)}
      </QuestionsBlock>
      
    </>
  )
}

export default Questions;