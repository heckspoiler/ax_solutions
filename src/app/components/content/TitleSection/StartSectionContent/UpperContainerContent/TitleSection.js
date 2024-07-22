'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin, ScrollTrigger);

export default function TitleSection({ styles, isMobile, containerRef }) {
  const textRef = useRef();
  const arrowRef = useRef();
  const boxRef = useRef();

  useGSAP(
    () => {
      if (!textRef.current || !containerRef.current || !boxRef.current) return;
      const split = new SplitText(textRef.current, { type: 'chars' });
      const tl = gsap.timeline();

      tl.from(split.chars, {
        lazy: false,
        y: 150,
        stagger: 0.05,
        duration: 0.6,
        ease: 'circ.out',
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 12.3%',
          end: 'bottom top',
          pin: true,
          toggleActions: 'play none none reverse',
          scrub: 0.3,
          // markers: true,
          pinSpacing: false,
        },
      });

      scrollTl.to(split.chars, {
        y: -100,
        stagger: 0.03,
        duration: 0.2,
        ease: 'circ.in',
        transformOrigin: '50% 50% -50',
      });
      return () => {
        if (split.revert) {
          split.revert();
        }

        ScrollTrigger.getAll().forEach((st) => st.kill());

        tl.kill();
        scrollTl.kill();
      };
    },

    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className={styles.Content} ref={boxRef}>
        <h1 className={styles.MainTitle} ref={textRef}>
          do you need
        </h1>
      </div>
    </div>
  );
}
