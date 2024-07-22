import React, { useEffect, useRef } from 'react';
import UpperContainer from './StartSectionContent/UpperContainer';
import LowerContainer from './StartSectionContent/LowerContainer';

export default function StartSection({ styles, isMobile, secondContainer }) {
  const containerRef = useRef();
  return (
    <>
      <div className={styles.TitleContainer} ref={containerRef}>
        <UpperContainer
          styles={styles}
          containerRef={containerRef}
          isMobile={isMobile}
        />
      </div>
      <div>
        <LowerContainer
          styles={styles}
          secondContainer={secondContainer}
          isMobile={isMobile}
        />
      </div>
    </>
  );
}
