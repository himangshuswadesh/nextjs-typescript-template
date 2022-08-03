import Link from 'next/link';
import styles from './header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <h2>Nextjs Template</h2>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a className={styles.navLink}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className={styles.navLink}>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
