import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } }
}

function Path() {
  return (
    <Wrapper>
      <Link to="/">
        <button>Back</button>
      </Link>
      <Box variants={myVars} initial="start" animate="end" />
    </Wrapper>
  )
}

export default Path