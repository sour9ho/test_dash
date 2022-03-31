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
          {`📝${testName} 모의고사`}
        </GradeTitleBlock>
        <GradeTitleBlock>
          {`성적표📝`}
        </GradeTitleBlock>
        <GradeBlock className="grade">
          <b>{`✔️${resultScore}점`}</b>{`/${totalScore}점✔️`}
        </GradeBlock>
        <ScoreSheetWrapper>
          <ScoreSheet>
            {`⭕채점표 확인하기❌`}
          </ScoreSheet>
          <ScoreSheet>
            {`'공유' 버튼을 눌러 채점 결과를 확인해보세요!`}
          </ScoreSheet>
          <ScoreSheet fontSize={'down'}>
            {`*브라우저에 따라 작동하지 않을 수도 있습니다.`}
          </ScoreSheet>  
        </ScoreSheetWrapper>
        
        
      </GradeCardBlock>
    </>
  )
}

export default GradeCard