/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const EHAC = () => {
  return (
    <div className="max-w-6xl container mx-auto p-4 lg:mb-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-8">
          <h3 className="text-lg text-primary font-semibold uppercase tracking-wide flex items-center gap-4">
            <span className="font-bold text-3xl bg-[#d2d2cf] p-4 rounded-full text-center">
              03
            </span>
            <span> EAHAC (Education Abroad Health Awareness Club)</span>
          </h3>
          <p className="text-lg text-dark">
            Stand out from the competition with a compelling resume that
            highlights your skills and accomplishments effectively. Our team of
            expert resume writers will craft a professional, customized resume
            tailored to your industry and targeted job positions. Additionally,
            our interview preparation sessions will boost your confidence and
            equip you with essential interview techniques. We conduct mock
            interviews, offer valuable feedback, and provide tips to help you
            showcase your strengths during job interviews.
          </p>
        </div>
        <div className="">
          <Image
            src="/images/work-2.jpg"
            width={600}
            height={600}
            alt="school logo"
            className="rounded-xl shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default EHAC;
