'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Image.module.css';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MeImage({ continueScrolling }) {
  const containerRef = useRef();
  const imageRef = useRef();
  const [scrollHeight, setScrollHeight] = useState(0);

  useGSAP(
    () => {
      if (!containerRef.current || !imageRef.current) {
        return;
      }

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom top',
        // markers: true,
        toggleActions: 'play none none reverse',
        animation: gsap.timeline().from(imageRef.current, {
          scale: 0,
          delay: 2,
          duration: 0.8,
          ease: 'back.out',
        }),
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={styles.Container}>
      <div className={styles.ImageContainer}>
        <Image
          ref={imageRef}
          src="/assets/img/carlo.png" // Update this path to your image
          alt="me"
          width={400}
          height={500}
        />
      </div>
    </div>
  );
}
