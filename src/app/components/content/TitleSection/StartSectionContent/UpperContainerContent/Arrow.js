'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Arrow({ styles, isMobile, containerRef }) {
  const arrowRef = useRef();
  const boxRef = useRef();

  useGSAP(
    () => {
      if (!arrowRef.current || !containerRef.current) {
        console.log('Refs not ready');
        return;
      }

      gsap.fromTo(
        arrowRef.current,
        { scale: 0, rotation: 40 },
        {
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          delay: 0.65,
        }
      );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 10.3%',
        end: 'bottom top',
        scrub: 0.3,
        // markers: true,
        animation: gsap.fromTo(
          arrowRef.current,
          { y: 0, rotation: 40 },
          { y: -50, duration: 0.6, ease: 'circ.out', rotation: -90 }
        ),
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={styles.Content} ref={boxRef}>
      <div className={styles.ArrowContainer}>
        <h1 className={styles.Arrow} ref={arrowRef}>
          →
        </h1>
      </div>
    </div>
  );
}
