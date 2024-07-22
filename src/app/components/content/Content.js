'use client';
import React, { useRef, useEffect, useState } from 'react';
import styles from './Content.module.css';

// section imports
import AboutSection from './AboutSection/AboutSection';
import StartSection from './TitleSection/StartSection';
import SkillSection from './SkillSection/SkillSection';
import WorkSection from './WorkSection/WorkSection';
import ContactSection from './ContactSection/ContactSection';

//gsap imports
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollSmoother from 'gsap/ScrollSmoother';

// varia imports
import { isMobileStore } from '../../../../stores/isMobileStore';
import SquareSvg from './TitleSection/svgContents/SquareSvg';
import AnotherSquareSvg from './TitleSection/svgContents/AnotherSquareSvg';
import CubeSvg from './TitleSection/svgContents/CubeSvg';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import intersectionStore from '../../../../stores/intersection';
import { useStore } from 'zustand';

gsap.registerPlugin(useGSAP, ScrollSmoother);

export default function Content() {
  //stores
  const setIsMobile = isMobileStore().setIsMobile;
  const isMobile = isMobileStore().isMobile;

  const { currentSection, setCurrentSection } = useStore(intersectionStore);

  // refs
  const secondContainer = useRef();
  const containerRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, setIsMobile]);

  useGSAP(() => {
    gsap.to(window, { duration: 0, scrollTo: 0 });
  });

  const intersectionFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        setCurrentSection(id);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0px',
    treshold: 0.2,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionFunction, options);

    const sections = document.querySelectorAll(
      '#home, #about, #work, #contact'
    ); // Add more section IDs as needed
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    console.log('Current section:', currentSection);
  }, [currentSection]);

  return (
    <ReactLenis className={styles.Main}>
      {isMobile ? (
        <section className={styles.Mobile}>
          <h1>Only on wider screens available!</h1>
        </section>
      ) : (
        <section ref={containerRef} id="container">
          <div ref={homeRef} id="home">
            <AnotherSquareSvg />
            <SquareSvg />
            <CubeSvg />
            <StartSection
              styles={styles}
              isMobile={isMobile}
              secondContainer={secondContainer}
            />
          </div>
          <div ref={aboutRef} id="about">
            <AboutSection isMobile={isMobile} />
            <SkillSection isMobile={isMobile} />
          </div>
          <div id="work">
            <WorkSection isMobile={isMobile} />
          </div>
          <div id="contact">
            <ContactSection isMobile={isMobile} />
          </div>
        </section>
      )}
    </ReactLenis>
  );
}
