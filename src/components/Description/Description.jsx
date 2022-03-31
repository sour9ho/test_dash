import React from "react";
import styled from "styled-components";

const DescriptionBlock = styled.div`
  font-weight: 400;
  margin-top: 1.5rem;
`

const DescriptionNumberBlock = styled.h2`
  font-size: 24px;
  margin: 0;
`

const DescriptionSentenceBlock = styled.p`
  margin: 1rem 0 0 0.3rem;
`

function Description({ number, sentence, score}) {

  return (
    <DescriptionBlock className='description'>
      <DescriptionNumberBlock className="description-number">
        {`Q${number}.`}
      </DescriptionNumberBlock>
      <DescriptionSentenceBlock className='description-sentence'>
        {`${sentence} (${score}점)`}
      </DescriptionSentenceBlock>
    </DescriptionBlock>
  )
}

export default Description;