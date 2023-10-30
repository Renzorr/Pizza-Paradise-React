import ShopImage from "../../../assets/inicio/tiendas.png";

import "./shopscontainer.css";
import Shop from "../../../components/Shop/Shop";

const SHOPS = [
  {
    img: ShopImage,
    place: "Surco",
    direction: "Av. Alfredo Benavides 2320",
  },
  {
    img: ShopImage,
    place: "Surco",
    direction: "Av. Alfredo Benavides 2320",
  },
  {
    img: ShopImage,
    place: "Surco",
    direction: "Av. Alfredo Benavides 2320",
  },
];

function ShopsContainer() {
  return (
    <section class="container shops">
      <h2>
        Nuestras <span>Tiendas</span>
      </h2>
      <div class="shop-container">
        {SHOPS.map((shop) => {
          return (
            <Shop
              img={shop.img}
              place={shop.place}
              direction={shop.direction}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ShopsContainer;
