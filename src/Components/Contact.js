import React from 'react';
import '../App.css';
import { keyframes, styled } from "styled-components";
import paperTextureImg from '../bgImg/paper-texture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  height: 100vh;
  background: url(${paperTextureImg}) no-repeat center;
  background-size: cover;
  font-family: var(--primary-en);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(247, 247, 247, 1), rgba(247, 247, 247, 0));
  }
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
  gap: 2.5rem;
  
  position: relative;
`;
const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--darkgreen);
  text-align: center;
  margin: 0;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  div {
    font-family: var(--primary-kr);
    font-size: 1.125rem;
    color: var(--gray);
  }
`;
const Email = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 6rem;
  font-weight: 300;
  color: var(--darkblack);
  transition: 0.35s;

  &:hover {
    color: var(--darkpink);
  }
`;
const AnimatedFontAwesomeIcon = styled(FontAwesomeIcon)`
  opacity: 0;
  transform: translateX(-1rem);
  transition: 0.35s;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.125rem;
  margin-top: 0.625rem;

  font-size: 1.125rem;

  div {
    display: flex;
    gap: 1.75rem;

    & .contactType {
      width: 8.75rem;
      font-size: 1.75rem;
      border-right: 4px solid var(--green);
    }
    & .info {
      a {
        display: flex;
        align-items: center;
        position: relative;

        
        span {
          font-size: 1.75rem;
          font-weight: 400;
          color: var(--darkblack);
          transition: 0.25s;
          
          &:hover {
            color: var(--green);
          }
        }   
        & .faArrowRight {
          position: absolute;
          left: 14rem;
          font-size: 1.125rem;
          color: var(--green);
        }
      }
      &:hover {
        color: var(--green);

        ${AnimatedFontAwesomeIcon} {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 1.75rem;

  font-size: 1rem;
  font-weight: 300;
  color: var(--black);
`;

const Contact = () => {
  return (
    <Container id='contact'>
      <Wrapper>
        <Contents>
          <Title>CONTACT</Title>
          <Desc>
            <div>저와 연락하고 싶으시거나 협업에 관심이 있으시다면 언제든 연락 주세요 :D</div>
            <div>함께 일하고 싶은 개발자로서 새로운 아이디어를 공유하며 다양한 프로젝트에 참여하고 싶습니다.</div>
          </Desc>
          <Email href='mailto:ecch74@naver.com'>ecch74@naver.com</Email>
          <ContactInfo>
            <div className='phone'>
              <div className='contactType'>PHONE</div>
              <div className='info'>
                <a href='tel:010-7773-0540'>
                  <span>010.7773.0540</span>
                  <AnimatedFontAwesomeIcon className='faArrowRight' icon={faArrowRight} />
                </a>
              </div>
            </div>
            <div className='github'>
              <div className='contactType'>GITHUB</div>
              <div className='info'>
                <a href='https://github.com/Dami-LEE00' target='_blank'>
                  <span>Dami-LEE00</span>
                  <AnimatedFontAwesomeIcon className='faArrowRight' icon={faArrowRight} /> 
                </a>
              </div>
            </div>
            <div className='blog'>
              <div className='contactType'>BLOG</div>
              <div className='info'>
                <a href='https://velog.io/@ecch74' target='_blank'>
                  <span>VELOG</span>
                  <AnimatedFontAwesomeIcon className='faArrowRight' icon={faArrowRight} /> 
                </a>
              </div>
            </div>
          </ContactInfo>
          <Copyright>Copyright ⓒ 2023. DAMI All rights reserved</Copyright>
        </Contents>
      </Wrapper>
    </Container>
  )
}

export default Contact;


















// import React from 'react';
// import '../App.css';
// import { keyframes, styled } from "styled-components";
// import paperTextureImg from '../bgImg/paper-texture.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   font-family: var(--primary-en);
//   position: relative;

//   &::before {
//     content: '';
//     // position: absolute;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(to bottom, rgba(247, 247, 247, 1), rgba(51, 51, 51, 0));
//   }
// `;
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `;
// const Contents = styled.div`
//   background: url(${paperTextureImg}) no-repeat center;
//   background-size: cover;
//   width: 39.75rem;
//   height: 25rem;
//   border-radius: 0.625rem;
//   box-shadow: 0.625rem 0.625rem 1.5rem rgba(0, 0, 0, 0.3);

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 0.625rem;
//   padding: 2.5rem 3.75rem ;
// `;
// const Title = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 0.625rem;
// `;
// const Name = styled.h1`
//   margin: 0;
//   padding: 0;
//   font-size: 1.75rem;
//   font-weight: 600;
//   color: var(--darkblack);
// `;
// const Bar = styled.div`
//   width: 0.25rem;
//   height: 1.75rem;
//   background-color: var(--green);
// `;
// const Job = styled.h1`
//   margin: 0;
//   padding: 0;
//   font-size: 1.25rem;
//   font-weight: 400;
// `;
// const Email = styled.a`
// display: inline-block;
// text-decoration: none;
// font-size: 3rem;
// font-weight: 300;
// color: var(--darkblack);
// transition: 0.35s;

// &:hover {
//   color: var(--darkpink);
// }
// `;
// // const fadeInRight = keyframes`
// //   0% {

// //   }
// //   100% {

// //   }
// // `;
// const AnimatedFontAwesomeIcon = styled(FontAwesomeIcon)`
//   opacity: 0;
//   transform: translateX(-1rem);
//   transition: 0.35s;
// `;
// const Desc = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
  // gap: 0.625rem;
  // margin-top: 0.625rem;

  // font-size: 1.125rem;

  // div {
  //   display: flex;
  //   gap: 1.25rem;

  //   & .contactType {
  //     width: 6rem;
  //     font-size: 1.125rem;
  //     border-right: 4px solid var(--green);
  //   }
  //   & .info {
  //     width: 7rem;
  //     // border: 1px solid red;
  //     a {
  //       display: flex;
  //       align-items: center;
  //       position: relative;

        
  //       span {
  //         font-size: 1.125rem;
  //         color: var(--darkblack);
  //         transition: 0.25s;
          
  //         &:hover {
  //           color: var(--green);
  //         }
  //       }   
  //       & .faArrowRight {
  //         position: absolute;
  //         left: 9rem;
  //         color: var(--green);
  //       }
  //     }
  //     &:hover {
  //       color: var(--green);

  //       ${AnimatedFontAwesomeIcon} {
  //         opacity: 1;
  //         transform: translateY(0);
  //       }
  //     }
  //   }
  // }
// `;

// const Contact = () => {
//   return (
//     <Container id='contact'>
//       <Wrapper>
//         <Contents>
//           <Title>
//             <Name>Lee Dami</Name>
//             <Bar></Bar>
//             <Job>Frontend Developer</Job>
//           </Title>
//           <Email href='mailto:ecch74@naver.com'>ecch74@naver.com</Email> 
          // <Desc>
          //   <div className='phone'>
          //     <div className='contactType'>PHONE</div>
          //     <div className='info'>
          //       <a href='tel:010-7773-0540'>
          //         <span>010.7773.0540</span>
          //         <AnimatedFontAwesomeIcon className='faArrowRight' icon={faArrowRight} />
          //       </a>
          //     </div>
          //   </div>
          //   <div className='github'>
          //     <div className='contactType'>GITHUB</div>
          //     <div className='info'>
          //       <a href='https://github.com/Dami-LEE00'>
          //         <span>Dami-LEE00</span>
          //         <AnimatedFontAwesomeIcon className='faArrowRight' icon={faArrowRight} /> 
          //       </a>
          //     </div>
          //   </div>
          //   <div className='blog'>
          //     <div className='contactType'>BLOG</div>
          //     <div className='info'>
          //       <a href='https://velog.io/@ecch74'>
          //         <span>VELOG</span>
          //         <AnimatedFontAwesomeIcon className='faArrowRight' icon={faArrowRight} /> 
          //       </a>
          //     </div>
          //   </div>
          // </Desc>
//         </Contents>
//       </Wrapper>
//     </Container>
//   )
// }

// export default Contact;
