import { useVariationsQuery } from "../utils/useVariationsQuery"; // ✅ import query hook
import { Hero, FeaturedProducts, Loading } from "../components";

// Landing component that uses the loader data
const Landing = () => {
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
      <Hero />
      <FeaturedProducts products={data.slice(0, 3)} />
    </>
  );
};

export default Landing;
