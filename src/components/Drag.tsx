import React, { useRef } from 'react';
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
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const InBox = styled(motion.div)`
  background-color: #fff;
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;




function Drag() {
  const constraintsRef = useRef<HTMLDivElement>(null)
  return (
    <Wrapper>
      <Link to="/">
        <button>Back</button>
      </Link>
      <Box ref={constraintsRef}>
        <InBox drag dragConstraints={constraintsRef} />
      </Box>
    </Wrapper>
  )
}

export default Drag