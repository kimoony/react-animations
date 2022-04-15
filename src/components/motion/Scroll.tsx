import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { Link } from 'react-router-dom';


const Wrapper = styled(motion.div)`
  height: 200vh;
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

const InBox = styled(motion.div)`
  background-color: #fff;
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;



function Scroll() {
  // MotionValue가 바뀌어도 컴포넌트는 다시 랜더링 되지 않는다.
  // state가 아님
  const x = useMotionValue(0);
  // useTransform 은 하나의 값(x)을 받고 그 값의 제한 값과 결과 값을 출력받을 수 있다.
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(230, 238, 0))",
      "linear-gradient(135deg, rgb(96, 240, 156), rgb(9, 106, 54))",
    ]);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5])

  return (
    <Wrapper style={{ background: gradient }}>
      <Link to="/">
        <button>Back</button>
      </Link>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  )
}

export default Scroll