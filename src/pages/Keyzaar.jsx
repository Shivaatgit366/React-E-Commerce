import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Keyzaar = () => {
  return (
    // Main Container:- Section for Products
    <section className="mx-auto grid max-w-[85.25rem] grid-cols-1 gap-0 md:px-5 md:pb-12 md:pt-8">
      {/* Grid Box containing 2 major columns -- Start */}
      <section className="grid grid-cols-1 items-start md:grid-cols-[1fr_31.125rem] md:gap-0 lg:mb-9 lg:gap-8 xl:gap-x-8">
        <section className="lg:rounded-4xl relative w-full overflow-hidden md:static lg:sticky lg:top-[24px] lg:z-[1] lg:bg-white">
          <div className="hidden lg:grid lg:auto-rows-fr lg:grid-cols-1 lg:gap-2 xl:grid-cols-2">
            <div className="relative mt-4 overflow-hidden rounded-2xl p-3 lg:m-0 lg:rounded-none lg:bg-white lg:p-0">
              <div className="relative overflow-hidden rounded-lg lg:rounded-none">
                <img
                  src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2105283/build/_assets/hand-with-setting-23F6JYZ6.png"
                  width="800"
                  height="800"
                  loading="eager"
                  alt="Diamond carat size hand desktop image "
                  className="fadeIn aspect-square h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2105283/build/_assets/hand-with-setting-23F6JYZ6.png"
                width="800"
                height="800"
                loading="eager"
                alt="Diamond carat size hand desktop image "
                className="fadeIn aspect-square h-full w-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2105283/build/_assets/hand-with-setting-23F6JYZ6.png"
                width="800"
                height="800"
                loading="eager"
                alt="Diamond carat size hand desktop image "
                className="fadeIn aspect-square h-full w-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2105283/build/_assets/hand-with-setting-23F6JYZ6.png"
                width="800"
                height="800"
                loading="eager"
                alt="Diamond carat size hand desktop image "
                className="fadeIn aspect-square h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <div className="relative overflow-visible bg-white">
          {/* Inside Vertical Box */}
          <div className="px-5 pb-4 pt-2.5 md:px-0 md:py-7 lg:p-0 xl:px-4">
            {/* Title Container -- start */}
            <div className="mb:4 mb-4 flex justify-between gap-4 md:mb-6 md:gap-1">
              <div>
                <h1 className="max-w-prose whitespace-normal font-semibold leading-[1.2] md:text-[1.5rem]">
                  2.51 Carat J VS2 Oval Natural Diamond
                </h1>

                <div className="mt-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <div className="text-lg font-semibold leading-none text-black md:text-[1.3125rem]">
                      $21,900
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-start gap-1">
                <svg
                  className="cpst-title-icon h-auto w-16 shrink-0"
                  viewBox="0 0 81 77"
                >
                  <svg
                    width="81"
                    height="77"
                    viewBox="0 0 81 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.4922 40.5023L31.4523 37.147C31.4227 36.7135 31.3543 36.2851 31.2763 35.859C31.2757 35.8504 31.2706 35.843 31.2703 35.8342C31.27 35.8316 31.2717 35.8288 31.2717 35.8262C31.1629 35.242 31.0217 34.6647 30.8234 34.1027C30.3768 32.8449 29.8732 31.4184 28.7931 31.3546C28.7658 31.3546 28.7407 31.3524 28.7157 31.3524C27.8042 31.3524 27.2186 32.3572 26.6991 33.2459C26.5527 33.4966 26.447 33.7671 26.3294 34.0315C25.6025 32.3176 25.1929 30.4423 25.1342 28.4804C25.5104 28.6621 25.9223 28.7798 26.3983 28.7798C26.4461 28.7798 26.494 28.7798 26.5418 28.7775C28.1323 28.7205 29.0028 27.1961 29.2876 26.6971C29.5838 26.1821 29.6659 25.8175 29.8436 25.0223C29.9097 24.7306 29.9894 24.3706 30.1034 23.908C30.2788 23.1811 30.4474 22.5636 30.5796 22.0965L33.7651 21.5496C35.408 20.9617 36.4744 19.8315 36.4858 18.674C36.5018 17.2749 35.0549 16.4067 33.7743 15.6365C33.3236 15.3665 32.852 15.1346 32.3643 14.9387C34.7455 13.4393 37.5534 12.5581 40.5692 12.5581C44.0942 12.5581 47.3368 13.7569 49.9401 15.7505H46.3979C42.8615 15.7505 39.9858 18.6261 39.9858 22.1626L41.5914 26.2499H42.8227L41.1525 22.0532C41.2117 19.2117 43.5428 16.9171 46.3979 16.9171H51.3041C53.8115 19.343 55.5008 22.6046 55.9195 26.2499H56.0511C56.5151 26.2499 56.9603 26.4342 57.2884 26.7626L57.7365 27.211C57.3115 18.0975 49.7857 10.8081 40.5692 10.8081C31.0809 10.8081 23.3608 18.5281 23.3608 28.0164C23.3608 37.5047 31.0809 45.2248 40.5692 45.2248C40.7136 45.2248 40.8534 45.2065 40.997 45.2031L38.8964 43.3386C36.1532 43.0364 33.6159 42.0506 31.4922 40.5023H31.4922ZM31.159 15.7801C31.8636 15.992 32.5467 16.2629 33.1773 16.6392C34.1844 17.2453 35.326 17.9311 35.3192 18.6626C35.3124 19.3075 34.5126 20.0435 33.4735 20.4263L29.6613 21.0688L29.5588 21.4198C29.4152 21.9165 29.1987 22.6844 28.9686 23.6323C28.8547 24.1017 28.7726 24.4686 28.7066 24.7671C28.5402 25.5054 28.4833 25.7537 28.2759 26.116C28.0685 26.4783 27.4396 27.5767 26.4985 27.6108C25.9289 27.6339 25.4974 27.4701 25.1581 27.081C25.4353 22.4836 27.7216 18.4296 31.159 15.7801V15.7801ZM27.0437 35.4853C27.2001 34.9082 27.4055 34.3488 27.7085 33.8338C27.8976 33.508 28.4741 32.519 28.718 32.519C28.718 32.519 28.7202 32.5213 28.7225 32.5213C29.0324 32.5396 29.5519 34.0093 29.7251 34.4969C30.035 35.3742 30.2242 36.2948 30.2879 37.1948L30.3147 39.5527C29.0102 38.3917 27.8965 37.0234 27.0437 35.4853L27.0437 35.4853ZM56.0512 27.9999H40.8013L33.0195 35.7821L48.4197 49.4517L63.8077 35.8049H63.808L63.8333 35.7821L56.0512 27.9999ZM41.5262 29.7499H49.7721L54.0314 35.8504L48.32 47.0232L35.5701 35.7063L41.5262 29.7499H41.5262ZM50.5528 45.2208L55.3895 35.7593L51.1962 29.7499H55.3263L61.2821 35.7057L50.5528 45.2208ZM47.6848 42.9325L39.8195 35.951L43.794 31.9762L42.3197 35.6562L47.6848 42.9325Z"
                      fill="black"
                    ></path>
                    <g>
                      <path
                        d="M27.1852 73H26.0652L20.6192 65.552V73H19.4572V63.662H20.6472L26.0232 70.956V63.662H27.1852V73ZM34.6053 73H33.5553V72.23C32.986 72.8553 32.2393 73.168 31.3153 73.168C30.69 73.168 30.1393 72.9673 29.6633 72.566C29.1873 72.1647 28.9493 71.6187 28.9493 70.928C28.9493 70.2187 29.1827 69.6727 29.6493 69.29C30.1253 68.898 30.6807 68.702 31.3153 68.702C32.2767 68.702 33.0233 69.01 33.5553 69.626V68.408C33.5553 67.96 33.3967 67.61 33.0793 67.358C32.762 67.106 32.3513 66.98 31.8473 66.98C31.054 66.98 30.3633 67.2927 29.7753 67.918L29.2853 67.19C30.004 66.4433 30.9047 66.07 31.9873 66.07C32.762 66.07 33.392 66.2567 33.8773 66.63C34.3627 67.0033 34.6053 67.5773 34.6053 68.352V73ZM31.6933 72.412C32.5333 72.412 33.154 72.132 33.5553 71.572V70.298C33.154 69.738 32.5333 69.458 31.6933 69.458C31.208 69.458 30.8067 69.598 30.4893 69.878C30.1813 70.1487 30.0273 70.5033 30.0273 70.942C30.0273 71.3713 30.1813 71.726 30.4893 72.006C30.8067 72.2767 31.208 72.412 31.6933 72.412ZM38.4182 73.168C37.9235 73.168 37.5502 73.0327 37.2982 72.762C37.0462 72.4913 36.9202 72.0993 36.9202 71.586V67.162H35.8002V66.238H36.9202V64.39H37.9702V66.238H39.3422V67.162H37.9702V71.362C37.9702 71.6233 38.0262 71.8333 38.1382 71.992C38.2595 72.1507 38.4322 72.23 38.6562 72.23C38.9642 72.23 39.2022 72.1367 39.3702 71.95L39.6782 72.734C39.3702 73.0233 38.9502 73.168 38.4182 73.168ZM46.4394 73H45.3894V72.048C45.1094 72.3653 44.7547 72.6313 44.3254 72.846C43.9054 73.0607 43.4574 73.168 42.9814 73.168C41.5441 73.168 40.8254 72.4493 40.8254 71.012V66.238H41.8754V70.69C41.8754 71.25 42.0014 71.6467 42.2534 71.88C42.5147 72.1133 42.8927 72.23 43.3874 72.23C43.7794 72.23 44.1574 72.132 44.5214 71.936C44.8947 71.74 45.1841 71.4973 45.3894 71.208V66.238H46.4394V73ZM49.5863 73H48.5363V66.238H49.5863V67.33C50.2117 66.5087 50.963 66.098 51.8403 66.098V67.176C51.7097 67.148 51.5697 67.134 51.4203 67.134C51.103 67.134 50.7577 67.246 50.3843 67.47C50.011 67.694 49.745 67.9413 49.5863 68.212V73ZM58.4354 73H57.3854V72.23C56.8161 72.8553 56.0694 73.168 55.1454 73.168C54.5201 73.168 53.9694 72.9673 53.4934 72.566C53.0174 72.1647 52.7794 71.6187 52.7794 70.928C52.7794 70.2187 53.0128 69.6727 53.4794 69.29C53.9554 68.898 54.5108 68.702 55.1454 68.702C56.1068 68.702 56.8534 69.01 57.3854 69.626V68.408C57.3854 67.96 57.2268 67.61 56.9094 67.358C56.5921 67.106 56.1814 66.98 55.6774 66.98C54.8841 66.98 54.1934 67.2927 53.6054 67.918L53.1154 67.19C53.8341 66.4433 54.7348 66.07 55.8174 66.07C56.5921 66.07 57.2221 66.2567 57.7074 66.63C58.1928 67.0033 58.4354 67.5773 58.4354 68.352V73ZM55.5234 72.412C56.3634 72.412 56.9841 72.132 57.3854 71.572V70.298C56.9841 69.738 56.3634 69.458 55.5234 69.458C55.0381 69.458 54.6368 69.598 54.3194 69.878C54.0114 70.1487 53.8574 70.5033 53.8574 70.942C53.8574 71.3713 54.0114 71.726 54.3194 72.006C54.6368 72.2767 55.0381 72.412 55.5234 72.412ZM61.5902 73H60.5402V63.662H61.5902V73Z"
                        fill="black"
                      ></path>
                    </g>
                  </svg>
                </svg>
              </div>
            </div>
            {/* Title Container -- end */}

            {/* Diamond Info Container -- start */}
            <div className="my-4 md:my-6">
              <div className="flex flex-wrap items-center justify-center text-center">
                {/* Box 1 */}
                <div class="diamond-bar-both w-1/4 px-2 md:w-1/3">
                  <p class="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold leading-[1.1] tracking-[0.02em] text-black">
                    2.51
                  </p>
                  <p class="m-0 text-[0.6875rem] leading-[1.3] text-[#666]">
                    Carat
                  </p>
                </div>

                {/* Box 2 */}
                <div class="diamond-right-bar w-1/4 px-2 md:w-1/3">
                  <p class="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold leading-[1.1] tracking-[0.02em] text-black">
                    J
                  </p>
                  <p class="m-0 text-[0.6875rem] leading-[1.3] text-[#666]">
                    Color
                  </p>
                </div>

                {/* Box 3 */}
                <div class="diamond-right-bar w-1/4 px-2 md:w-1/3">
                  <p class="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold leading-[1.1] tracking-[0.02em] text-black">
                    VS2
                  </p>
                  <p class="m-0 text-[0.6875rem] leading-[1.3] text-[#666]">
                    Clarity
                  </p>
                </div>

                {/* Divider */}
                <div className="my-2 hidden h-px w-full bg-[#d9d9d9] md:block"></div>

                {/* Box 4 */}
                <div class="diamond-bar-both w-1/4 px-2 md:w-1/3">
                  <p class="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold leading-[1.1] tracking-[0.02em] text-black">
                    1.43
                  </p>
                  <p class="m-0 text-[0.6875rem] leading-[1.3] text-[#666]">
                    Ratio
                  </p>
                </div>

                {/* Box 5 */}
                <div class="diamond-right-bar hidden w-1/3 px-2 md:block">
                  <p class="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold leading-[1.1] tracking-[0.02em] text-black">
                    10.65/7.47
                  </p>
                  <p class="m-0 text-[0.6875rem] leading-[1.3] text-[#666]">
                    L/W (mm)
                  </p>
                </div>
              </div>
            </div>
            {/* Diamond Info Container -- end */}

            {/* Button Container -- start */}
            <div className="mt-4">
              <button className="relative w-full overflow-hidden rounded-full bg-black px-8 py-4 text-sm font-semibold capitalize leading-tight text-white md:py-[13px] md:leading-none">
                <div className="flex items-center justify-between gap-2 overflow-hidden text-ellipsis transition-transform duration-500 md:gap-4">
                  <svg className="h-6 w-6" aria-hidden="true" focusable="false">
                    <svg
                      viewBox="0 0 37 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1578 4.461L18.3882 10.0077L24.6247 4.461"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M23.7463 9.99799C26.107 11.2008 27.9939 13.1634 29.1032 15.5695C30.2124 17.9756 30.4792 20.685 29.8607 23.2613C29.2422 25.8376 27.7744 28.1306 25.6937 29.7708C23.6131 31.4111 21.0408 32.3031 18.3913 32.3031C15.7418 32.3031 13.1695 31.4111 11.0889 29.7708C9.0082 28.1305 7.54036 25.8375 6.92185 23.2613C6.30335 20.685 6.57021 17.9756 7.67943 15.5695C8.78866 13.1634 10.6756 11.2008 13.0363 9.99799"
                        stroke="currentColor"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </svg>
                  Add setting
                  <svg
                    className="h-6 w-6 p-1"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <svg
                      viewBox="0 0 26 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      ></path>
                    </svg>
                  </svg>
                </div>
              </button>
            </div>
            {/* Button Container -- end */}

            {/* Add to wish list -- start */}
            <div className="mt-6 hidden text-center lg:block">
              <button
                type="button"
                className="WishlistButton inline-block rounded-full stroke-1 p-1 md:stroke-2"
              >
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 md:h-7 md:w-7">
                    <svg
                      className="WishlistHeartIcon"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                    >
                      <mask id="wishlist-heart-mask">
                        <path
                          d="M12,7.16613l3.01387-2.65371,4.7586,2.07432,1.0675,4.76126-8.83997,9.152L3.15997,11.348l1.06753-4.76126,4.75765-2.0739,3.01485,2.65329Z"
                          fill="white"
                          stroke="white"
                        ></path>
                      </mask>
                      <g mask="url(#wishlist-heart-mask)">
                        <polygon
                          className="heart-bg-fill"
                          fill="#fff"
                          points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"
                        ></polygon>
                        <path
                          className="heart-right"
                          fill="#e86c5c"
                          d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"
                        ></path>
                        <path
                          className="heart-bottom"
                          fill="#e86c5c"
                          d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"
                        ></path>
                        <path
                          className="heart-left"
                          fill="#e86c5c"
                          d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"
                        ></path>
                        <rect
                          className="heart-bright-left"
                          fill="rgba(255,255,255,0.2)"
                          x="-4.9"
                          y="-5"
                          width="26.5"
                          height="12.2"
                          shapeRendering="crispEdges"
                        ></rect>
                        <rect
                          className="heart-bright-right"
                          fill="rgba(255,255,255,0.2)"
                          x="10.1"
                          y="-2.8"
                          width="11.8"
                          height="22.3"
                          shapeRendering="crispEdges"
                        ></rect>
                        <polygon
                          className="heart-outline"
                          points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"
                        ></polygon>
                      </g>
                    </svg>
                  </div>
                  <p className="text-base leading-tight">Add to wish list</p>
                </div>
              </button>
            </div>
            {/* Add to wish list -- end */}

            {/* Product Badges Container -- start */}
            <div className="my-6 md:my-8">
              <div className="flex flex-wrap justify-center gap-y-2">
                <div className="w-1/4 px-[2px]">
                  <button
                    type="button"
                    className="CustomBadge__block w-full cursor-pointer"
                  >
                    <div className="mx-auto h-8">
                      <svg
                        class="mx-auto block h-full w-auto align-middle"
                        width="30"
                        height="32"
                        viewBox="0 0 30 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.8637 8.49689L4.02783 5.19775V7.32439L11.2859 11.1362L13.9252 14.4353L19.8637 8.49689Z"
                          stroke="currentColor"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M25.8025 26.9721H23.823L19.8641 19.714L16.5649 17.0747L22.5034 11.1362L25.8025 26.9721Z"
                          stroke="currentColor"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12.6056 21.0337L13.9253 26.9721L11.9458 27.632L9.96631 23.673L12.6056 21.0337Z"
                          stroke="currentColor"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9.96644 18.3944L4.02799 17.0747L3.36816 19.0542L7.32713 21.0337L9.96644 18.3944Z"
                          stroke="currentColor"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M0.478516 15.1642L4.06584 11.7583"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M15.9048 24.3332L18.5441 21.6938"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M14.9946 31.0001L19.8636 26.3125"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M8.31726 20.0441C8.31726 20.0441 21.1839 7.17748 23.4933 4.86808C25.8027 2.55869 28.442 1.23903 29.1019 1.89886C29.7617 2.55869 28.442 5.198 26.1326 7.50739C23.1634 10.4766 16.0152 17.6247 10.9566 22.6834C9.06343 24.3184 7.32751 24.9928 6.66768 24.333C6.00785 23.6732 6.6823 21.9373 8.31725 20.0441L8.31726 20.0441Z"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M17.7124 5.10437L22.1171 1"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M23.6157 15.0037L26.9149 11.7046"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M6.41699 13.8444L9.89818 10.3628"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-4 leading-[1.2] md:text-sm">
                      Overnight <br />
                      Shipping
                    </p>
                  </button>
                </div>

                <div className="w-1/4 px-[2px]">
                  <button
                    type="button"
                    className="CustomBadge__block w-full cursor-pointer"
                  >
                    <div className="mx-auto h-8">
                      <svg
                        class="mx-auto block h-full w-auto align-middle"
                        width="27"
                        height="34"
                        viewBox="0 0 27 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.14111 28.4867L11.0918 16.481"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M20.3799 29.7988L13.4292 17.1611"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M17.1868 13.3218L13.6253 14.6769L10.0639 13.3218L1.61377 28.4886L6.13355 27.9537L7.94724 32.2783L13.6253 22.0675L19.3035 32.2783L21.1171 27.9537L25.6369 28.4886L17.1868 13.3218Z"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M17.1098 1.31592H10.1292L4.48182 5.419L2.32471 12.0579L4.48182 18.6969L10.1292 22.7999H17.1098L22.7572 18.6969L24.9143 12.0579L22.7572 5.419L17.1098 1.31592Z"
                          fill="white"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M13.625 20.1646C18.132 20.1646 21.7857 16.5109 21.7857 12.0039C21.7857 7.49691 18.132 3.84326 13.625 3.84326C9.118 3.84326 5.46436 7.49691 5.46436 12.0039C5.46436 16.5109 9.118 20.1646 13.625 20.1646Z"
                          fill="white"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M18.0423 5.73926L7.30029 16.4813"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M15.5149 4.47559L6.03662 13.9538"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-4 leading-[1.2] md:text-sm">
                      Lifetime <br />
                      Warranty
                    </p>
                  </button>
                </div>

                <div className="w-1/4 px-[2px]">
                  <button
                    type="button"
                    className="CustomBadge__block w-full cursor-pointer"
                  >
                    <div className="mx-auto h-8">
                      <svg
                        class="mx-auto block h-full w-auto align-middle"
                        width="68"
                        height="69"
                        viewBox="0 0 68 69"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.5523 37.1789C26.3201 35.5205 25.5976 33.4994 25.4236 31.1465L25.3711 30.4417H34.5811L34.6606 31.0068C34.9924 33.3735 35.8971 35.0919 39.0897 35.7159V26.4784C30.2692 25.1611 26.4936 21.9704 26.4936 15.8749C26.4936 10.2534 31.5288 6.12217 39.0897 5.46482V1.2644H44.2076V5.5199C51.6339 6.2567 55.8907 9.8036 56.532 15.8056L56.6095 16.5309H47.6769L47.5719 16.003C47.1625 13.9476 46.1405 12.8046 44.2076 12.2959V21.035C50.7164 21.9538 57.1791 23.9835 57.1791 31.3733C57.1791 36.1478 54.073 39.8184 48.9332 41.5086M44.2076 34.8766C46.1912 34.3166 47.3508 33.0122 47.3508 31.2836C47.3508 29.6434 46.8575 28.6836 44.2076 27.984V34.8766ZM39.0897 12.829C37.1958 13.2826 36.0893 14.4102 36.0893 15.9376C36.0893 17.401 36.3123 18.444 39.0897 19.1527V12.829Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M26.3033 60.6248L8.81714 43.1387L1.4897 50.4661L18.9759 67.9523L26.3033 60.6248Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M48.9632 41.5998L55.6131 38.6425L57.0742 36.4508C58.0269 35.0218 59.4287 33.9511 61.058 33.408C62.28 33.0007 63.6011 33.0007 64.8231 33.408L65.3142 33.5717C66.3607 33.9206 66.8264 35.1395 66.2791 36.0973L61.4751 44.5044L48.9632 56.4813H22.1599"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M8.71753 50.3665L11.6485 53.2974"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.6484 45.9699L17.5104 40.108L21.9068 37.177H30.6998L35.0962 40.108H45.9609C48.0542 40.108 49.7511 41.8049 49.7511 43.8982C49.7511 45.9915 48.0542 47.6884 45.9609 47.6884H32.5132"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-4 leading-[1.2] md:text-sm">
                      30 Days <br />
                      Free Return
                    </p>
                  </button>
                </div>

                <div className="w-1/4 px-[2px]">
                  <button
                    type="button"
                    className="CustomBadge__block w-full cursor-pointer"
                  >
                    <div className="mx-auto h-8">
                      <svg
                        class="mx-auto block h-full w-auto align-middle"
                        width="61"
                        height="54"
                        viewBox="0 0 61 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.43727 1.24023H8.8402C8.8402 3.20287 8.05972 5.08711 6.67193 6.47491C5.28414 7.86271 3.39989 8.64318 1.43726 8.64318V1.24023H1.43727Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M59.5629 1.24025V8.64318C57.6002 8.64318 55.716 7.86269 54.3282 6.47491C52.9404 5.08712 52.1599 3.20287 52.1599 1.24023H59.5628L59.5629 1.24025Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M1.43726 42.9391V35.5361C3.39989 35.5361 5.28413 36.3166 6.67193 37.7044C8.05973 39.0922 8.8402 40.9764 8.8402 42.9391H1.43726V42.9391Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M59.5628 42.9391H52.1599C52.1599 40.9764 52.9404 39.0922 54.3282 37.7044C55.716 36.3166 57.6002 35.5361 59.5629 35.5361V42.9391L59.5628 42.9391Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.9424 42.939H1.43726V1.24023H59.5628V42.939H41.0576"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.5459 15.1399H49.4539"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.6003 20.1941H44.3995"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M22.9185 10.0854H38.0816"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M39.5826 27.7759H21.4174L12.1477 36.4087L30.5 51.7843L48.8523 36.4087L39.5826 27.7759Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M30.5 51.7843L44.0369 31.9242L39.5826 27.7759L24.1992 35.1293"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12.1477 36.4087L21.4174 27.7759L30.5 51.7843L12.1477 36.4087Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-4 leading-[1.2] md:text-sm">
                      Certificate <br />
                      &amp; Appraisal
                    </p>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Badges Container -- end */}

            {/* Stone Product Info -- start */}
            <div className="mt-4 rounded-[20px] bg-gray-200 p-3">
              <h3 className="mb-2 flex items-center gap-2">
                <svg
                  className="h-8 w-8 rounded-full bg-white p-1.5"
                  aria-hidden="true"
                  focusable="false"
                >
                  <svg
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.01367 4.89352L4.89544 1H13.1046L16.9864 4.89352L8.99616 12L1.01367 4.89352Z"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M7.2402 7.01938L4.95605 4.9178L6.46358 3.40613"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M8.99658 11.9023L12.5521 4.92818L9.82583 1.01196"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeMiterlimit="10"
                    ></path>
                  </svg>
                </svg>
                Your Diamond Info
              </h3>

              <div className="grid grid-cols-2 items-stretch gap-2">
                {/* Box 1 */}
                <div className="flex min-h-[160px] flex-col rounded-md bg-white p-3 shadow-sm">
                  <div className="mb-2 flex items-center justify-between gap-2 text-[rgba(102,102,102,var(--tw-text-opacity))] text-opacity-100">
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.91838 7.2041H5.77426C5.77426 8.22221 4.93648 9.05998 3.91838 9.05998C2.90028 9.05998 2.0625 8.22221 2.0625 7.2041H3.91838Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.9185 3.59375L2.1626 7.2042H5.6744L3.9185 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.082 7.2041H12.9378C12.9378 8.22221 12.1001 9.05998 11.082 9.05998C10.0639 9.05998 9.22607 8.2222 9.22607 7.2041H11.082V7.2041Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0816 3.59375L9.32568 7.2042H12.8375L11.0816 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.91846 3.59375H11.0815"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49951 2.8125V9.87541"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49978 9.87549L4.23486 12.1876H10.7647L7.49978 9.87549Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </svg>
                      <p className="cpcst-detail-title">Carat</p>
                    </div>
                  </div>

                  <div className="mb-2 flex-1 lg:mb-3">
                    <p className="m-0 text-[1.56rem] font-bold leading-none text-black">
                      2.51
                    </p>
                  </div>

                  <div className="text-[0.8125rem] leading-[1.23] text-[#666]">
                    Universal measurement unit for diamonds
                  </div>
                </div>
                {/* Box 1 */}

                {/* Box 2 */}
                <div className="flex min-h-[160px] flex-col rounded-md bg-white p-3 shadow-sm">
                  <div className="mb-2 flex items-center justify-between gap-2 text-[rgba(102,102,102,var(--tw-text-opacity))] text-opacity-100">
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.91838 7.2041H5.77426C5.77426 8.22221 4.93648 9.05998 3.91838 9.05998C2.90028 9.05998 2.0625 8.22221 2.0625 7.2041H3.91838Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.9185 3.59375L2.1626 7.2042H5.6744L3.9185 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.082 7.2041H12.9378C12.9378 8.22221 12.1001 9.05998 11.082 9.05998C10.0639 9.05998 9.22607 8.2222 9.22607 7.2041H11.082V7.2041Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0816 3.59375L9.32568 7.2042H12.8375L11.0816 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.91846 3.59375H11.0815"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49951 2.8125V9.87541"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49978 9.87549L4.23486 12.1876H10.7647L7.49978 9.87549Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </svg>
                      <p className="cpcst-detail-title">Carat</p>
                    </div>
                  </div>

                  <div className="mb-2 flex-1 lg:mb-3">
                    <p className="m-0 text-[1.56rem] font-bold leading-none text-black">
                      2.51
                    </p>
                  </div>

                  <div className="text-[0.8125rem] leading-[1.23] text-[#666]">
                    Universal measurement unit for diamonds
                  </div>
                </div>
                {/* Box 2 */}

                {/* Box 3 */}
                <div className="flex min-h-[160px] flex-col rounded-md bg-white p-3 shadow-sm">
                  <div className="mb-2 flex items-center justify-between gap-2 text-[rgba(102,102,102,var(--tw-text-opacity))] text-opacity-100">
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.91838 7.2041H5.77426C5.77426 8.22221 4.93648 9.05998 3.91838 9.05998C2.90028 9.05998 2.0625 8.22221 2.0625 7.2041H3.91838Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.9185 3.59375L2.1626 7.2042H5.6744L3.9185 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.082 7.2041H12.9378C12.9378 8.22221 12.1001 9.05998 11.082 9.05998C10.0639 9.05998 9.22607 8.2222 9.22607 7.2041H11.082V7.2041Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0816 3.59375L9.32568 7.2042H12.8375L11.0816 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.91846 3.59375H11.0815"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49951 2.8125V9.87541"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49978 9.87549L4.23486 12.1876H10.7647L7.49978 9.87549Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </svg>
                      <p className="cpcst-detail-title">Carat</p>
                    </div>
                  </div>

                  <div className="mb-2 flex-1 lg:mb-3">
                    <p className="m-0 text-[1.56rem] font-bold leading-none text-black">
                      2.51
                    </p>
                  </div>

                  <div className="text-[0.8125rem] leading-[1.23] text-[#666]">
                    Universal measurement unit for diamonds
                  </div>
                </div>
                {/* Box 3 */}

                {/* Box 4 */}
                <div className="flex min-h-[160px] flex-col rounded-md bg-white p-3 shadow-sm">
                  <div className="mb-2 flex items-center justify-between gap-2 text-[rgba(102,102,102,var(--tw-text-opacity))] text-opacity-100">
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.91838 7.2041H5.77426C5.77426 8.22221 4.93648 9.05998 3.91838 9.05998C2.90028 9.05998 2.0625 8.22221 2.0625 7.2041H3.91838Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.9185 3.59375L2.1626 7.2042H5.6744L3.9185 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.082 7.2041H12.9378C12.9378 8.22221 12.1001 9.05998 11.082 9.05998C10.0639 9.05998 9.22607 8.2222 9.22607 7.2041H11.082V7.2041Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0816 3.59375L9.32568 7.2042H12.8375L11.0816 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.91846 3.59375H11.0815"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49951 2.8125V9.87541"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49978 9.87549L4.23486 12.1876H10.7647L7.49978 9.87549Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </svg>
                      <p className="cpcst-detail-title">Carat</p>
                    </div>
                  </div>

                  <div className="mb-2 flex-1 lg:mb-3">
                    <p className="m-0 text-[1.56rem] font-bold leading-none text-black">
                      2.51
                    </p>
                  </div>

                  <div className="text-[0.8125rem] leading-[1.23] text-[#666]">
                    Universal measurement unit for diamonds
                  </div>
                </div>
                {/* Box 4 */}

                {/* Box 5 */}
                <div className="flex min-h-[160px] flex-col rounded-md bg-white p-3 shadow-sm">
                  <div className="mb-2 flex items-center justify-between gap-2 text-[rgba(102,102,102,var(--tw-text-opacity))] text-opacity-100">
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.91838 7.2041H5.77426C5.77426 8.22221 4.93648 9.05998 3.91838 9.05998C2.90028 9.05998 2.0625 8.22221 2.0625 7.2041H3.91838Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.9185 3.59375L2.1626 7.2042H5.6744L3.9185 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.082 7.2041H12.9378C12.9378 8.22221 12.1001 9.05998 11.082 9.05998C10.0639 9.05998 9.22607 8.2222 9.22607 7.2041H11.082V7.2041Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.0816 3.59375L9.32568 7.2042H12.8375L11.0816 3.59375Z"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.91846 3.59375H11.0815"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49951 2.8125V9.87541"
                            stroke="#EF8D33"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.49978 9.87549L4.23486 12.1876H10.7647L7.49978 9.87549Z"
                            stroke="#EF8D33"
                            strokeWidth="0.75"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </svg>
                      <p className="cpcst-detail-title">Carat</p>
                    </div>
                  </div>

                  <div className="mb-2 flex-1 lg:mb-3">
                    <p className="m-0 text-[1.56rem] font-bold leading-none text-black">
                      2.51
                    </p>
                  </div>

                  <div className="text-[0.8125rem] leading-[1.23] text-[#666]">
                    Universal measurement unit for diamonds
                  </div>
                </div>
                {/* Box 5 */}
              </div>
            </div>
            {/* Stone Product Info -- end */}

            {/* Tabs -- start */}
            <div className="mb-5 mt-4 md:mt-6">
              <div className="border-b border-[#e0e0e0]">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center gap-2 border-t border-[#32272700] bg-white p-3 pl-2 text-black"
                >
                  <svg
                    className="cpst-tab-icon h-6 w-6"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.9085 8H11.0919L2 17.0923L19.9924 33.0628L37.9707 17.1189L38 17.0923L28.9085 8ZM11.916 9.99069H21.8844L27.7042 17.0359L19.6717 30.1165L4.90143 17.0067L11.916 9.99069ZM24.0319 26.8208L30.1461 16.8659L24.4671 9.99069H28.084L35.0986 17.0055L24.0319 26.8208ZM19.6447 26.4863L9.19873 17.2133L14.4772 11.9346L13.4674 16.419L19.6447 26.4863Z"
                      fill="currentColor"
                    />
                  </svg>

                  <div className="cpst-tab-toggler-title flex-1 text-left capitalize text-black">
                    Diamond Details
                  </div>

                  <svg
                    className="cpst-tab-indicator text-customGray-300 h-6 w-6 rotate-90 transition-all duration-300"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 26 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="cpst-tab-toggler flex w-full cursor-pointer items-center gap-2 border-t border-[#e0e0e0] bg-white p-3 pl-2 text-black"
                >
                  <svg
                    className="cpst-tab-icon h-6 w-6"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.1729 13.81L19.5576 10.1576H15.1729V6.15759H3.17285V17.1576H5.04285C5.1528 17.6047 5.40949 18.0021 5.77188 18.2862C6.13427 18.5703 6.58144 18.7246 7.0419 18.7246C7.50236 18.7246 7.94953 18.5703 8.31192 18.2862C8.67431 18.0021 8.931 17.6047 9.04095 17.1576H15.7431C15.8521 17.5865 16.101 17.9668 16.4504 18.2385C16.7998 18.5101 17.2297 18.6576 17.6723 18.6576C18.1148 18.6576 18.5447 18.5101 18.8941 18.2385C19.2435 17.9668 19.4924 17.5865 19.6015 17.1576H21.1726L21.1729 13.81Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>

                  <div className="cpst-tab-toggler-title flex-1 text-left capitalize text-black">
                    Shipping
                  </div>

                  <svg
                    className="cpst-tab-indicator text-customGray-300 h-6 w-6 rotate-90 transition-all duration-300"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <svg
                      viewBox="0 0 26 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      ></path>
                    </svg>
                  </svg>
                </button>

                <button
                  type="button"
                  className="cpst-tab-toggler flex w-full cursor-pointer items-center gap-2 border-t border-[#e0e0e0] bg-white p-3 pl-2 text-black"
                >
                  <svg
                    className="cpst-tab-icon h-6 w-6"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0274 16.6169L8.65655 13.6249L10.3598 11.9214L10.0339 13.3685L12.0274 16.6169ZM12.7684 19.0977L12.7253 19.0712L12.3422 19.4112L5.74225 13.5528L9.07735 10.2176H15.6131L18.9481 13.5528L18.9374 13.5628L12.8558 18.9556L12.7684 19.0977ZM15.1984 11.2177H14.1819L16.2019 13.5092L14.6598 16.019L17.4904 13.509L15.1984 11.2177ZM7.19985 13.5092L12.2661 18.0061L14.9639 13.6161L12.8486 11.2172H9.49145L7.19985 13.5092ZM20.9898 12.5132C20.7546 11.971 20.4253 11.4748 20.0171 11.0474L17.8235 8.69469C17.3977 8.20898 16.8432 7.85349 16.224 7.66919C15.914 7.57973 15.5933 7.53228 15.2706 7.52809L14.4698 7.49809L11.2666 7.37599L6.11415 7.17999L6.75715 4.95999L2.57715 8.10739L6.75715 11.2549L6.13985 9.09789L11.2577 8.95999L14.4622 8.87399L15.2632 8.85249C15.4751 8.83882 15.6879 8.85481 15.8953 8.89999C16.3146 8.995 16.6963 9.21182 16.9926 9.52319L19.3135 11.7177C20.0235 12.4149 20.6215 13.2733 20.1894 14.0389C19.5808 14.858 18.8593 15.5869 18.0464 16.2039L15.7198 18.2709L15.6236 18.3563C15.5937 18.3829 15.574 18.419 15.5677 18.4586C15.5615 18.4981 15.5691 18.5386 15.5894 18.5731C15.6097 18.6076 15.6413 18.634 15.6789 18.6478C15.7165 18.6616 15.7577 18.662 15.7954 18.6488C15.8534 18.6294 15.9077 18.6006 15.9561 18.5634L16.0426 18.5017L16.2063 18.3802L16.5263 18.1357L17.1605 17.6433L18.4227 16.655L19.685 15.6697C20.1589 15.3287 20.564 14.9012 20.8789 14.4097C21.0466 14.1236 21.1441 13.802 21.1635 13.471C21.1711 13.1433 21.112 12.8174 20.9898 12.5132V12.5132Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>

                  <div className="cpst-tab-toggler-title flex-1 text-left capitalize text-black">
                    Return Policy
                  </div>

                  <svg
                    className="cpst-tab-indicator text-customGray-300 h-6 w-6 rotate-90 transition-all duration-300"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <svg
                      viewBox="0 0 26 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      ></path>
                    </svg>
                  </svg>
                </button>
              </div>
            </div>
            {/* Tabs -- end */}

            {/* VA Container -- start */}
            <div className="rounded-xl bg-[rgb(247,247,247)] p-6">
              <div>
                <div className="mb-2 text-base font-semibold leading-[1.2] text-black">
                  Virtual Appointment
                </div>

                <div className="mb-4">
                  <p className="text-[0.8125rem] leading-[1.5]">
                    <strong>See Keyzar's jewelry</strong> up close with a
                    personal appointment. Explore engagement rings, diamonds,
                    and fine jewelry in person through your device.
                  </p>
                </div>

                <button className="inline-block text-sm font-medium leading-[1.2] tracking-normal text-black underline">
                  Book Appointment
                </button>
              </div>
            </div>
            {/* VA Container -- end */}
          </div>
        </div>
      </section>
      {/* Grid Box containing 2 major columns -- End */}

      {/* Diamond Qualities -- start */}
      <div className="bg-white px-5 py-4 md:relative md:z-10 md:px-0 md:py-8">
        <h2 className="mb-4 font-light capitalize md:mb-8 md:text-4xl md:font-semibold md:leading-none">
          Understand Your Diamond Qualities
        </h2>

        <div className="p-3 md:bg-transparent md:p-0">
          <div className="md:flex md:flex-wrap md:justify-center md:gap-4">
            {/* 1st Card */}
            <div className="md:flex md:flex-col md:justify-between md:rounded-[1.25rem] md:bg-[#f7f7f7] md:p-3 xl:w-[calc(33.33333%-0.66667rem)]">
              {/* color title */}
              <div className="mb-2 hidden md:block">
                <div className="flex flex-wrap items-center gap-2 whitespace-nowrap">
                  <div className="flex shrink-0 items-center justify-between gap-2 rounded-lg bg-white py-2 pl-3 pr-2 text-base font-semibold leading-none text-[rgba(77,77,77,1)] shadow">
                    <span className="uppercase">Color</span>
                    <span className="rounded-sm bg-[#e0e0e0] px-2 py-1.5 font-bold text-black">
                      J
                    </span>
                  </div>
                </div>
              </div>

              {/* white square for diamond */}
              <div className="w-full rounded-lg bg-white p-4 pb-3 shadow">
                {/* Diamond */}
                <div className="mb-2 w-full">
                  <div className="relative pt-[60%]">
                    <img
                      className="absolute left-0 top-0 z-10 h-full w-full object-contain"
                      loading="lazy"
                      src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2129690/build/_assets/kzr-Color-stone-6BRHTXNY.svg"
                      width={150}
                      height={150}
                      alt="Color stone"
                    />
                    <img
                      className="absolute left-0 top-0 h-full w-full object-contain transition-opacity duration-300"
                      loading="lazy"
                      src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2129690/build/_assets/kzr-Color-solid-WWFSS453.svg"
                      width={150}
                      height={150}
                      alt="Color solid"
                      style={{ opacity: 0.5 }}
                    />
                  </div>
                </div>

                {/* Horizontal Alphabets */}
                <div className="mb-2">
                  <div
                    className="relative grid h-10 grid-cols-7 gap-0 rounded-lg border border-[#d3d3d3] bg-[#f2f2f2]" // customGray-75 and border-borders assumed
                  >
                    {["J", "I", "H", "G", "F", "E", "D"].map(
                      (letter, index) => (
                        <button
                          key={letter}
                          type="button"
                          className={`relative z-10 flex h-full items-center justify-center bg-transparent px-2 text-center font-[proximaNovaCondensed] text-[0.8125rem] uppercase leading-tight transition-colors ${
                            index === 0 ? "text-black" : "text-[#8c8c8c]" // black for first, gray for rest
                          }`}
                        >
                          <span>{letter}</span>
                          {index < 6 && (
                            <span className="absolute bottom-0 right-0 top-0 w-px bg-[#d3d3d3]" />
                          )}
                        </button>
                      ),
                    )}

                    {/* Active indicator background */}
                    <div
                      className="pointer-events-none absolute bottom-0 top-0 rounded-lg bg-white transition-all duration-500"
                      style={{ left: "0%", right: "85.7143%" }}
                    >
                      <div className="absolute z-20 h-full w-full rounded-lg border border-black ring-1 ring-black transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Below Horizontal Alphabets */}
                <div class="min-h-[3.25rem] px-1">
                  <div class="text-[0.8125rem] font-semibold leading-tight text-black">
                    These slightly tinted diamonds are nearly colorless,
                    especially when set in rose and yellow gold.
                  </div>
                </div>
              </div>

              {/* End Disclaimer */}
              <div className="px-1 pb-3 pt-2">
                <div className="text-xs leading-tight text-[rgba(75,75,75,var(--tw-text-opacity,1))]">
                  Color refers to the natural tint of a diamond. The closer the
                  diamond is to “colorless” the rarer it is. The industry
                  standard to grading color in a diamond is to assign a letter
                  grade from D (colorless) to J (nearly colorless)
                </div>
              </div>
            </div>

            {/* 2nd Card */}
            <div className="md:flex md:flex-col md:justify-between md:rounded-[1.25rem] md:bg-[#f7f7f7] md:p-3 xl:w-[calc(33.33333%-0.66667rem)]">
              {/* color title */}
              <div className="mb-2 hidden md:block">
                <div className="flex flex-wrap items-center gap-2 whitespace-nowrap">
                  <div className="flex shrink-0 items-center justify-between gap-2 rounded-lg bg-white py-2 pl-3 pr-2 text-base font-semibold leading-none text-[rgba(77,77,77,1)] shadow">
                    <span className="uppercase">Color</span>
                    <span className="rounded-sm bg-[#e0e0e0] px-2 py-1.5 font-bold text-black">
                      VS2
                    </span>
                  </div>
                </div>
              </div>

              {/* white square for diamond */}
              <div className="w-full rounded-lg bg-white p-4 pb-3 shadow">
                {/* Diamond */}
                <div className="mb-2 w-full">
                  <div className="relative pt-[60%]">
                    <img
                      src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2129690/build/_assets/kzr-clarity-i1-HJZUOEN7.svg"
                      alt="Clarity"
                      width={150}
                      height={150}
                      loading="lazy"
                      className="absolute left-0 top-0 z-10 h-full w-full object-contain"
                    />
                  </div>
                </div>

                {/* Horizontal Alphabets */}
                <div className="mb-2">
                  <div
                    className="relative grid h-10 grid-cols-7 gap-0 rounded-lg border border-[#d3d3d3] bg-[#f2f2f2]" // customGray-75 and border-borders assumed
                  >
                    {["SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"].map(
                      (letter, index) => (
                        <button
                          key={letter}
                          type="button"
                          className={`relative z-10 flex h-full items-center justify-center bg-transparent px-2 text-center font-[proximaNovaCondensed] text-[0.8125rem] uppercase leading-tight transition-colors ${
                            index === 0 ? "text-black" : "text-[#8c8c8c]" // black for first, gray for rest
                          }`}
                        >
                          <span>{letter}</span>
                          {index < 6 && (
                            <span className="absolute bottom-0 right-0 top-0 w-px bg-[#d3d3d3]" />
                          )}
                        </button>
                      ),
                    )}

                    {/* Active indicator background */}
                    <div
                      className="pointer-events-none absolute bottom-0 top-0 rounded-lg bg-white transition-all duration-500"
                      style={{ left: "0%", right: "85.7143%" }}
                    >
                      <div className="absolute z-20 h-full w-full rounded-lg border border-black ring-1 ring-black transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Below Horizontal Alphabets */}
                <div class="min-h-[3.25rem] px-1">
                  <div class="text-[0.8125rem] font-semibold leading-tight text-black">
                    Slightly Included. Inclusions are easy to see under 10x
                    magnification. Some are visible to the naked eye.
                  </div>
                </div>
              </div>

              {/* End Disclaimer */}
              <div className="px-1 pb-3 pt-2">
                <div className="text-xs leading-tight text-[rgba(75,75,75,var(--tw-text-opacity,1))]">
                  Most diamonds have imperfections in the form of internal flaws
                  and surface blemishes. These imperfections are graded on a
                  scale of FL (flawless) to I1-I3 (included). FL diamonds are
                  the rarest and hardest to find.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Diamond Qualities -- end */}
    </section>
  );
};

export default Keyzaar;
