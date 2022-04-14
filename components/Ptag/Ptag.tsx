import React from 'react';
import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';


function Ptag({size = 'm', children , ...props}:PtagProps): JSX.Element {
    switch(size){
      case 's':
          return <p className={styles.s} {...props}>{children}</p>;
      case 'm':
          return <p className={styles.m} {...props}>{children}</p>;
      case 'l':
          return <p className={styles.l} {...props}>{children}</p>;
      default:
          return <></>;
  }
}

export default Ptag;