import "./menuCard.css"

function MenuCard(props) {
  return (
    <div class="menu-card">
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
      <span>{props.price}</span>
      <a href="#">Comprar</a>
    </div>
  );
}

export default MenuCard;
