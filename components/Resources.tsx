import Image from "next/image";
import ScrollRevealSection from "./ScrollRevealSection";

const Resources = () => {
  return (
    <ScrollRevealSection>
      <div className="bg-[#e9e9e7]  my-20 text-textColor">
        <div className="max-w-6xl mx-auto px-5 py-10 container">
          <h2 className="text-2xl lg:text-4xl  uppercase font-bold lg:text-center">
            Resources
          </h2>
          <p className="lg:text-center text-base lg:text-lg mt-2 font-semibold text-[#7d7c83]">
            Stay Informed with Our Informative Resources
          </p>
        </div>
        <div className="max-w-6xl container lg:pb-10 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 p-8">
          <Image
            src="/images/r-1.jpg"
            width={300}
            height={400}
            alt="resource"
            className="rounded-xl hover:scale-105 hover:shadow-lg"
          />
          <Image
            src="/images/r-2.jpg"
            width={300}
            height={400}
            alt="resource"
            className="rounded-xl hover:scale-105 hover:shadow-lg"
          />
          <Image
            src="/images/r-3.jpg"
            width={300}
            height={400}
            alt="resource"
            className="rounded-xl hover:scale-105 hover:shadow-lg"
          />
          <Image
            src="/images/r-4.jpg"
            width={300}
            height={400}
            alt="resource"
            className="rounded-xl hover:scale-105 hover:shadow-lg"
          />
          <Image
            src="/images/r-5.jpg"
            width={300}
            height={400}
            alt="resource"
            className="rounded-xl hover:scale-105 hover:shadow-lg"
          />
          <Image
            src="/images/r-6.jpg"
            width={300}
            height={400}
            alt="resource"
            className="rounded-xl hover:scale-105 hover:shadow-lg"
          />
          <Image
            src="/images/r-7.jpg"
            width={300}
            height={400}
            alt="resource"
            className="rounded-xl hover:scale-105 hover:shadow-lg"
          />
          <Image
            src="/images/r-8.jpg"
            width={300}
            height={400}
            alt="resource"
            className="rounded-xl hover:scale-105 hover:shadow-lg"
          />
        </div>
      </div>
    </ScrollRevealSection>
  );
};

export default Resources;
