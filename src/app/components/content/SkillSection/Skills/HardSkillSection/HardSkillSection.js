'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Physics2DPlugin, ScrollTrigger, Draggable } from 'gsap/all';
import styles from './SkillSection.module.css';

gsap.registerPlugin(ScrollTrigger, Physics2DPlugin, Draggable);

const technologies = [
  'Next.js',
  'React',
  'Tailwind CSS',
  'GSAP',
  'THREE.js / React Three Fiber',
  'HTML',
  'CSS',
  'Javascript',
];

export default function HardSkillSection({ isMobile }) {
  const containerRef = useRef();
  const elementsRef = useRef([]);
  const animationPlayedRef = useRef(false);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = elementsRef.current;

      elements.forEach((element) => {
        Draggable.create(element, {
          type: 'x,y',
          bounds: containerRef.current,
          inertia: true,
          isThrowing: true,
        });
      });

      gsap.set(elements, {
        visibility: 'hidden',
        y: '-500',
        x: (index) => `${index * 100}`,
        rotation: () => gsap.utils.random(-120, 120),
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 10%',
        end: 'bottom 0%',
        // markers: true,
        pin: true,
        pinSpacing: false,
        onEnter: () => {
          if (!animationPlayedRef.current) {
            gsap.to(elements, {
              duration: 2,
              opacity: 1,
              x: (index) => `${index * 100}`,
              visibility: 'visible',
              y: (_, target) =>
                containerRef.current.offsetHeight - target.offsetHeight,
              rotation: 0,
              ease: 'bounce.out',
              stagger: 0.1,
              overwrite: 'auto',
              onComplete: () => {
                animationPlayedRef.current = true;
              },
            });
          }
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        // Draggable.get(elements).forEach((d) => d.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div className={styles.TestContainer} ref={containerRef}>
      {technologies.map((tech, index) => (
        <div
          key={tech}
          className={styles.Test}
          ref={(el) => (elementsRef.current[index] = el)}
        >
          <h1>{tech}</h1>
        </div>
      ))}
    </div>
  );
}
