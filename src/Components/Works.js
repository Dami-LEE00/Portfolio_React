import React from 'react';
import { styled } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons';
import WorksList from './WorksList';
import objectData from '../objectData';

console.log(objectData);


const Container = styled.div`
  height: 100vh;

  font-family: var(--primary-en);
`;
const Wrapper = styled.div`
  width: 75rem;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--darkgreen);
  text-align: center;
  margin-bottom: 1.75rem;
`;

const Works = () => {
  return (
    <Container id='works'>
      <Wrapper>
        <Contents>
          <Title>WORKS</Title>
          {/* Slider */}
          <Carousel className='works-slider' data-bs-theme="dark">
            {objectData.map((item, index) => (
              <Carousel.Item key={index}>
                <WorksList item={item} index={index} />
              </Carousel.Item>
              ))}
          </Carousel>
        </Contents>
      </Wrapper>
    </Container>
  )
}

export default Works
