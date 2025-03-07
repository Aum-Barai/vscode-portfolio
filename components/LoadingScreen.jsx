import { useEffect, useState } from 'react';
import styles from '../styles/LoadingScreen.module.css';

const LoadingScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [text, setText] = useState('Loading dependencies...');

  // Loading text phrases in sequence
  const loadingTexts = [
    'Loading dependencies...',
    'Starting development server...',
    'Compiling modules...',
    'Initializing VS Code theme...',
    'Building UI components...'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 10);

    let textIndex = 0;
    // Change text every 800ms
    const intervalId = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length;
      setText(loadingTexts[textIndex]);
    }, 800);

    // After 3.2 seconds, finish loading
    const loadingTimeout = setTimeout(() => {
      finishLoading();
    }, 3200);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalId);
      clearTimeout(loadingTimeout);
    };
  }, [finishLoading]);

  return (
    <div className={`${styles.loading} ${isMounted ? styles.loaded : ''}`}>
      <div className={styles.loadingContent}>
        <div className={styles.logo}>
          <img src="/vscode_icon.svg" alt="VS Code Logo" />
        </div>
        <div className={styles.loadingText}>
          <p>{text}</p>
        </div>
        <div className={styles.loadingBar}>
          <div className={styles.loadingProgress}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 