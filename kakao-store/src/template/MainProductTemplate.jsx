import { Suspense, useEffect, useState, useRef } from "react";
import Container from "../components/atoms/Container";
import ProductGrid from "../components/organisms/Product.Grid";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../store/slices/productSlice";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);
  // const { products, loading, error } = useSelector((state) => state.product);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.isIntersecting && !isEnd) {
          setPage((page) => page + 1);
        }
      });
    },
    { threshold: 1 }
  );

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    dispatch(getProduct(page));
  }, [dispatch, page]);

  return (
    <Container className={"product-section"}>
      <Suspense fallback={<div>Loading...</div>}>
        {loading && <p>Loading...</p>}
        {error && <p>에러 발생!</p>}
        <ProductGrid products={products} />
        <div ref={bottomObserver}></div>
      </Suspense>
    </Container>
  );
};

export default MainProductTemplate;
