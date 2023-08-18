import './App.css';
import { styled } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Components/Intro';
import AboutMore from './Components/AboutMore';
import WorksDetail from './Components/WorksDetail';
import { Routes, Route } from 'react-router-dom';


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

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Intro />} />
        {/* <Route path='/aboutmore' element={<AboutMore />} /> */}
        <Route path='/worksdetail/:id' element={<WorksDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
