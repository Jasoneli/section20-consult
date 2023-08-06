/* eslint-disable react/no-unescaped-entities */
import { AiOutlineSafety } from "react-icons/ai";
import { TbRibbonHealth, TbExchange } from "react-icons/tb";
import { RiMentalHealthLine, RiMiniProgramLine } from "react-icons/ri";
import { FaWalking } from "react-icons/fa";
import { SiEventstore, SiYourtraveldottv } from "react-icons/si";
import { GiVideoConference } from "react-icons/gi";
import { MdOutlineWorkspacePremium, MdCastForEducation } from "react-icons/md";

const EhacServices = () => {
  return (
    <>
      <section className="my-10 bg-gradient-to-r from-primary to-accent text-background">
        <div className="max-w-6xl container mx-auto p-4">
          <h2 className="text-2xl lg:text-4xl uppercase font-bold text-center my-4 lg:my-10">
            Our Initiatives
          </h2>
          <p className="text-center text-base lg:text-lg my-8 font-semibold ">
            By implementing these initiatives, our Education Abroad Health
            Awareness Club aims to play a significant role in fostering a
            healthier, more informed, and globally connected community.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2  mt-5 text-white  gap-8 pb-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <TbRibbonHealth />
                </span>
                <h3 className="text-lg font-bold tracking-wide text-center">
                  Health Screening
                </h3>
              </div>

              <p>
                Before you set foot in your dream destination, it's essential to
                be well-prepared. Our pre-departure health consultation covers
                everything you need to know about vaccinations, travel
                medications, common health risks in your destination country,
                and preventive measures.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <AiOutlineSafety />
                </span>
                <h3 className="text-lg font-bold tracking-wide">
                  Symposia (Health and Education Abroad)
                </h3>
              </div>

              <p>
                Studying or traveling abroad can expose you to new environments
                and potential health risks. Our experts provide ongoing support
                and guidance to help you navigate health challenges while
                overseas.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <SiEventstore />
                </span>
                <h3 className="text-lg font-bold tracking-wide text-center">
                  Charity Events
                </h3>
              </div>

              <p>
                Your mental well-being is just as crucial as your physical
                health. We offer resources and counseling services to address
                the emotional aspects of studying abroad, homesickness, cultural
                adjustments, and stress management.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <FaWalking />
                </span>
                <h3 className="text-lg font-bold tracking-wide text-center">
                  Health Walks
                </h3>
              </div>

              <p>
                Your mental well-being is just as crucial as your physical
                health. We offer resources and counseling services to address
                the emotional aspects of studying abroad, homesickness, cultural
                adjustments, and stress management.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <GiVideoConference />
                </span>
                <h3 className="text-lg font-bold tracking-wide">
                  International and Local Health Conferences
                </h3>
              </div>

              <p>
                Your mental well-being is just as crucial as your physical
                health. We offer resources and counseling services to address
                the emotional aspects of studying abroad, homesickness, cultural
                adjustments, and stress management.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <MdOutlineWorkspacePremium />
                </span>
                <h3 className="text-lg font-bold tracking-wide text-center">
                  Volunteering Work
                </h3>
              </div>

              <p>
                Your mental well-being is just as crucial as your physical
                health. We offer resources and counseling services to address
                the emotional aspects of studying abroad, homesickness, cultural
                adjustments, and stress management.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <RiMiniProgramLine />
                </span>
                <h3 className="text-lg font-bold tracking-wide">
                  Interships and Externship Programs
                </h3>
              </div>

              <p>
                Your mental well-being is just as crucial as your physical
                health. We offer resources and counseling services to address
                the emotional aspects of studying abroad, homesickness, cultural
                adjustments, and stress management.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <MdCastForEducation />
                </span>
                <h3 className="text-lg font-bold tracking-wide">
                  Scholarships Abroad for Needy but Brilliant Students
                </h3>
              </div>

              <p>
                Your mental well-being is just as crucial as your physical
                health. We offer resources and counseling services to address
                the emotional aspects of studying abroad, homesickness, cultural
                adjustments, and stress management.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <TbExchange />
                </span>
                <h3 className="text-lg font-bold tracking-wide text-center">
                  Exchange Health Programs
                </h3>
              </div>

              <p>
                Your mental well-being is just as crucial as your physical
                health. We offer resources and counseling services to address
                the emotional aspects of studying abroad, homesickness, cultural
                adjustments, and stress management.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  <SiYourtraveldottv />
                </span>
                <h3 className="text-lg font-bold tracking-wide text-center">
                  Excursions
                </h3>
              </div>

              <p>
                Your mental well-being is just as crucial as your physical
                health. We offer resources and counseling services to address
                the emotional aspects of studying abroad, homesickness, cultural
                adjustments, and stress management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EhacServices;
