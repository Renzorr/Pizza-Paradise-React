import "./testimonialContainer.css"

import Avatar from "../../../assets/inicio/avatar.png";

import Testimonial from "../../../components/Testimonial/Testimonial"

const TESTIMONIALS = [
  {
    avatar: Avatar,
    name: "Mauricio Lopez",
    content:
      "¡Increíble experiencia en este restaurante de pizza! La masa era perfectamente crujiente y los ingredientes frescos hicieron que cada bocado fuera delicioso. El ambiente acogedor y el servicio amable complementaron perfectamente la deliciosa comida. ¡Volveré seguro y lo recomendaré a todos mis amigos y familiares amantes de la buena comida!",
  },
  {
    avatar: Avatar,
    name: "Mauricio Lopez",
    content:
      "¡Increíble experiencia en este restaurante de pizza! La masa era perfectamente crujiente y los ingredientes frescos hicieron que cada bocado fuera delicioso. El ambiente acogedor y el servicio amable complementaron perfectamente la deliciosa comida. ¡Volveré seguro y lo recomendaré a todos mis amigos y familiares amantes de la buena comida!",
  },
  {
    avatar: Avatar,
    name: "Mauricio Lopez",
    content:
      "¡Increíble experiencia en este restaurante de pizza! La masa era perfectamente crujiente y los ingredientes frescos hicieron que cada bocado fuera delicioso. El ambiente acogedor y el servicio amable complementaron perfectamente la deliciosa comida. ¡Volveré seguro y lo recomendaré a todos mis amigos y familiares amantes de la buena comida!",
  },
  {
    avatar: Avatar,
    name: "Mauricio Lopez",
    content:
      "¡Increíble experiencia en este restaurante de pizza! La masa era perfectamente crujiente y los ingredientes frescos hicieron que cada bocado fuera delicioso. El ambiente acogedor y el servicio amable complementaron perfectamente la deliciosa comida. ¡Volveré seguro y lo recomendaré a todos mis amigos y familiares amantes de la buena comida!",
  }
  
];

function TestimonialContainer() {
  return (
    <section class="container testimonials">
      <h2>Testimonios</h2>
      <div class="testimonial-grid">
        {TESTIMONIALS.map((element) => {
          return (
           <Testimonial 
            name={element.name}
            avatar={element.avatar}
            content={element.content}
           />
          );
        })}
      </div>
    </section>
  );
}

export default TestimonialContainer;
