import React from 'react';
import { keyframes, styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  font-family: var(--primary-en);
`;
const textBox = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(-75%); }
`;
const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 31.25rem;
  position: relative;
  overflow: hidden;

  border-top: 1px solid var(--darkblack);
  border-bottom: 1px solid var(--darkblack);

  &::before {
    content: 'DAMIDAMIDAMIDAMIDAMIDAMIDAMIDAMI';
    display: inline-block;
    font-size: 20.25rem;  // 324px
    height: 31.25rem;
    line-height: 31.25rem;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.05);
    position: absolute;
    animation: ${textBox} 60s linear infinite both;
  }
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2.5rem;
`;
const Title = styled.h1`
color: var(--darkgreen);
font-size: 7rem;
font-weight: 800;
`;
const SubTitle = styled.div`
  color: var(--darkgreen);
  font-size: 1.5rem;
  font-weight: 400;
`;
const upDown = keyframes`
  0% {
    transform: translateY(-1rem);
  }
  50% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(-1rem);
  }
`;
const ScrollDown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  position: absolute;
  bottom: 1.25rem;

  cursor: pointer;

  & .faAnglesDown {
    font-size: 40px;
    color: var(--ccc);
    animation: ${upDown} 1.5s ease-in-out infinite;
  }
`;



const Home = () => {
  return (
    <Container id='home' className='Home'>
      <Wrapper> 
        <Inner>
          <Title>Front - end Developer</Title>
          <SubTitle>PORTFOLIO</SubTitle>
        </Inner>
      </Wrapper>
      <Link to='about' smooth={true} duration={0}>
        <ScrollDown>
          <FontAwesomeIcon className='faAnglesDown' icon={faAnglesDown} />
          <div>Scroll Down</div>
        </ScrollDown>
      </Link>
    </Container>
  )
} 

export default Home
