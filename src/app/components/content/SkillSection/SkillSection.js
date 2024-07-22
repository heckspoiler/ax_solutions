'use client';

import React from 'react';
import styles from './WorkSection.module.css';
import HardSkillSection from './Skills/HardSkillSection/HardSkillSection';
import SoftSkillSection from './Skills/SoftSkillSection/SoftSkillSection';

export default function SkillSection({ isMobile }) {
  return (
    <section className={styles.Main}>
      <div>
        <HardSkillSection isMobile={isMobile} />
      </div>
      <div>
        <SoftSkillSection isMobile={isMobile} />
      </div>
    </section>
  );
}
