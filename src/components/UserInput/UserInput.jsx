import React, { useRef } from 'react';
import styled from 'styled-components';

const UserInputBlock = styled.div`
  font: inherit;
  margin: 1rem 0.5rem 0 0.5rem;
`

const InputWrapper = styled.div`
  margin: 0.2rem 0 0 0;
  
`

const InputBlock = styled.input`
  /* position */
  width: 100%;
  padding: 0.5rem 0.8rem;

  /* shape */
  // 와 진짜 어메이징
  box-sizing: border-box;
  border: solid #f2f2f2;
  border-radius: 0.4rem;

  /* font */
  font: inherit;
  font-size: 16px;
  font-weight: 300;
`

const ButtonWrapper = styled.div`
  margin: 0.2rem 0 0 0;
  display: flex;
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
  font-size: 16px;
  font-weight: 300;
  color: black;

  /* animation */
  transition: all ease 0.2s;
`

function UserInput( { inputType, inputText, satisfied, onChange } ) {
  const inputRef = useRef(null);

  const handleEvent = (selection) => {
    onChange(selection)
  }

  const handleClick = () => {
    onChange("")
    inputRef.current.focus()
  }

  return (
    <UserInputBlock
      className='uesr-input'
    >
      <InputWrapper>
        <InputBlock
          type={inputType}
          placeholder={(inputType === 'text') ? '답을 입력해주세요.' : '숫자를 입력해주세요.'}
          maxLength={30}
          value={inputText}
          ref={inputRef}
          onChange={(e) => handleEvent(e.target.value)}
        />
        <ButtonWrapper>
          <ButtonBlock
            className='user-input-delete'
            satisfied={satisfied}
            onClick={() => handleClick()}
          >삭제</ButtonBlock>
        </ButtonWrapper>
      </InputWrapper>
    </UserInputBlock>
  )
}

export default UserInput;