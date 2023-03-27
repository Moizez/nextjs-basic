import { ReactElement } from "react";
import styles from "./Layout.module.css";
import Navbar from "../Navbar";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Meu Header</h1>
      </header>
      <Navbar />

      <main>{children}</main>

      <footer className={styles.footer}>Todos os direitos reservados</footer>
    </div>
  );
};

export default Layout;
