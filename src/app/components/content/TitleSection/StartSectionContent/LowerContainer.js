import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './LowerContainer.module.css';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function LowerContainer({ secondContainer }) {
  const textRef = useRef();

  useGSAP(() => {
    if (!textRef.current || !secondContainer.current) return;

    const split = new SplitText(textRef.current, { type: 'chars' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: secondContainer.current,
        pin: true,
        scrub: 0.8,
        // markers: true,
        start: 'top 60%',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      split.chars,
      { y: -200, opacity: 1 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'circ.out', stagger: -0.02 }
    ).to(
      split.chars,
      {
        overflow: 'normal',
        y: -200,
        duration: 0.8,
        stagger: 0.02,
      },
      '+=0.5'
    );

    return () => {
      split.revert();
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.LowerContainer}>
      <div className={styles.LowerContent} ref={secondContainer}>
        <h1 ref={textRef}>
          I would like to <br /> work for you
        </h1>
      </div>
    </div>
  );
}
