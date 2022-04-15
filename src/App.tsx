import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import BasicAnimatioin from './components/motion/BasicAnimatioin';
import Variants from './components/motion/Variants';
import Gestures from './components/motion/Gestures';
import Drag from './components/motion/Drag';
import Scroll from './components/motion/Scroll';
import Path from './components/motion/Path';
import Presence from './components/animatePresence/Presence';
import Slider from './components/animatePresence/Slider';
import LayoutAni from './components/motion/LayoutAni';
import Project from './components/Project';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basic" element={<BasicAnimatioin />} />
        <Route path="variants" element={<Variants />} />
        <Route path="gestures" element={<Gestures />} />
        <Route path="drag" element={<Drag />} />
        <Route path="scroll" element={<Scroll />} />
        <Route path="path" element={<Path />} />
        <Route path="layout" element={<LayoutAni />} />
        <Route path="presence" element={<Presence />} />
        <Route path="slider" element={<Slider />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
