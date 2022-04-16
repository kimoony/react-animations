import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(45deg, #284cc6, #f9567a);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #f9567a;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Switch = styled(motion.button)`
  border: none;
  border-radius: 10px;
  background-color: #fff;
  color: #2986f5;
  padding: 5px 10px;
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const hoverMotion = {
  numOne: { scale: 1.1, x: -10, y: -10 },
  numTwo: { scale: 1.1, x: 10, y: -10 },
  numThree: { scale: 1.1, x: -10, y: 10 },
  numFour: { scale: 1.1, x: 10, y: 10 }
};

export default function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) =>
          n === "1" ? (
            <Box
              onClick={() => setId(n)}
              key={n}
              layoutId={n}
              whileHover={hoverMotion.numOne}
            />
          ) : n === "2" ? (
            <Box
              onClick={() => setId(n)}
              key={n}
              layoutId={n}
              whileHover={hoverMotion.numTwo}
            >
              {!clicked ? (
                <Circle
                  layoutId="switch"
                  initial={{
                    backgroundColor: "#f9567a"
                  }}
                  animate={{
                    backgroundColor: "#2986f5"
                  }}
                />
              ) : null}
            </Box>
          ) : n === "3" ? (
            <Box
              onClick={() => setId(n)}
              key={n}
              layoutId={n}
              whileHover={hoverMotion.numThree}
            >
              {clicked ? <Circle layoutId="switch" /> : null}
            </Box>
          ) : n === "4" ? (
            <Box
              onClick={() => setId(n)}
              key={n}
              layoutId={n}
              whileHover={hoverMotion.numFour}
            />
          ) : null
        )}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }}></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Switch
        whileTap={{
          scale: 1.2,
          color: "#f9567a",
          transition: {
            duration: 0.2
          }
        }}
        onClick={toggleClicked}
      >
        Switch
      </Switch>
    </Wrapper>
  );
}
