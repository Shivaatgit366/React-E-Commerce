import {
  Filters,
  PaginationContainer,
  ProductsContainer,
  Loading,
  OrdersContainer,
} from "../components";
import { useVariationsQuery } from "../utils/useVariationsQuery";

const Orders = () => {
  // const { data, isLoading, isError, error } = useVariationsQuery();
  // console.log("ProductsContainer rendered with products:", data);

  const sampleDiamonds = [
    {
      _id: "67a48198f66354cde47a9d65",
      stock_num: "C2AB6F0B0",
      supplier_code: "L1",
      supplier_name: "nivoda",
      actual_supplier: "KJ AND COMPANY",
      shape: "Princess",
      carat: 1.5,
      clarity: "VVS2",
      color: "G",
      supplier_net_price: 198,
      cut: "Excellent",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "None",
      depth_percent: 72.2,
      table_percent: 67,
      length: 6.3,
      width: 6.25,
      depth: 4.51,
      l_w_ratio: 1.01,
      girdle: "MED to STK",
      culet_size: "POINTED",
      certificate_num: "LG668428865",
      lab: "IGI",
      origin: "",
      location: "IN",
      image_url:
        "https://nivoda-images.nivodaapi.net/d0e9b5f2-d83c-459b-893b-64e30f4e215b.jpg?d_id=f0b55dfd-9d0c-46ab-b549-b29838e37601&c_id=083df1e0-e7ce-42d4-8308-ee7f6f3d2ee7&f_id=041abdb5-9937-4632-a005-b102e430974f&type=csv",
      video_url: "https://loupe360.com/diamond/LG668428865/video/rsp/autoplay",
      our_price: 1020,
      stone_type: "L",
      ccr: 0.844,
    },
    {
      _id: "67a48198f66354cde47a9d66",
      stock_num: "4D57A1677",
      supplier_code: "L1",
      supplier_name: "nivoda",
      actual_supplier: "KJ AND COMPANY",
      shape: "Oval",
      carat: 1.05,
      clarity: "VS1",
      color: "D",
      supplier_net_price: 260.4,
      cut: "Excellent",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "None",
      depth_percent: 60.5,
      table_percent: 60,
      length: 8.23,
      width: 5.84,
      depth: 3.54,
      l_w_ratio: 1.41,
      girdle: "SLIGHTLY THICK - THIN",
      culet_size: "",
      certificate_num: "6472805288",
      lab: "GIA",
      origin: "",
      location: "IN",
      image_url:
        "https://nivoda-images.nivodaapi.net/412a782a-a9b6-4cb4-897a-ee303395712b.jpg?d_id=13582f36-5265-415a-ab28-9f4cde4e731c&c_id=083df1e0-e7ce-42d4-8308-ee7f6f3d2ee7&f_id=041abdb5-9937-4632-a005-b102e430974f&type=csv",
      video_url: "https://loupe360.com/diamond/6472805288/video/rsp/autoplay",
      our_price: 1130,
      stone_type: "L",
      ccr: 0.844,
    },
    {
      _id: "67a48198f66354cde47a9d67",
      stock_num: "EF3A87CF9",
      supplier_code: "L1",
      supplier_name: "nivoda",
      actual_supplier: "KJ AND COMPANY",
      shape: "Pear",
      carat: 1.87,
      clarity: "VVS1",
      color: "F",
      supplier_net_price: 486.2,
      cut: "Excellent",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "None",
      depth_percent: 62.4,
      table_percent: 58,
      length: 10.95,
      width: 6.94,
      depth: 4.33,
      l_w_ratio: 1.58,
      girdle: "MED to STK",
      culet_size: "POINTED",
      certificate_num: "LG668428854",
      lab: "IGI",
      origin: "",
      location: "IN",
      image_url:
        "https://nivoda-images.nivodaapi.net/3169e4d5-b4f5-424d-9009-29a5bf9f3dd7.jpg?d_id=1d6c39ef-0afd-4366-8068-a63ba453fc11&c_id=083df1e0-e7ce-42d4-8308-ee7f6f3d2ee7&f_id=041abdb5-9937-4632-a005-b102e430974f&type=csv",
      video_url: "https://loupe360.com/diamond/LG668428854/video/rsp/autoplay",
      our_price: 1550,
      stone_type: "L",
      ccr: 0.844,
    },
    {
      _id: "67a48198f66354cde47a9d68",
      stock_num: "8C183AA76",
      supplier_code: "L1",
      supplier_name: "nivoda",
      actual_supplier: "KJ AND COMPANY",
      shape: "Radiant",
      carat: 3.87,
      clarity: "VVS2",
      color: "G",
      supplier_net_price: 565.02,
      cut: "Excellent",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "None",
      depth_percent: 66.5,
      table_percent: 66,
      length: 11.54,
      width: 7.71,
      depth: 5.13,
      l_w_ratio: 1.5,
      girdle: "MED",
      culet_size: "POINTED",
      certificate_num: "LG667439873",
      lab: "IGI",
      origin: "",
      location: "IN",
      image_url:
        "https://nivoda-images.nivodaapi.net/ae9c77e0-7546-4338-9572-4d433460b5f7.jpg?d_id=1dfcfa64-7c48-4a4e-9bee-94e93944d536&c_id=083df1e0-e7ce-42d4-8308-ee7f6f3d2ee7&f_id=041abdb5-9937-4632-a005-b102e430974f&type=csv",
      video_url: "https://loupe360.com/diamond/LG667439873/video/rsp/autoplay",
      our_price: 2040,
      stone_type: "L",
      ccr: 0.844,
    },
  ];

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return <h2>Error: {error.message}</h2>;
  // }

  return (
    <>
      <OrdersContainer orders={sampleDiamonds} />
    </>
  );
};

export default Orders;
