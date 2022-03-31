import React from "react";
import styled from "styled-components";

const HyperLinkBlock = styled.a`
  color: gray;
  text-decoration: none;
  cursor: auto;
`

function HyperLink ({ link, children }) {
  
  return (
    <HyperLinkBlock href={link}>
      {children}
    </HyperLinkBlock>
  )
}

export default HyperLink;