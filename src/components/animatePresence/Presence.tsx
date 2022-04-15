import React, { useState } from 'react'
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #22128b, #2a68e2);
`;

const BtnWrapper = styled.div`
width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opecity: 0,
    scale: 0,
  },
  visible: {
    opecity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opecity: 0,
    scale: 0,
    y: 50,
  }
}

function Presence() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev)

  return (
    <Wrapper>
      <BtnWrapper>
        <Link to="/">
          <button>Back</button>
        </Link>
        <button onClick={toggleShowing}>Click</button>
      </BtnWrapper>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Presence