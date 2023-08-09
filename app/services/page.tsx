import Contact from "@/components/Contact";
import Issues from "@/components/Issues";
// import EHAC from "@/components/EHAC";
// import FootballTrials from "@/components/FootballTrials";
// import JobsAbroad from "@/components/JobsAbroad";
// import SchoolAbroad from "@/components/SchoolAbroad";
import { GrServices } from "react-icons/gr";

const ServicesPage = () => {
  return (
    <>
      <article className="mt-10">
        <div className="conatiner max-w-6xl mx-auto p-4">
          <h2 className="lg:text-center text-3xl lg:text-5xl text-primary font-bold mb-5">
            Our Comprehensive Services
          </h2>
          <p className="lg:text-center mb-10  text-dark font-semibold text-base lg:text-lg">
            At Section20 Consult, we are dedicated to providing top-notch
            consultation solutions tailored to meet your specific needs.
          </p>
        </div>
        <section className="conatiner max-w-6xl mx-auto p-4 mb-20">
          <ul className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-10">
            <li className="text-rose-800 font-bold flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">Education Counseling</p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">Course and Program Guidance</p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">University/College Selection</p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">Application Assistance</p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">Application Assistance</p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">Standardized Test Preparation (IELTS)</p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">Visa and Immigration Support</p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">
                Scholarship and Financial Aid Information
              </p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">Pre-Departure Orientation</p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">Travel and Accommodation Arrangements</p>
            </li>
            <li className="text-rose-800 font-bold  flex items-center gap-5">
              <h3 className="icon">
                <GrServices size={30} />
              </h3>
              <p className="text-lg">Health Insurance Guidance</p>
            </li>
          </ul>
        </section>
        {/* <SchoolAbroad />
        <JobsAbroad />
        {<EHAC /> }
        <FootballTrials /> */}
      </article>
      <Contact />
      <Issues />
    </>
  );
};

export default ServicesPage;
