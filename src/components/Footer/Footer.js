import { Link } from "react-router-dom";
import "./footer.css";

import Logo from "../../assets/shared/logo.png";
import Facebook from "../../assets/shared/facebook.png";
import Instagram from "../../assets/shared/instagram.png";
import Twitter from "../../assets/shared/twitter.png";

const LINKS = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "Nosotros" },
  { name: "Menu", path: "Menu" },
  { name: "Tienda", path: "Tienda" },
];

const SOCIALS = [
  {
    src: Facebook,
    alt: "facebook icon",
  },
  {
    src: Instagram,
    alt: "instagram icon",
  },
  {
    src: Twitter,
    alt: "twitter icon",
  },
];

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={Logo} alt="Pizza Paradise Logo" width="120" height="120" />
      </Link>

      <ul class="footer-links">
        {LINKS.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <ul class="footer-socials">
        {SOCIALS.map((social) => {
          return (
            <li>
              <a href="#">
                <img src={social.src} alt={social.alt} width="21" height="21" />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
