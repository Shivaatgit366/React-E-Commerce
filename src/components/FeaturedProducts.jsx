import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = ({ products }) => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </div>
  );
};

export default FeaturedProducts;
