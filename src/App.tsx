import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import BasicAnimatioin from './components/BasicAnimatioin';
import Variants from './components/Variants';
import Gestures from './components/Gestures';
import Drag from './components/Drag';
import Scroll from './components/Scroll';
import Path from './components/Path';


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
      </Routes>
    </>
  );
}

export default App;
