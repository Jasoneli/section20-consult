import Image from "next/image";
import ScrollRevealSection from "./ScrollRevealSection";
import FancyAnimationSection from "./FancyAnimationSection";

const WhoWeAre = () => {
  return (
    <>
      <article className="max-w-6xl mx-auto container p-4 lg:my-20 ehac-section">
        <h2 className="text-2xl lg:text-3xl uppercase font-bold text-center my-4 lg:my-10">
          About EAHAC
        </h2>
        <div className="flex flex-col  gap-10 items-center">
          <div>
            <h3 className="my-2 text-primary text-xl font-bold">Who We Are:</h3>
            <p className="tracking-wide text-left  font-medium text-dark">
              EAHAC was created to educate and empower students about global
              health issues and promote a sense of social responsibility. We
              seek to organize health symposia, carry out health screening
              focusing on STIs and Hepatitis. It is our way of giving back to
              society and therefore it is free to join. It is our hope that
              eventually all high schools in Ghana and beyond will embrace the
              vision. We are going to involve students by selecting leaders to
              oversee the activities of the EAHAC.
            </p>
          </div>
          <div>
            <h3 className="my-2 text-primary text-xl font-bold">
              Our Mission:
            </h3>
            <p className="tracking-wide text-left  font-medium text-dark">
              Through our vision and mission, we aspire to create a network of
              educated, resilient, and culturally competent individuals who
              champion health awareness and contribute positively to the global
              community, making a lasting impact on the well-being of students
              engaged in education abroad programs.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default WhoWeAre;
