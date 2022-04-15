import React from 'react'
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
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100%" },
}

function Gestures() {
  return (
    <Wrapper>
      <Link to="/">
        <button>Back</button>
      </Link>
      <Box variants={boxVariants} whileHover="hover" whileTap="click" />
    </Wrapper>
  )
}

export default Gestures