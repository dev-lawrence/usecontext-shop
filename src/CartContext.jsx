import { useState, createContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addToCart = (id, name, price, image) => {
    const existingProduct = products.find((product) => product.id === id);
    if (existingProduct) {
      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setProducts(updatedProducts);
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { id, name, price, image, quantity: 1 },
      ]);
    }
  };

  // Providing the cart state and related functions to the components through context
  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
