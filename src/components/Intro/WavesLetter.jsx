// MyComponent.js

import React from 'react';
import styles from './WavesLetter.module.css';

const WavesLetter = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.loading} ${styles.wave}`} style={{ backgroundColor: 'lightblue' }}>Welcome, are you ready?</div>
      <div className={`${styles.loading} ${styles.loading2} ${styles.wave2}`}>
        <div className={styles.loading2Text}></div>
      </div>
    </div>
  );
};

export default WavesLetter;
