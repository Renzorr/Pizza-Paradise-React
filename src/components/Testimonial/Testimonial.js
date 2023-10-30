import Quote from "../../assets/inicio/quote.png";

import "./testimonial.css";

function Testimonial(props) {
  return (
    <article class="testimonial-card">
      <p>"{props.content}"</p>
      <div class="testimonial-bottom">
        <div class="testimonial-profile">
          <picture>
            <img
              src={props.avatar}
              alt={props.avatar}
              loading="lazy"
              width="50"
              height="50"
            />
          </picture>
          <span>{props.name}</span>
        </div>
        <img src={Quote} alt="" aria-hidden="true" width="24" height="24" />
      </div>
    </article>
  );
}

export default Testimonial;
