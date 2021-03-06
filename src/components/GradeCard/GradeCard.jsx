import React from "react";
import styled from "styled-components";

const GradeCardBlock = styled.div`
  margin: 2rem auto;
  padding: 1rem 0.1rem;
  word-break: keep-all;

  border: 1px solid #cfcfcf;
  border-radius: 4px;
`

const GradeTitleBlock = styled.h2`
  margin: 0rem auto;
  text-align: center;

  font: inherit;
  font-size: 24px;
  font-weight: 400;
`

const GradeBlock = styled.div`
  margin: 1.5rem auto 0.5rem ;
  text-align: center;

  font: inherit;
  font-size: 24px;
  font-weight: 400;
`

const ScoreSheetWrapper = styled.div`
  margin: 1.5rem 0 0 0;
`

const ScoreSheet = styled.div`
  margin: 0 auto;
  text-align: center;

  font: inherit;
  font-size: ${props => props.fontSize==='down' ? '12px' : '16px'};
  font-weight: 300;
`

function GradeCard( { resultScore, totalScore, testName } ) {

  return (
    <>
      <GradeCardBlock className="grade-card">
        <GradeTitleBlock>
          {`π${testName} λͺ¨μκ³ μ¬`}
        </GradeTitleBlock>
        <GradeTitleBlock>
          {`μ±μ νπ`}
        </GradeTitleBlock>
        <GradeBlock className="grade">
          <b>{`βοΈ${resultScore}μ `}</b>{`/${totalScore}μ βοΈ`}
        </GradeBlock>
        <ScoreSheetWrapper>
          <ScoreSheet>
            {`β­μ±μ ν νμΈνκΈ°β`}
          </ScoreSheet>
          <ScoreSheet>
            {`'κ³΅μ ' λ²νΌμ λλ¬ μ±μ  κ²°κ³Όλ₯Ό νμΈν΄λ³΄μΈμ!`}
          </ScoreSheet>
          <ScoreSheet fontSize={'down'}>
            {`*λΈλΌμ°μ μ λ°λΌ μλνμ§ μμ μλ μμ΅λλ€.`}
          </ScoreSheet>  
        </ScoreSheetWrapper>
        
        
      </GradeCardBlock>
    </>
  )
}

export default GradeCard