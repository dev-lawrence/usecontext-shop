import { useState, useEffect, useContext } from 'react';
import CartContext from '../CartContext';

const CartItem = ({ product }) => {
  const { id, name, image, price } = product;

  const [quantity, setQuantity] = useState(1);
  const { products } = useContext(CartContext);

  useEffect(() => {
    const cartProduct = products.find((product) => product.id === id);
    if (cartProduct) {
      setQuantity(cartProduct.quantity);
    }
  }, [products, id]);

  const calculatePrice = (quantity) => {
    return quantity * price;
  };

  return (
    <>
      <div className="cart-products-product">
        <img src={image} alt={name} />
        <div className="cart-products-details">
          <div className="flex">
            <h5 className="name">{name}</h5>
          </div>

          <h4 className="price">${calculatePrice(quantity, price)}</h4>
        </div>
      </div>
    </>
  );
};

export default CartItem;
