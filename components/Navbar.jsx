import styles from "../styles/Home.module.css";
import Link from 'next/Link';

export default function Navbar() {
  return ( 
    <nav className={styles.nav}>
      <Link href="/" className={styles.sitetitle}>Seans Sparkies</Link>
      <ul>
        <li className={styles.active}>
          <Link href="/Roadmap">Roadmap</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
      </ul>
    </nav>
  )
}