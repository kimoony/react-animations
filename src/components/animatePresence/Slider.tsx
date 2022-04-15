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
  flex-direction: column;
  background: linear-gradient(45deg, #22128b, #2a68e2);
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const BackBtn = styled.button`
    /* position: absolute;
  top: 50px; */
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: .5
    }
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    rotateX: 180,
    transition: {
      duration: .5,
    }
  }),
}

function Slider() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false)
  const nextPlease = () => {
    setBack(false)
    setVisible((prev) => (prev === 10 ? 10 : prev + 1))
  }
  const prevPlease = () => {
    setBack(true)
    setVisible((prev) => (prev === 1 ? 1 : prev - 1))
  }
  const frontPlease = () => {
    setBack(true)
    setVisible(1)
  };
  const endPlease = () => {
    setBack(false)
    setVisible(10)
  };


  return (
    <Wrapper>
      {/* <AnimatePresence exitBeforeEnter> 먼저 실행되는 컴포는트가 지나가고 다음이 실행된다.  */}
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <BtnWrapper>
        <button onClick={frontPlease}>Front</button>
        <button onClick={prevPlease}>Prev</button>
        <button onClick={nextPlease}>Next</button>
        <button onClick={endPlease}>End</button>
      </BtnWrapper>
      <Link to="/">
        <BackBtn>Back</BackBtn>
      </Link>
    </Wrapper>
  )
}

export default Slider