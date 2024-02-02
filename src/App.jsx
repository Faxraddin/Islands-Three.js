import React from 'react';
import './App.css';

import { Canvas } from '@react-three/fiber';
import ScreenContainer from './ScreenContainer';

function App() {

  return (
    <Canvas>
      <ScreenContainer/>
    </Canvas>
  )
}


export default App
