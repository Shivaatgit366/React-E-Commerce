import { Link } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = ({ products = [] }) => {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const {
          id,
          title,
          description,
          supplier_showcase_price,
          variant_images,
        } = product;

        const image = variant_images?.[0]?.zoom_url;
        const formattedPrice = formatPrice(supplier_showcase_price);

        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="group flex flex-col flex-wrap gap-y-4 rounded-lg bg-base-100 p-8 shadow-xl duration-300 hover:shadow-2xl sm:flex-row"
          >
            {image ? (
              <img
                src={image}
                alt={title}
                className="h-24 w-24 rounded-lg object-cover transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-base-200 text-gray-500 sm:h-32 sm:w-32">
                No image
              </div>
            )}

            <div className="ml-0 sm:ml-16">
              <h3 className="text-lg font-medium capitalize">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>

            <p className="ml-0 text-lg font-medium sm:ml-auto">
              {formattedPrice}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
