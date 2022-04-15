import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(45deg, #22128b, #2a68e2);
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #2986f5;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function LayoutAni() {
  const [clicked, setClicked] = useState(false)
  const toggleClicked = () => setClicked((prev) => !prev)
  return (
    <Wrapper onClick={toggleClicked}>
      <Link to="/">
        <button>Back</button>
      </Link>
      {/* <Box style={{
        justifyContent: clicked ? "center" : "flex-start",
        alignItems: clicked ? "center" : "flex-start",
      }}>
        <Circle layout />
      </Box> */}
      <Box>
        {!clicked ? <Circle layoutId="circle" /> : null}
      </Box>
      <Box>
        {clicked ? <Circle layoutId="circle" /> : null}
      </Box>
    </Wrapper>
  )
}

export default LayoutAni