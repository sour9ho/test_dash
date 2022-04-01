import React from "react";
import styled from "styled-components";
import Title from "components/Title/Title";
import GradeCard from "components/GradeCard/GradeCard";
import { Link } from "react-router-dom";

const ResultBlock = styled.div`
  margin: 6rem 15% 3rem 15%;
  max-width: 30rem;
  padding: 0;
`;

const ButtonWrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: right;
`

const ButtonBlock = styled.button`
  /* position */
  padding: 0.2rem 0.5rem;
  margin-left: auto;
  
  /* shape */
  // 와 진짜 어메이징
  box-sizing: border-box;
  border: solid ${props => props.satisfied ? '#ffeb3c' : '#f2f2f2'};
  border-radius: 0.4rem;
  background-color: ${props => props.satisfied ? '#ffeb3c' : '#f2f2f2'};

  /* font */
  font: inherit;
  font-size: 18px;
  font-weight: 400;
  color: black;

  /* animation */
  transition: all ease 0.2s;
`

function Result( { result, testName } ) {
  const { resultText, resultScore, totalScore } = result

  let parsedResultText = ''
  const len = parseInt((resultText.length/2), 10)
  for (let i=0; i<len; i++){
    if ((i !== 0) && (i%5 === 0)){
      parsedResultText += '\n'
    }
    parsedResultText += (resultText[2*i] + resultText[2*i+1])
  }

  const copyResult = (e) => {
    let text = ""
    text += `📝${testName} 모의고사 성적표📝\n`
    text += `✔️${resultScore}점/${totalScore}점✔️\n`
    text += "\n"
    text += `⭕채점표❌\n`
    text += `${parsedResultText}`
    text += "\n"
    text += "https://sour9ho.github.io/test_dash/"
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <ResultBlock className="result">
        <Title
          testName={testName}
        />
        <GradeCard
          {...result}
          testName={testName}
        />
        <ButtonWrapper>
          <Link to="/">
            <ButtonBlock>다시 풀기</ButtonBlock>
          </Link>
          <ButtonBlock onClick={() => copyResult()}>공유</ButtonBlock>
        </ButtonWrapper>
      </ResultBlock>
    </>
  )
}

export default Result;