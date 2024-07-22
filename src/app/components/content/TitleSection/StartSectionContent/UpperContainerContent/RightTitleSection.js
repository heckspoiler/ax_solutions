'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function RightTitleSection({ styles, containerRef }) {
  const textRef = useRef();
  const boxRef = useRef();
  const stickyRef = useRef();

  useGSAP(
    () => {
      if (!textRef.current || !boxRef.current || !containerRef) {
        return;
      }

      const split = new SplitText(textRef.current, {
        type: 'chars',
      });

      // Initial animation
      const tl = gsap.timeline();

      tl.fromTo(
        boxRef.current,
        { y: 100, visibility: 'hidden' },
        {
          y: 0,
          visibility: 'visible',
          duration: 0.6,
          ease: 'circ.out',
          delay: 0.8,
        }
      ).fromTo(
        split.chars,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: 'circ.out' }
      );

      ScrollTrigger.create({
        trigger: boxRef.current,
        start: 'top 30%',
        end: 'bottom top',
        scrub: 0.3,
        // markers: true,
        animation: gsap.fromTo(
          split.chars,
          { y: 0 },
          { y: -100, duration: 0.6, stagger: 0.05, ease: 'circ.out' }
        ),
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={styles.RightContainer} ref={stickyRef}>
      <div className={styles.BlackBGContainer} ref={boxRef}>
        <h1 className={styles.BlackBG} ref={textRef}>
          an intern?
        </h1>
      </div>
    </div>
  );
}
