import Image from "next/image";
import Link from "next/link";
import ScrollRevealSection from "./ScrollRevealSection";
import FancyAnimationSection from "./FancyAnimationSection";

const AboutUS = () => {
  return (
    <>
      <>
        <section id="about" className="lg:my-14">
          <div className="container max-w-6xl p-4 mx-auto text-textColor">
            <h2 className="text-2xl lg:text-4xl  uppercase font-bold text-center">
              About us
            </h2>
            <p className="text-center text-base lg:text-lg mt-8 font-semibold text-dark ">
              <span className="text-primary">Our Vision:</span> To empower and
              inspire students of all backgrounds to achieve their full
              potential through quality education and guidance.
            </p>
            <article className="flex flex-col justify-between items-center lg:flex-row my-14 gap-8">
              <p className="text-base text-left order-3 lg:order-none text-dark ">
                Our mission is to provide comprehensive and personalized
                guidance to students and professionals, ensuring they make
                informed decisions about their education and career paths. We
                strive to provide access to the best educational opportunities,
                resources, and support systems, enabling students to excel
                academically, professionally, and personally. Through our
                services, we aim to make a positive and lasting impact on the
                lives of students and professionals (both skilled and
                unskilled), helping them shape a brighter future for themselves
                and society.
              </p>

              <Image
                src="/images/about-img.png"
                width={500}
                height={500}
                alt="board"
                className="rounded-full border-2 border-primary shadow-md order-2 lg:order-none"
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
      </>
    </>
  );
};

export default AboutUS;
