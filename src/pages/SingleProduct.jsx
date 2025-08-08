import { useSingleVariationQuery } from "../utils/useVariationsQuery";
import { formatPrice, generateAmountOptions } from "../utils";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../components";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useSingleVariationQuery(id);

  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) return <h2>Error: {error.message}</h2>;

  // ✅ Only destructure after successful data fetch
  const {
    title,
    description,
    company,
    supplier_showcase_price,
    variant_images,
  } = data;

  const formattedPrice = formatPrice(supplier_showcase_price);

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={variant_images?.[0].zoom_url}
          alt={title}
          className="h-96 w-96 rounded-lg object-contain lg:w-full"
        />

        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl font-bold text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">{formattedPrice}</p>
          <p className="mt-6 leading-8">{description}</p>

          {/* AMOUNT */}
          <div className="form-control mt-6 w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium capitalize tracking-wider">
                quntity
              </h4>
            </label>
            <select
              className="select select-bordered select-secondary select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>

          {/* CART BUTTON */}
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => console.log("add to bag")}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
