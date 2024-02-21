import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartList from './CartList';
import CartContext from '../CartContext';

const Header = () => {
  const [cartClick, setCartClick] = useState(false);
  const { products } = useContext(CartContext);

  // Function to open the cart list
  const handleCartClick = () => {
    setCartClick(!cartClick);
  };

  return (
    <>
      <header id="header-section">
        <div className="container">
          <div className="content d-flex">
            {/* Logo */}
            <Link to="/" className="logo">
              Shopy
            </Link>

            {/* Cart button */}
            <button className="toggle-cart icon-btn" onClick={handleCartClick}>
              <i className="fa-solid fa-bag-shopping"></i>
              <span>{products.length}</span>
            </button>
          </div>

          {/* Cart list */}
          <CartList cartClick={cartClick} handleCartClick={handleCartClick} />
        </div>
      </header>
    </>
  );
};

export default Header;
