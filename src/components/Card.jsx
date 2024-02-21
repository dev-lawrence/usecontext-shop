import { useContext } from 'react';
import CartContext from '../CartContext';

const Card = ({ product }) => {
  const { id, image, name, price } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <img src={image} alt={name} />
      <div className="d-flex">
        <div className="title">
          <h3>{name}</h3>
          <p>${price}</p>
        </div>

        <div onClick={() => addToCart(id, name, price, image)} className="bag">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
