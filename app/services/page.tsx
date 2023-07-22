import EHAC from "@/components/EHAC";
import FootballTrials from "@/components/FootballTrials";
import JobsAbroad from "@/components/JobsAbroad";
import SchoolAbroad from "@/components/SchoolAbroad";

const ServicesPage = () => {
  return (
    <section className="my-10">
      <div className="conatiner max-w-6xl mx-auto p-4">
        <h2 className="text-center text-5xl text-primary font-bold mb-5">
          Our Comprehensive Services for Your Growth
        </h2>
        <p className="text-center  text-accent font-semibold text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, illum?
        </p>
      </div>
      <SchoolAbroad />
      <JobsAbroad />
      <EHAC />
      <FootballTrials />
    </section>
  );
};

export default ServicesPage;
