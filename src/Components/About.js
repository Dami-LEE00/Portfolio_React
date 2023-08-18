import React, { useState } from 'react';
import { keyframes, styled } from "styled-components";
import AboutMore from './AboutMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2.5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Container = styled.div`
  height: 100vh;

  font-family: var(--primary-en);
`;
const Wrapper = styled.div`
  width: 75rem;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
const Contents = styled.div`
  display: flex;
  gap: 4.875rem;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  img {
    position: relative;
    animation: ${fadeInUp} 1s;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 2.25rem;
  color: var(--green);
  span {
    display: inline-block;
    font-size: 2.25rem;
    color: var(--white);
    background-color: var(--darkgreen);
    font-weight: 200;
    padding: 0 0.625rem;
  }
`;
const Desc = styled.div`
  word-break: break-all;
  font-family: var(--primary-kr);
  font-size: 1.125rem;
  font-weight: 400;

  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  p {
    line-height: 1.6;
    font-size: 1.125rem;
  }
`;
const ButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`;
const Button = styled.button`
  color: var(--white);
  background-color: var(--green);
  border: none;
  width: 11.75rem;
  height: 2.5rem;
  font-family: var(--primary-kr);
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  display: flex;
  gap: 0.625rem;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    line-height: 1;
  }

  &:hover {
    background-color: var(--darkgreen);
    gap: 1rem;
  }
`;


const About = () => {
  const [modalAbout, setModalAbout] = useState(false);
  const showAbout = () => {
    setModalAbout(true);
  }
  return (
    <Container id='about' className='About'>
      <Wrapper>
        <Contents>
          <img src='http://placeholder.com/510x510' />
          <Info>
            <Title>ABOUT <span>DAMI</span></Title>
            <Desc>
              <p>안녕하세요! 프론트엔드 개발자를 꿈꾸는 이다미입니다.</p>
              <p>
                사용자의 눈높이에 맞춘 다양한 디자인과<br />
                직관적인 인터페이스를 개발하는 것에 큰 흥미를 가지고 있어요.
              </p>
              <p>팀원들과의 협업을 통해 서로의 아이디어를 나누는 것을 중요하게 생각해요.</p>
              <p>
                현대 웹 기술이 빠르게 변화하는 환경에서 새로운 아이디어를 시각화하고,<br />
                사용자의 경험을 지속적으로 개선하는 것이 저의 목표입니다!
              </p>
            </Desc>
            <ButtonsArea>
              {/* <Button onClick={showAbout}>
                <FontAwesomeIcon className='faPlay' icon={faPlay} />
                <span>자기소개 더보기</span>
              </Button> */}
              {modalAbout && <AboutMore setModalAbout={setModalAbout} />}
              <Button>
                <FontAwesomeIcon className='faDownload' icon={faDownload} />
                <span>이력서 다운로드</span>
              </Button>
            </ButtonsArea>
          </Info>
        </Contents>
      </Wrapper>
    </Container>
  )
}

export default About
