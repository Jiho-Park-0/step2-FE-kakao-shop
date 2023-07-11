import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products }) => {
  //loading state

  //error state

  //presentation state
  return (
    <div className="product-grid m-4 grid w-full max-w-full grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
