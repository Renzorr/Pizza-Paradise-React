import "./menu.css";
import MenuCard from "../../../components/MenuCard/MenuCard";
import Pizza from "../../../assets/shared/pizza.jpg";

const PiZZASCARD = [
  {
    img: Pizza,
    name: "Pizza Americana",
    price: "S/.50.00",
  },
  {
    img: Pizza,
    name: "Pizza Americana",
    price: "S/.50.00",
  },
  {
    img: Pizza,
    name: "Pizza Americana",
    price: "S/.50.00",
  },
  {
    img: Pizza,
    name: "Pizza Americana",
    price: "S/.50.00",
  },
];

function Menu() {
  return (
    <section class="container menu">
      <div class="menu-top">
        <h2>Menu</h2>
        <a href="#" class="button">
          Ver más
        </a>
      </div>
      <div class="menu-container">
        {PiZZASCARD.map((card) => {
          return (
            <MenuCard img={card.img} name={card.name} price={card.price} />
          );
        })}
      </div>
    </section>
  );
}

export default Menu;
