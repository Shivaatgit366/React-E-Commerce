const About = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>

        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-4xl font-bold tracking-widest text-primary-content">
              Chicago Jewellers
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-justify text-lg leading-8">
        Whether you’re looking for modern designs or vintage-inspired elegance,
        Chicago's jewellery scene blends tradition with innovation. Many
        jewellers in the city are family-owned, bringing generations of
        expertise and trust to their customers. The city’s Diamond District on
        Wabash Avenue is a go-to destination for both locals and tourists.
        Custom designs, expert repairs, and certified gemstones are standard
        offerings. Ethical sourcing and sustainable practices are also gaining
        popularity among Chicago jewellers. Whether it's a wedding, anniversary,
        or a personal treat, you'll find something truly special. With
        exceptional service and a commitment to quality, Chicago jewellers
        continue to shine in the world of fine jewellery.
      </p>
    </>
  );
};

export default About;
