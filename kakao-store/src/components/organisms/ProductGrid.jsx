import ProductCard from "../molecules/ProductCard";
import Skeleton from "react-loading-skeleton";

const ProductGrid = ({ products }) => {
  //loading state
  //error state
  //presentation state
  return (
    <div className="product-grid m-4 grid w-full max-w-full grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

// grid는 명시적으로 행과 열을 나눌때

// flex는 유동적으로 바뀌어야 할때

// fr 비율
