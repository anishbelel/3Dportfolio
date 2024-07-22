import React, { Suspense, useEffect, useState } from "react";


import { OrbitControls,SpotLight, Preload,useDepthBuffer, useGLTF } from "@react-three/drei";
import { Vector3 } from 'three'
import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'


import CanvasLoader from "../Loader";


function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
    light.current.target.updateMatrixWorld()
  })
  return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={5} {...props} />
}

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const depthBuffer = useDepthBuffer({ frames: 1 })

  return (
    <mesh>
      <hemisphereLight intensity={5.15} groundColor='black' />
      <MovingSpot depthBuffer={depthBuffer} color="#ddf542" position={[0, 4.7, 5]} />
      <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[0, 4.7, -5]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.60}
        position={isMobile ? [0, -3, -0.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;