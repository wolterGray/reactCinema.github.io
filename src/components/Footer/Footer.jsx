import React from "react";
import cl from "./footer.module.scss";
import Logo from "../logo/Logo";
import Container from "../container/Container";

function Footer() {
  return (
    <footer className={cl.wrapper}>
      <Container>
        <nav className={cl.nav}>
          <Logo />
          <div className={cl.copyRite}>
            <p>© React Cinema 2024</p>
            <p>Create by Wolter Gray</p>
          </div>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
