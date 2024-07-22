'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import styles from './Scene.module.css';
import { Environment, Lightformer } from '@react-three/drei';

export default function Scene() {
  return (
    <div className={styles.Canvas}>
      <Canvas
        style={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={20}
          position={[2, 5, 2]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* <directionalLight
          intensity={10}
          position={[-2, 5, -2]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        /> */}
        {/* <spotLight
          intensity={10}
          position={[0, 10, 0]}
          angle={0.2}
          penumbra={1}
          castShadow
        /> */}
        {/* <Environment preset="city" /> */}
        <Model />
      </Canvas>
    </div>
  );
}
