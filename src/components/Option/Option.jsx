import React from "react";
import styled from "styled-components";

const OptionBlock = styled.div`
  /* position */
  position: relative;
  margin: 0.2rem 0 0 0;

  /* shape */
  width: 100%;
  border: none;
  border-radius: 0.4rem;
  
  /* color */
  background: #f2f2f2;
`

const OptionBar = styled.div`
  /* position */
  position: absolute;
  margin: 0;
  padding: 0;

  /* shape */
  width: ${props => props.selected ? 100 : 0}%;
  height: 100%;
  border: inherit;
  border-radius: inherit;
  
  /* color */
  background: #ffeb3c;

  /* animation */
  transition: all ease 0.2s;
`

const OptionText = styled.div`
  /* position */
  position: relative;
  padding: 0.5rem 0.8rem;

  /* font */
  font-size: 16px;
  font-weight: 300;
`

function Option({ number, text, selected, onClick }) {

  const handleClick = () => {
    onClick(number)
  }

  return (
    <>
      <OptionBlock
        className="option"
        onClick={() => handleClick()}
      >
        <OptionBar
          className="optionBar"
          selected={selected}
        >
        </OptionBar>
        <OptionText
          className="optionText"
        >
          {text}
        </OptionText>
      </OptionBlock>
    </>
  )
}

export default Option;