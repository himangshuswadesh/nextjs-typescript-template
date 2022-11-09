import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import styles from './navlink.module.scss';
type NavLInkProps = {
  children: ReactNode;
  href: string;
  exact?: boolean;
};

const NavLink = ({ children, href, exact }: NavLInkProps) => {
  const router = useRouter();
  const isActive = exact
    ? router?.pathname === href
    : router?.pathname.startsWith(href);

  return (
    <Link href={href}>
      <a className={`${styles.navLink} ${isActive ? styles.active : null}`}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
