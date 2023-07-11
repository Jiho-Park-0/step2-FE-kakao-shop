import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetail } from "../store/slices/detailSlice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {/* loading state 
      error state */}
      <h1>ProductDetailPage</h1>
    </div>
  );
};

export default ProductDetailPage;
