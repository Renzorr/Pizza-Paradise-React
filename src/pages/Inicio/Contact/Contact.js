import ContactImg from "../../../assets/inicio/contact-img.png";

import "./contact.css";

function Contact() {
  return (
    <section class="container contact">
      <h2>Contactanos</h2>
      <div class="contact-container">
        <div class="contact-form-container">
          <form class="contact-form-grid">
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Número" required />
            <input type="email" placeholder="Email" required />
            <textarea name="" id="" placeholder="Escribe tu mensaje"></textarea>
          <button type="submit" class="button">
            Enviar
          </button>
          </form>
        </div>
        <img
          src={ContactImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width="660"
          height="600"
        />
      </div>
    </section>
  );
}

export default Contact;
