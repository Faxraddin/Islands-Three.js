import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { Scene, WebGLRenderTarget, TextureLoader, EquirectangularReflectionMapping, 
  AlwaysStencilFunc, ReplaceStencilOp, DoubleSide, LinearEncoding,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const target = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
  stencilBuffer: false,
});

window.addEventListener("resize", () => {
  target.setSize(window.innerWidth, window.innerHeight);
});

export function Portal() {
  const model = useLoader(
    GLTFLoader,
     "/models/portal.glb"
  );
  const mask = useLoader(
    GLTFLoader,
    "/models/portal_mask.glb"
  );

  useEffect(() => {
    if (!model) return;

    let mesh = model.scene.children[0];
    mesh.material.envMapIntensity = 3.5;

    let maskMesh = mask.scene.children[0];
    maskMesh.material.transparent = false;
    maskMesh.material.side = DoubleSide;
    maskMesh.material.stencilFunc = AlwaysStencilFunc;
    maskMesh.material.stencilWrite = true;
    maskMesh.material.stencilRef = 1;
    maskMesh.material.stencilZPass = ReplaceStencilOp;
  }, [model, mask]);

  return (
    <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
      
    </>
  );
}