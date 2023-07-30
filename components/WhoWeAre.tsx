import Image from "next/image";
import ScrollRevealSection from "./ScrollRevealSection";
import FancyAnimationSection from "./FancyAnimationSection";

const WhoWeAre = () => {
  return (
    <>
      <FancyAnimationSection>
        <article className="max-w-6xl mx-auto container p-4 lg:my-20">
          <h2 className="text-2xl lg:text-4xl uppercase font-bold text-center my-4 lg:my-10">
            About EHAC
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div>
              <h3 className="my-2 text-primary text-lg font-bold">
                Who We Are:
              </h3>
              <p className="text-base text-left order-1 lg:order-none font-medium text-dark">
                At EAHAC, we are a team of passionate and experienced
                professionals dedicated to promoting health awareness and
                providing expert guidance for students and travelers venturing
                abroad. Our mission is to empower you with the knowledge,
                resources, and support you need to make informed decisions about
                your health and safety while embracing the educational
                opportunities overseas.
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
      </FancyAnimationSection>
    </>
  );
};

export default WhoWeAre;
