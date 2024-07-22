'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Card.module.css';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Card({ continueScrolling }) {
  const containerRef = useRef();
  const cardRef = useRef();
  const firstTitleRef = useRef();
  const textRef = useRef();
  const firstBox = useRef();
  const secondBox = useRef();
  const thirdBox = useRef();
  const cardWrapperRef = useRef();

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !cardRef.current ||
        !cardWrapperRef ||
        !firstTitleRef.current ||
        !textRef.current ||
        !firstBox.current ||
        !secondBox.current ||
        !thirdBox.current
      ) {
        return;
      }

      const boxes = [firstBox.current, secondBox.current, thirdBox.current];
      const split = new SplitText(textRef.current, { type: 'chars' });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom top',
        // markers: true,
        toggleActions: 'play none none reverse',
        animation: gsap
          .timeline()
          .from(cardRef.current, {
            y: 1800,
            duration: 0.8,
            ease: 'power2.out',
          })
          .from(
            firstTitleRef.current,
            {
              y: 300,
              duration: 0.8,
              ease: 'power2.out',
            },
            '-=0.4'
          )
          .from(
            split.chars,
            {
              y: 100,
              duration: 0.8,
              stagger: 0.03,
              ease: 'power2.out',
            },
            '-=0.4'
          )
          .from(
            boxes,
            {
              y: 100,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power2.out',
            },
            '-=0.4'
          ),
      });
      // ScrollTrigger.create({
      //   trigger: continueScrolling.current,
      //   markers: true,
      //   start: 'top 20%',
      //   end: 'bottom top',
      //   toggleActions: 'play none none reverse',

      //   onEnter: () => {
      //     console.log('entered');
      //   },
      //   animation: gsap.timeline().to(containerRef.current, {
      //     y: -600,
      //     duration: 0.8,
      //     ease: 'power2.out',
      //   }),
      // });
    },
    { scope: containerRef }
  );

  return (
    <div className={styles.CardContainer} ref={containerRef}>
      <div className={styles.Card} ref={cardRef}>
        <div className={styles.OverflowContainer}>
          <div className={styles.TitleContainer} ref={firstTitleRef}>
            <h1 ref={textRef}>
              Who am i? <span>→</span>
            </h1>
          </div>
        </div>
        <div className={styles.InfoContainer}>
          <div className={styles.OverflowContainer}>
            <div className={styles.InfoLine} ref={firstBox}>
              <div className={styles.InfoCell}>
                <p>Name:</p>
                <h2>Carlo Ettisberger</h2>
              </div>

              <div className={styles.InfoCell}>
                <p>Birthday:</p>
                <h2>20.12.1990</h2>
              </div>
            </div>
          </div>
          <div className={styles.OverflowContainer}>
            <div className={styles.InfoLine} ref={secondBox}>
              <div className={styles.InfoCell}>
                <p>Location:</p>
                <h2>Zurich</h2>
              </div>
              <div className={styles.InfoCell}>
                <p>Occupation:</p>
                <h2>Web Developer</h2>
              </div>
            </div>
          </div>
          <div className={styles.OverflowContainer}>
            <div className={styles.InfoLine} ref={thirdBox}>
              <div className={styles.InfoCell}>
                <h2>
                  For the past two years, I have been diligently self-educating
                  to become a dependable web developer and web designer.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
