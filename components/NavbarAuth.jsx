import styles from "../styles/Home.module.css";
import Link from 'next/Link';

export default function NavbarAuth() {
  return ( 
    <nav className={styles.nav}>
      <Link href="/" className={styles.sitetitle}>AUTHED NAVBAR</Link>
      <ul>
        <li className={styles.active}>
          <Link href="/MembersOnly">MembersOnly</Link>
        </li>
      </ul>
    </nav>
  )
}