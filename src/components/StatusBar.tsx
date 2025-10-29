import React from 'react';
import styles from '../styles/StatusBar.module.scss';

interface StatusBarProps {
  className?: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.statusBar} ${className}`}>
      <div className={styles.time}>9:41</div>
      <div className={styles.statusIcons}>
        <img 
          src="/assets/cellular.svg" 
          alt="Cellular" 
          className={styles.cellular}
        />
        <img 
          src="/assets/wifi.svg" 
          alt="WiFi" 
          className={styles.wifi}
        />
        <img 
          src="/assets/battery.svg" 
          alt="Battery" 
          className={styles.battery}
        />
      </div>
    </div>
  );
};