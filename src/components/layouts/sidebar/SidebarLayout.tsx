import Link from 'next/link';
import { FC } from 'react';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
