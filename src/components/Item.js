import React, {useState} from "react";

function Item({ name, category }) {

const [isInTHeCart, setisInTHeCart] = useState(false)

  function handleInCartClick() {
    setisInTHeCart((isInTHeCart) => !isInTHeCart);
  }

  const ItemClass = isInTHeCart ? "in-cart" : "";
  return (
    <li className={ItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInCartClick}>{isInTHeCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
