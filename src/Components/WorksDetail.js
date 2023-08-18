import React from 'react';
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import objectData from '../objectData';

console.log(objectData);

const Container = styled.div`
  // height: 100vh;
  
  font-family: var(--primary-en);

  & .faArrowLeftLong {
    position: absolute;
    top: 2rem;
    left: 3rem;
    font-size: 2rem;

    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  width: 75rem;
  height: 100%;
  margin: 0 auto;
  padding: 6rem 0;
  overflow: hidden;

  background-color: var(--white);
`;
const Contents = styled.div`
  width: 100%;
`;
const WorksInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WorksDesc = styled.div`
  width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const WorksDetail = ({ id }) => {
  const navigate = useNavigate();
  const handleGoIntro = () => {
    navigate(-1);
  }
  return (
    <Container>
      <FontAwesomeIcon 
        onClick={handleGoIntro}
        className='faArrowLeftLong' 
        icon={faArrowLeftLong} 
      />
      <Wrapper>
        <Contents>
          {objectData.map((it, idx) => (
            <WorksInfo key={idx} it={it}>
              <img src='http://placeholder.com/588x334' />
              <WorksDesc>
                <h1>{it.title}</h1>
              </WorksDesc>
            </WorksInfo>
          ))}
        </Contents>
      </Wrapper>
    </Container>
  )
}

export default WorksDetail
