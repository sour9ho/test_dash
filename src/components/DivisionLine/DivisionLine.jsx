import React from "react";
import styled from "styled-components"

const DivisionLineBlock = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #eeeeee;
  border-radius: 3px;
`

function DivisionLine() {

  return (
    <>
      <DivisionLineBlock className='division-line'/>
    </>
  )
}

export default DivisionLine;