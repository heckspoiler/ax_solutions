import React, { useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AboutContent from './AboutContent/AboutContent';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function AboutSection({ isMobile }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const section = containerRef.current;

      ScrollTrigger.create({
        trigger: section,
        // markers: true,
        start: 'top 90%',
        end: 'bottom top',

        onEnter: () => {
          gsap.to(window, {
            duration: 1,
            delay: 0.8,
            scrollTo: { y: section, offsetY: 0 },
            onComplete: () => {
              ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                pin: true,
                pinSpacing: false,
              });
            },
          });
        },
        once: true,
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <section className={styles.Main} ref={containerRef}>
      <AboutContent isMobile={isMobile} />
    </section>
  );
}
