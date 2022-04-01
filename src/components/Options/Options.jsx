import React from "react";
import styled from "styled-components";
import Option from "components/Option/Option";

const OptionsBlock = styled.div`
  margin: 1rem 0.5rem 0 0.5rem;
`

function Options({ options, onClick }) {
  const handleClick = (optionNumber) => {
    onClick(optionNumber);
  }

  const makeOptionComponents = (options) => {
    const oc = []
    for (let optionNumber in options){
      //const option = options[optionNumber]
      const { text, selected } = options[optionNumber]
      oc.push(
        <Option
          key={optionNumber}
          number={optionNumber}
          text={text}
          selected={selected}
          onClick={() => handleClick(optionNumber)}
        />
      )
    }
    return oc
  }

  return (
    <>
      <OptionsBlock className="options">
        {makeOptionComponents(options)}
      </OptionsBlock>
    </>
  )
}

export default Options;