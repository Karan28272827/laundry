// LandingPage.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Box = (props) => {
  // Animation effect
  useFrame(({ clock }) => {
    props.mesh.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={props.mesh} {...props} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#f39c12" />
    </mesh>
  );
};

const LandingPage = () => {
  const mesh = React.useRef();

  return (
    <section className="landing-page h-screen flex items-center justify-center">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box mesh={mesh} />
        <OrbitControls />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to LaundryExpress</h1>
        <p className="mt-4">Your one-stop solution for all laundry services</p>
        <button className="mt-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
