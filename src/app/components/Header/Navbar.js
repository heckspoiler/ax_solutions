'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { useStore } from 'zustand';
import intersectionStore from '../../../../stores/intersection';

gsap.registerPlugin(useGSAP, SplitText);

export default function Navbar() {
  const { currentSection } = useStore(intersectionStore);
  const listRef = useRef(null);
  const listItemsRef = useRef([]);

  useGSAP(() => {
    // Initial setup
    gsap.set(listItemsRef.current, { y: 0, opacity: 1 });
  }, []);

  useGSAP(() => {
    const listItems = listItemsRef.current;

    if (currentSection === 'home') {
      gsap.to(listItems, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else if (currentSection === 'about') {
      gsap.to(listItems, {
        y: -32,

        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else if (currentSection === 'work') {
      gsap.to(listItems, {
        y: -64,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else if (currentSection === 'contact') {
      gsap.to(listItems, {
        y: -96,

        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [currentSection]);

  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <ul ref={listRef} id="list">
          {['Hello!', 'About', 'Work', 'Contact'].map((item, index) => (
            <li key={item} ref={(el) => (listItemsRef.current[index] = el)}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
