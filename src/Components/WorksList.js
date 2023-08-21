import React from 'react';
import { styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 49.5rem;
  gap: 1.125rem;
  margin-top: 0.625rem;

`;
const WorkImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49.5rem;
  height: 28.125rem;
  img {
    height: 100%;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InfoTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 1.75rem;
  font-weight: 700;
`;
const InfoType = styled.div`
  font-size: 1.125rem;
`;
const Skills = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;

  span {
    display: inline-block;
    font-size: 0.875rem;
    padding: 0.25rem 1rem;
    background-color: rgba(100, 121, 115, 0.7);
    color: var(--white);
    border-radius: 0.3125rem;
  }
`;
const InfoDesc = styled.div`
  font-family: var(--primary-kr);
  font-size: 1.125rem;
  font-weight: 400;
`;
const ButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  font-size: 1rem;

  button {
    color: var(--white);
    border: none;
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
      font-size: 1rem;
    }
  }
`;
const Details = styled.button`
  // width: 11.25rem;
  width: 10rem;
  background-color: var(--green);

  & .faArrowRight {
    font-size: 1.125rem;
  }

  &:hover {
    background-color: var(--darkgreen);
    gap: 1rem;
  }
`;
const GoToSite = styled.button`
  // width: 12.75rem;
  width: 11.75rem;
  background-color: var(--pink);

  & .faLink {
    font-size: 1.125rem;
  }

  &:hover {
    background-color: var(--darkpink);
    gap: 1rem;
  }`;

const WorksList = ({ item }) => {
  const navigate = useNavigate();
  const handleGoWorksDetail = () => {
    navigate(`/worksdetail/:${item.id}`)
  }
  const handleGoWorkSite = () => {
    window.open(`${item.site}`);
  }
  return (
    <InfoWrapper>
      <WorkImg>
        <img src={item.img} />
      </WorkImg>
      <Info>
        <InfoTitle>{item.title}</InfoTitle>
        <InfoType>{item.type}</InfoType>
      </Info>
      <Skills>
        {item.skills.map((skill, index) => (
          <span key={index}>#{skill}</span>
        ))}
      </Skills>
      <InfoDesc>
        {item.desc}
      </InfoDesc>
      <ButtonsArea>
        <Details onClick={handleGoWorksDetail} id={item.id}>
          <FontAwesomeIcon className='faArrowRight' icon={faArrowRight} />
          <span>자세히 보기</span>
        </Details>
        <GoToSite>
          <FontAwesomeIcon className='faLink' icon={faLink} />
          <span onClick={handleGoWorkSite}>사이트 바로가기</span>
        </GoToSite>
      </ButtonsArea>
    </InfoWrapper>
  )
}

export default WorksList
