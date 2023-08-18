import React from 'react';
import { keyframes, styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

  z-index: 9999;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);

  transition: 0.35s;
`;
const Wrapper = styled.div`
  font-family: var(--primary-en);
  // width: 62.25rem;
  // height: 62.5rem;
  width: 70%;
  height: 90%;

  z-index: 9999;
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--ddd);
`;
const AboutMore = ({ setModalAbout }) => {
  const closeAbout = () => {
    setModalAbout(false)
  };
  return (
    <Container>
      <Wrapper>
        여기는 자기소개 더보기 컴포넌트입니다.
        <button onClick={closeAbout}>X</button>
      </Wrapper>
    </Container>
  )
}

export default AboutMore
