import { useEffect, useState } from 'react';
import styles from '../styles/LoadingScreen.module.css';

const LoadingScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [text, setText] = useState('Initializing...');
  const [progress, setProgress] = useState(0);

  // Loading text phrases in sequence - more detailed and VSCode-like
  const loadingTexts = [
    'Initializing...',
    'Loading dependencies...',
    'Starting development server...',
    'Checking extensions...',
    'Compiling modules...',
    'Initializing VS Code theme...',
    'Building UI components...',
    'Parsing files...',
    'Loading syntax highlighting...',
    'Setting up workspace...',
    'Preparing environment...',
    'Almost ready...'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 10);

    // Text animation - change every 650ms for more text changes
    let textIndex = 0;
    const intervalId = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length;
      setText(loadingTexts[textIndex]);
      
      // Update progress percentage
      setProgress(Math.min(100, Math.round((textIndex / (loadingTexts.length - 1)) * 100)));
    }, 650);

    // After 7 seconds, finish loading - much longer loading time
    const loadingTimeout = setTimeout(() => {
      finishLoading();
    }, 7000);

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
          <span className={styles.progressText}>{progress}%</span>
        </div>
        <div className={styles.loadingBar}>
          <div 
            className={styles.loadingProgress} 
            style={{ 
              width: `${progress}%`,
              animation: progress >= 100 ? 'none' : undefined,
              left: progress >= 100 ? '0' : undefined
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 