'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import SplitText from 'gsap/SplitText';
import { workObject } from './WorkObject/WorkObject';
import styles from './WorkSection.module.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

export default function WorkSection({ isMobile }) {
  const containerRef = useRef();
  const testRefs = useRef([]);
  const containerWrapper = useRef();
  const titleRef = useRef();

  useGSAP(() => {
    if (
      !containerRef.current ||
      !containerWrapper.current ||
      !titleRef.current
    ) {
      return;
    }

    function amountToScroll() {
      let containerWidth = containerWrapper.current.scrollWidth;
      return -(containerWidth - window.innerWidth);
    }

    const split = new SplitText(titleRef.current, { type: 'chars' });

    const titleTrigger = gsap.from(split.chars, {
      y: 100,
      stagger: 0.02,
      ease: 'power2.out',
    });

    const tween = gsap.to(containerRef.current, {
      x: amountToScroll,
      duration: 3,
      ease: 'none',
    });

    const boxTrigger = gsap.from(testRefs.current, {
      y: 100,
      opacity: 0,
      stagger: 0.02,
      ease: 'power2.out',
    });

    ScrollTrigger.create({
      trigger: containerWrapper.current,
      // markers: true,
      start: 'top 30%',
      end: 'bottom top',
      animation: boxTrigger,
    });

    ScrollTrigger.create({
      trigger: containerWrapper.current,
      // markers: true,
      start: 'top 30%',
      end: 'bottom top',
      animation: titleTrigger,
    });

    ScrollTrigger.create({
      trigger: containerWrapper.current,
      start: 'top top',
      end: () => `+=${amountToScroll() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      // markers: true,
    });
  }, []);

  return (
    <div className={styles.Main} ref={containerWrapper}>
      <div className={styles.TitleContainer}>
        <h1 ref={titleRef}>Selected Projects</h1>
      </div>
      <div className={styles.Portal} ref={containerRef}>
        <div className={styles.Container}>
          {workObject.map((element, i) => (
            <div
              key={element.id}
              className={styles.TestCurb}
              ref={(el) => (testRefs.current[i] = el)}
            >
              <Image
                src={element.imageUrl}
                height={240}
                width={452}
                alt={element.altText}
              />
              <div className={styles.ProjectTitleContainer}>
                <h2>{element.title}</h2>
                <h3>{element.description}</h3>
              </div>
              <div className={styles.Technologies}>
                {element.technologies.map((tech, index) => (
                  <div
                    key={`${element.id || index}-tech-${index}`}
                    className={styles.TechnologyContainer}
                  >
                    {' '}
                    <p
                      key={element.technologies.index}
                      className={styles.Technology}
                    >
                      {tech}
                    </p>
                    {index !== element.technologies.length - 1 ? (
                      <div></div>
                    ) : (
                      ''
                    )}
                  </div>
                ))}
              </div>
              <a href={element.url} target="_blank">
                Link to Project <span className={styles.ArrowContainer}>↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
