import React from "react";
import styled from "styled-components";

const ProgressBlock = styled.div`
  position: fixed;
  bottom: 0;
  height: 3rem;
  width: 100%;
  max-width: inherit;
  background: #cfcfcf;
`

const ProgressBar = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  padding: 0;
  background: ${props => (props.percentage === 100) ? '#2194E0' : '#47DEFF'};
  transition: all ease 0.2s;

  display: flex;
  justify-content: space-between;
`

const ProgressContent = styled.p`
  line-height: 3rem;
  margin: 0;
  padding: 0 1rem;
  color: white;
  font-weight: 500;
`

function Progress( { progress, onClick } ) {
  const { current, total } = progress
  const percentage = parseInt(current/total*100)

  return (
    <>
      <ProgressBlock
        className="progress"
        onClick={() => onClick(total, current)}
      >
        <ProgressBar
          className="progressBar"
          percentage={percentage}
        >
          <ProgressContent>
            {`${current}/${total}`}
          </ProgressContent>
          <ProgressContent>
            {current===total ? '제출하기' : ''}
          </ProgressContent>
        </ProgressBar>
      </ProgressBlock>
    </>
  )
}

export default Progress