import EHAC from "@/components/EHAC";
import FootballTrials from "@/components/FootballTrials";
import JobsAbroad from "@/components/JobsAbroad";
import SchoolAbroad from "@/components/SchoolAbroad";

const ServicesPage = () => {
  return (
    <article className="my-10">
      <div className="conatiner max-w-6xl mx-auto p-4">
        <h2 className="lg:text-center text-3xl lg:text-5xl text-primary font-bold mb-5">
          Our Comprehensive Services for Your Growth
        </h2>
        <p className="lg:text-center mb-10  text-dark font-semibold text-base lg:text-lg">
          At Section20 Consult, we are dedicated to providing top-notch
          consultation solutions tailored to meet your specific needs.
        </p>
      </div>
      <SchoolAbroad />
      <JobsAbroad />
      <EHAC />
      <FootballTrials />
    </article>
  );
};

export default ServicesPage;
