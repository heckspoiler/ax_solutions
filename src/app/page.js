import React from 'react';
import styles from './page.module.css';

// components import
import Scene from './components/three/Scene';
import Content from './components/content/Content';

export default function Home() {
  return (
    <main className={styles.main}>
      <Scene />
      <Content />
    </main>
  );
}
