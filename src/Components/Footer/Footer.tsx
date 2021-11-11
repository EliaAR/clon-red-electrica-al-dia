import { FooterSection1 } from "./FooterSection1";
import { FooterSection2 } from "./FooterSection2";
import "./footerSection1.scss";
import "./footerSection2.scss";

function Footer() {
  return (
    <footer className="footer">
      <FooterSection1 />
      <FooterSection2 />
    </footer>
  );
}

export { Footer };
