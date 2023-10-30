import "./hero.css";


import HeroImg from "../../../assets/inicio/hero-img.png";


function Hero() {
  return (
    <main class="hero container">
      <h1>
        Para los verdaderos <span>Pizza Lovers</span>
      </h1>
      <p>
        ¡Cada ubicación está abierta y sirve solo los mejores ingredientes! ¡Con
        ingredientes 100% naturales, no hay nada mejor que la mejor porción de
        pizza!
      </p>
      <img
        src={HeroImg}
        alt="Pizza Americana"
        width="1200"
        height="700"
      />
    </main>
  );
}

export default Hero;