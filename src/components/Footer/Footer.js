import "./footer.css"

import Logo from "../../assets/shared/logo.png";
import Facebook from "../../assets/shared/facebook.png";
import Instagram from "../../assets/shared/instagram.png";
import Twitter from "../../assets/shared/twitter.png";

const LINKS = ["Inicio", "Nosotros", "Menu", "Tienda"];

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
      <img src={Logo} alt="Pizza Paradise Logo" width="120" height="120" />

      <ul class="footer-links">
        {LINKS.map((link) => {
          return (
            <li>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>

      <ul class="footer-socials">
        {SOCIALS.map((social) => {
          return (
            <li>
              <a href="#">
                <img
                  src={social.src}
                  alt={social.alt}
                  width="21"
                  height="21"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
