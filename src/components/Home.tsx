import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #22128b, #2a68e2);
`;

function Home() {
  return (
    <Wrapper>
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
      <Link to="/presence">
        <button>Presence</button>
      </Link>
    </Wrapper>
  )
}

export default Home