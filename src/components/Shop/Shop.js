import "./shop.css";

function Shop(props) {
  return (
    <div class="shop-card">
      <div class="content">
        <div class="front">
          <div class="front-content">
            <img
              src={props.img}
              alt={props.place}
              width="400"
              height="300"
              loading="lazy"
            />
            <p>{props.place}</p>
          </div>
        </div>
        <div class="back">
          <p class="shop">{props.place}</p>
          <p class="direction">{props.direction}</p>
          <a href="#">Google maps</a>
        </div>
      </div>
    </div>
  );
}

export default Shop;
