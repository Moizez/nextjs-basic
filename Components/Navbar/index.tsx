import Link from "next/link";
import styles from "./Navbar.module.css";
import { navigationsLinks } from "../../constants/navData";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const checkLink = (link: string) => {
    if (link === "/" && router.pathname !== "/") return null;
    if (router.pathname.indexOf(link) === 0) return styles.linkActive;
    return null;
  };

  return (
    <ul className={styles.container}>
      {navigationsLinks.map((item, index) => (
        <li
          key={index}
          className={[styles.link, checkLink(item.path)].join(" ")}
        >
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
