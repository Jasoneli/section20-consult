/* eslint-disable @next/next/no-img-element */
const Partners = () => {
  return (
    <section className="lg:my-10 ">
      <div className="max-w-6xl container p-4 mx-auto">
        <h2 className="text-2xl lg:text-4xl uppercase font-bold text-center">
          Our Partners
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center text-center my-5 py-5 place-content-center">
          <div>
            <img
              src="/images/p-1.jpg"
              alt="partner-1"
              width={250}
              height={250}
              className="partners-img"
            />
          </div>
          <div>
            <img
              src="/images/p-2.jpg"
              alt="partner-2"
              width={350}
              height={350}
              className="partners-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
