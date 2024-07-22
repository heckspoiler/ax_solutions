'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  useGLTF,
  OrbitControls,
  Environment,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const meshRef = useRef();
  const { nodes } = useGLTF('/assets/ax_logo_3d.glb');

  console.log(nodes);
  const timeRef = useRef(0);
  const scrollProgressRef = useRef(0);
  const [scrollDistortion, setScrollDistortion] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const calcDelta = () => {
    const position = window.scrollY;
    setTimeout(() => {
      setScrollPosition(0);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', calcDelta);
  }, [scrollPosition]);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
        setScrollDistortion(self.progress * 0.4);
      },
    });
  }, []);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.y = -0.4;
      meshRef.current.rotation.x = 1.5;
      meshRef.current.rotation.y = 0;
      meshRef.current.rotation.z = 0;
    }
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      timeRef.current += delta;
      meshRef.current.rotation.z += 0.1 * delta;
      meshRef.current.position.y += Math.sin(timeRef.current) * 0.001;
      meshRef.current.rotation.z = scrollProgressRef.current * Math.PI;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={nodes.Curve001.geometry} scale={18}>
        <MeshTransmissionMaterial
          transmissionSampler={false}
          backside={true}
          backsideThickness={0.5}
          samples={16}
          thickness={0.5}
          chromaticAberration={0.1}
          anisotropy={0.8}
          distortion={0.9}
          distortionScale={0.9}
          temporalDistortion={0.2}
          iridescence={0.1}
          iridescenceIOR={0.5}
          iridescenceThicknessRange={[0, 1400]}
          clearcoat={1}
          attenuationDistance={0.9}
          attenuationColor="#ffffff"
          color="white"
          opacity={0}
        />
      </mesh>

      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        enableZoom={false}
      />
      <Environment preset="city" />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </group>
  );
}
