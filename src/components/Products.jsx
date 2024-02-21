import data from '../../data/data';
import Card from './Card';

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="product">
          {data.products.map((product) => (
            <div key={product.id}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
