import Image from "next/image";
import ScrollRevealSection from "./ScrollRevealSection";
import FancyAnimationSection from "./FancyAnimationSection";

const WhoWeAre = () => {
  return (
    <>
      <article className="max-w-6xl mx-auto container p-4 lg:my-20">
        <h2 className="text-2xl lg:text-3xl uppercase font-bold text-center my-4 lg:my-10">
          About EAHAC
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div>
            <h3 className="my-2 text-primary text-lg font-bold">Who We Are:</h3>
            <p className="text-base text-left order-1 lg:order-none font-medium text-dark">
              Through our vision and mission, we aspire to create a network of
              educated, resilient, and culturally competent individuals who
              champion health awareness and contribute positively to the global
              community, making a lasting impact on the well-being of students
              engaged in education abroad programs.
            </p>
          </div>
          <Image
            src="/images/ehac-1.jpg"
            width={550}
            height={550}
            alt="ehac-1"
            className="rounded-xl shadow-xl"
          />
        </div>
      </article>
    </>
  );
};

export default WhoWeAre;
