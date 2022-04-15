import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #22128b, #2a68e2);
`;

function Home() {
  return (
    <Wrapper>
      <h2>Motion</h2>
      <div>
        <Link to="/basic">
          <button>Basic</button>
        </Link>
        <Link to="/variants">
          <button>Variants</button>
        </Link>
        <Link to="/gestures">
          <button>Gestures</button>
        </Link>
        <Link to="/drag">
          <button>Drag</button>
        </Link>
        <Link to="/scroll">
          <button>Scroll</button>
        </Link>
        <Link to="/path">
          <button>Path</button>
        </Link>
        <Link to="/layout">
          <button>Layout</button>
        </Link>
      </div>
      <h2>AnimatePresence</h2>
      <div>
        <Link to="/presence">
          <button>Presence</button>
        </Link>
        <Link to="/slider">
          <button>Slider</button>
        </Link>
      </div>
      <h2>Project</h2>
      <div>
        <Link to="/roject">
          <button>Project</button>
        </Link>
      </div>
    </Wrapper >
  )
}

export default Home