import Dock from '#Components/Dock';
import Welcome from '#Components/Welcome';
import Navbar from '#Components/Navbar';
import React from 'react';
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import Terminal from '#windows/Terminal';
import Safari from '#windows/Safari';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
    </div>
  );
}

export default App;




