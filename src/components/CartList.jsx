import { useContext } from 'react';
import CartContext from '../CartContext';
import CartItem from './CartItem';

const CartList = ({ cartClick, handleCartClick }) => {
  const { products } = useContext(CartContext);

  const cartNotEmpty = Array.isArray(products) && products.length !== 0;

  return (
    <>
      <div className={`cart-container ${cartClick ? 'showCart' : ''}`}>
        <div className="cart">
          <button className="close" onClick={handleCartClick}>
            <span>Back to store 🛒</span>
          </button>
          <div className="content">
            <div className="cart-products">
              {cartNotEmpty ? (
                products.map((product) => (
                  <div key={product.id}>
                    <CartItem product={product} />
                  </div>
                ))
              ) : (
                <p>Empty Cart</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
