import {
  Filters,
  PaginationContainer,
  ProductsContainer,
  Loading,
} from "../components";
import { useVariationsQuery } from "../utils/useVariationsQuery"; // ✅ import query hook

const Products = () => {
  const { data, isLoading, isError, error } = useVariationsQuery();
  console.log("ProductsContainer rendered with products:", data);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <Filters />
      <ProductsContainer products={data} />
      <PaginationContainer />
    </>
  );
};

export default Products;
