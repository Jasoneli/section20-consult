/* eslint-disable react/no-unescaped-entities */
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineCardTravel } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { LiaSchoolSolid } from "react-icons/lia";
import ScrollRevealSection from "./ScrollRevealSection";

const EhacServices = () => {
  return (
    <>
      <ScrollRevealSection>
        <section className="my-10 bg-gradient-to-r from-primary to-accent text-background">
          <div className="max-w-6xl container mx-auto p-4">
            <h2 className="text-2xl lg:text-4xl uppercase font-bold text-center my-4 lg:my-10">
              Our Services
            </h2>
            <div className="mt-5 text-white flex flex-col lg:flex-row gap-8 pb-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">
                    <MdOutlineCardTravel />
                  </span>
                  <h3 className="text-lg font-bold tracking-wide text-center">
                    Pre-Departure Health Service
                  </h3>
                </div>

                <p className="lg:text-center">
                  Before you set foot in your dream destination, it's essential
                  to be well-prepared. Our pre-departure health consultation
                  covers everything you need to know about vaccinations, travel
                  medications, common health risks in your destination country,
                  and preventive measures.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">
                    <AiOutlineSafety />
                  </span>
                  <h3 className="text-lg font-bold tracking-wide text-center">
                    Health and Safety Abroad
                  </h3>
                </div>

                <p className="lg:text-center">
                  Studying or traveling abroad can expose you to new
                  environments and potential health risks. Our experts provide
                  ongoing support and guidance to help you navigate health
                  challenges while overseas.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">
                    <RiMentalHealthLine />
                  </span>
                  <h3 className="text-lg font-bold tracking-wide text-center">
                    Mental Health and Wellness
                  </h3>
                </div>

                <p className="lg:text-center">
                  Your mental well-being is just as crucial as your physical
                  health. We offer resources and counseling services to address
                  the emotional aspects of studying abroad, homesickness,
                  cultural adjustments, and stress management.
                </p>
              </div>
              {/* <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                <LiaSchoolSolid />
              </span>
              <h3 className="text-lg font-bold tracking-wide text-center">
                Health Education Workshops
              </h3>
            </div>

            <p className="lg:text-center">
              Stay informed and equipped with our engaging health education
              workshops. We conduct sessions on various topics, such as food
              safety, personal hygiene, mental health awareness, and more.
            </p>
          </div> */}
            </div>
          </div>
        </section>
      </ScrollRevealSection>
    </>
  );
};

export default EhacServices;
