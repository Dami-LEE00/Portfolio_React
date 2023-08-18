import React from 'react';
import { styled } from "styled-components";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Container = styled.div`
  width: 100%;
  font-family: var(--primary-en);
  color: var(--darkblack);
  background-color: var(--f7);

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0!important;
    padding: 0!important;
  }
`;
const ScrollTop = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 0.125rem solid var(--lightgray);
  border-radius: 0.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 2rem;
  bottom: 2rem;
  cursor: pointer;

  & .faSquareCaretUp {
    font-size: 2.5rem;
    color: var(--lightgray);
    transition: 0.15s;
  }

  transition: 0.15s;

  &:hover {
    border: 0.125rem solid var(--darkgreen);
    & .faSquareCaretUp {
      color: var(--darkgreen);
    }
  }
`;

const Intro = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    if(!window.scrollY) return
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  useEffect(() => {
    const handleShowButton = () => {
      if(window.scrollY > window.innerHeight) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    console.log(window.scrollY);
    window.addEventListener('scroll', handleShowButton)
    return () => {
      window.removeEventListener('scroll', handleShowButton)
    };
  }, [])

  return (
    <Container>
      <NavBar />
      <Home />
      <About />
      <Works />
      <Contact />
      <ScrollTop onClick={scrollToTop}>
        <FontAwesomeIcon className='faSquareCaretUp' icon={faCaretUp} />
      </ScrollTop>
    </Container>
  )
}

export default Intro
