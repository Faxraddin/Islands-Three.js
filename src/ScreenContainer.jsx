import React, { Suspense } from "react";
import { Environment,OrbitControls,PerspectiveCamera,Float } from '@react-three/drei';
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from "three";
import FloatingIsland from "./FloatingIsland";
import { Portal } from "./Portal";
import { Rocks } from "./Rocks";
import { FloatingRocks } from "./FloatingRocks";
import { Trees } from "./Trees";
import { Words } from "./Words";
import { Grass } from "./Grass";

const ScreenContainer = () => {
    let lightColor = new Color(1, 0.2, 0.1);
let mesh = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.2, 20),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 1,
  })
);
mesh.rotation.x = Math.PI * 0.5;
mesh.position.set(1.17, 10.7, -4.1);
mesh.scale.set(1.5, 1, 1);
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
            <spotLight
                penumbra={1}
                distance={500}
                angle={60.65}
                attenuation={1}
                anglePower={3}
                intensity={0.3}
                color={lightColor}
                position={[1.19, 10.85, -4.45]}
                target-position={[0, 0, -1]}
            />
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