import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products }) => {
  //loading state

  //error state

  //presentation state
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
