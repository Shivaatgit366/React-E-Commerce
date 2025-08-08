import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = ({ products }) => {
  return (
    <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Jewellery that tells your unique story
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Welcome to Chicago Jewellers – where elegance meets craftsmanship.
          Discover timeless jewellery pieces designed with precision and
          passion. From custom engagement rings to everyday luxury, we offer it
          all. Visit us and find jewellery as unique as your story.
        </p>

        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>

      <div className="carousel w-full">
        {carouselImages.map((image, index) => {
          // based on the index of the image, first properly set the previous and next slide; That means for each image, we need to find the previous and next slide indices;
          const prevSlide = index === 0 ? carouselImages.length - 1 : index - 1;
          const nextSlide = index === carouselImages.length - 1 ? 0 : index + 1;
          return (
            <div
              id={`slide${index}`}
              key={index}
              className="carousel-item relative w-full"
            >
              <img
                src={image}
                className="rounded-box h-[28rem] w-full object-cover"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${prevSlide}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${nextSlide}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
