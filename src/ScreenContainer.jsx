import React, { Suspense } from "react";
import { Environment,OrbitControls,PerspectiveCamera,Float } from '@react-three/drei';

import FloatingIsland from "./FloatingIsland";
import { Portal } from "./Portal";
import { Rocks } from "./Rocks";
import { FloatingRocks } from "./FloatingRocks";
import { Trees } from "./Trees";
import { Words } from "./Words";
import { Grass } from "./Grass";

const ScreenContainer = () => {
  return (
    <Suspense fallback={null}>
        <Environment background={'only'} files={'/textures/bg.hdr'}/>
        <Environment background={false} files={'/textures/envmap.hdr'}/>

        <PerspectiveCamera fov={50} makeDefault position={[-1.75,10.85,20.35]}/>
        <OrbitControls target={[1,5,0]} maxPolarAngle={Math.PI * 0.5}/>

        <Float
            speed={0.5}
            rotationIntensity={0.6}
            floatIntensity={0.6}
        >
            <FloatingIsland/>
            <Portal/>
            <Rocks/>
            <FloatingRocks/>
            <Trees/>
            <Words/>
            <Grass/>
        </Float>
    </Suspense>
  )
}
export default ScreenContainer