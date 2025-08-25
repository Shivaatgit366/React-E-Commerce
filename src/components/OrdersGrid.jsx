import { Link } from "react-router-dom";
import { formatPrice } from "../utils";

// const OrdersGrid = ({ orders = [] }) => {
//   console.log("OrdersGrid rendered with orders:", orders);
//   return (
//     <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
//       {orders.map((order) => {
//         const {
//           id,
//           title,
//           description,
//           supplier_showcase_price,
//           variant_images,
//         } = product;
//         const image = variant_images?.[0]?.zoom_url;
//         const formattedPrice = formatPrice(supplier_showcase_price);

//         return (
//           <Link
//             key={id}
//             to={`/products/${id}`}
//             className="card w-full shadow-xl transition duration-300 hover:shadow-2xl"
//           >
//             <figure className="px-4 pt-4">
//               {image ? (
//                 <img
//                   src={image}
//                   alt={title}
//                   className="h-64 w-full rounded-xl object-contain md:h-48"
//                 />
//               ) : (
//                 <div className="flex h-64 w-full items-center justify-center rounded-xl bg-base-200 md:h-48">
//                   <span className="text-sm text-gray-500">No image</span>
//                 </div>
//               )}
//             </figure>
//             <div className="card-body items-center text-center">
//               <h2 className="card-title capitalize tracking-wider">{title}</h2>
//               <p className="text-sm text-gray-500">{description}</p>
//               {
//                 <span className="mt-2 text-lg font-semibold text-secondary">
//                   {formattedPrice}
//                 </span>
//               }
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

const OrdersGrid = ({ orders = [] }) => {
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {orders.map((diamond) => {
        const {
          _id,
          shape,
          carat,
          clarity,
          color,
          cut,
          image_url,
          video_url,
          our_price,
          certificate_num,
          lab,
        } = diamond;

        // formatted price
        const formattedPrice = formatPrice(our_price);

        // build description
        const description = `${carat}ct | ${color} | ${clarity} | ${cut}`;

        return (
          <Link
            key={_id}
            to={`/diamonds/${_id}`}
            className="card w-full shadow-xl transition duration-300 hover:shadow-2xl"
          >
            <figure className="px-4 pt-4">
              {/* video iframe */}
              <iframe
                src={video_url}
                allow="autoplay"
                loading="lazy"
                className="h-64 w-full rounded-xl object-contain md:h-48"
                style={{ border: "none" }}
              ></iframe>

              {/* static image */}
              {/* {image_url ? (
                <img
                  src={image_url}
                  alt={`${shape} Diamond`}
                  className="h-64 w-full rounded-xl object-contain md:h-48"
                />
              ) : (
                <div className="flex h-64 w-full items-center justify-center rounded-xl bg-base-200 md:h-48">
                  <span className="text-sm text-gray-500">No image</span>
                </div>
              )} */}
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">
                {shape} ({lab} - {certificate_num})
              </h2>
              <p className="text-sm text-gray-500">{description}</p>
              <span className="mt-2 text-lg font-semibold text-secondary">
                {formattedPrice}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default OrdersGrid;
