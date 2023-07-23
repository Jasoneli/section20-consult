import Image from "next/image";
import Link from "next/link";
import ScrollRevealSection from "./ScrollRevealSection";

const AboutUS = () => {
  return (
    <>
      <ScrollRevealSection>
        <section id="about" className="lg:my-10">
          <div className="container max-w-6xl p-4 mx-auto text-textColor">
            <h2 className="text-2xl lg:text-4xl  uppercase font-bold text-center">
              About us
            </h2>
            <p className="text-center text-base lg:text-lg mt-2 font-semibold text-dark">
              Our Vision: Empowering Your Dreams
            </p>
            <article className="flex flex-col  gap-8 p-4 justify-center items-center">
              <p className="text-base text-left order-1 lg:order-none lg:text-lg font-medium text-dark">
                At Section20 Consult, our vision is to become the ultimate
                catalyst for your dreams. We are driven by the belief that
                everyone deserves the opportunity to excel in their chosen field
                and explore global possibilities. With a team of experienced
                consultants and industry experts, we are committed to providing
                tailored solutions that match your unique aspirations.
              </p>

              <Image
                src="/images/board.jpg"
                width={500}
                height={500}
                alt="board"
                className="rounded-md shadow-md"
              />
            </article>
            <Link
              className="px-4 py-2 font-semibold tracking-wide text-xl  hover:translate-y-[-2px] duration-200 transition-all flex justify-center items-center text-center mt-4 underline uppercase text-accent hover:text-primary"
              href="/services"
            >
              View our services
            </Link>
          </div>
        </section>
      </ScrollRevealSection>
    </>
  );
};

export default AboutUS;
