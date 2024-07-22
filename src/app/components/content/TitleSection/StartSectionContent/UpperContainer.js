import React, { useEffect, useRef } from 'react';
import TitleSection from './UpperContainerContent/TitleSection';
import RightTitleSection from './UpperContainerContent/RightTitleSection';
import Arrow from './UpperContainerContent/Arrow';
import styles from './UpperContainer.module.css';

export default function UpperContainer({ isMobile }) {
  const containerRef = useRef();
  return (
    <div className={styles.UpperContainerSection}>
      <TitleSection
        styles={styles}
        containerRef={containerRef}
        isMobile={isMobile}
      />
      <Arrow styles={styles} isMobile={isMobile} containerRef={containerRef} />
      <RightTitleSection
        styles={styles}
        containerRef={containerRef}
        isMobile={isMobile}
      />
    </div>
  );
}
