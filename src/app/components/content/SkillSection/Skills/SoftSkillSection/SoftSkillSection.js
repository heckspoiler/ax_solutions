'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import SplitText from 'gsap/SplitText';
import styles from './SoftSkillSection.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SoftSkillSection({ isMobile }) {
  const containerRef = useRef();
  const elementRefs = useRef([]);
  const boxRef = useRef();

  const texts = [
    "Furthermore, I'm an easy going guy",
    "that's highly motivated to contribute to",
    'interesting projects with inspiring people',
  ];

  useGSAP(
    () => {
      if (!containerRef.current || !boxRef.current) {
        return;
      }

      const elements = elementRefs.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 30%',
          // markers: true,
        },
      });

      tl.from(boxRef.current, {
        y: 600,
        duration: 0.8,
        ease: 'power4.out',
      }).from(elements, {
        y: 100,
        ease: 'power4.out',
        stagger: 0.1,
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={styles.Main} ref={containerRef}>
      <div className={styles.ContentContainer} ref={boxRef}>
        {texts.map((text, index) => (
          <div key={`text ${index}`} className={styles.TextContainer}>
            <h1 ref={(el) => (elementRefs.current[index] = el)}>{text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
