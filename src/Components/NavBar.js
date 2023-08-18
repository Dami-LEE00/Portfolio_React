import React from 'react';
import { styled, css } from "styled-components";
import { Link } from 'react-scroll';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 4.375rem;
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.75rem;

  // box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);
  background-color: transparent;

  z-index: 9999;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: var(--darkblack);
  font-family: Noto Sans;
  font-size: 1.5rem;
  font-weight: 400;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;
const List = styled.li`
  color: var(--darkblack);
  font-weight: 600; 
  position: relative;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    color: var(--green);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    // bottom: -0.125rem;
    bottom: 0;
    width: 0;
    height: 0.125rem;
    background-color: var(--green);
    opacity: 0;

    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
  }
  &:hover::before {
    width: 100%;
    height: 0.125rem;
    opacity: 1;
  }
`;

const NavBar = () => {
  const data = ['HOME', 'ABOUT', 'WORKS', 'CONTACT'];
  return (
    <Container className='NavBar'>
      <Title>DAMI</Title>
      <Menu>
        {data.map((item, idx) => {
          return (
            <List key={idx}>
              <Link 
                to={item.toLowerCase()} 
                smooth={true} 
                duration={0}
              >
                {item}
              </Link>
            </List>
          )
        })}
      </Menu>
    </Container>
  )
}

export default NavBar