import React from "react";
import styled from "styled-components";


const TestTitleBlock = styled.div`
  margin: 2rem auto;
  word-break: keep-all;
`

const TestTitle = styled.h1`
  margin: 0.5rem 0rem;
  text-align: center;
  line-height: 36px;
  font-size: 36px;
  font-weight: 500;
`

const TestDescription = styled.h2`
  margin: 0;
  text-align: center;
  line-height: 24px;
  font-size: 24px;
  font-weight: 400;
`

function Title( { testName } ) {

  return (
    <>
      <TestTitleBlock className="test-title">
        <TestDescription>
          {`2022학년도 1차비엘능력시험 문제지`}
        </TestDescription>
        <TestTitle>
          {`${testName} 영역`}
        </TestTitle>
      </TestTitleBlock>
    </>
  )
}

export default Title;