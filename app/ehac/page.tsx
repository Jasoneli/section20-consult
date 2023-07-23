import EhacServices from "@/components/EhacServices";
import GetInTouch from "@/components/GetInTouch";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";

const EhacPage = () => {
  return (
    <>
      <section className="mt-10">
        <div className="max-w-6xl p-4 container mx-auto flex gap-10">
          <div>
            <h1 className="lg:text-6xl font-bold text-3xl mb-4">
              Welcome to <span className="text-primary">EAHAC </span> (Education
              Abroad Health Awareness Club)
            </h1>
            <p className="font-medium text-dark lg:text-xl">
              Are you a student or an aspiring traveler looking to explore the
              world through educational opportunities abroad? At EAHAC, we
              understand that embarking on an international journey can be an
              exhilarating experience, but it also comes with its unique
              challenges and health considerations.
            </p>
          </div>
          <Image
            src="/images/ehac-logo.jpg"
            width={500}
            height={300}
            alt="ehac logo"
            className="rounded-xl shadow-xl hidden lg:block"
          />
        </div>
      </section>
      <WhoWeAre />
      <EhacServices />
      <GetInTouch />
    </>
  );
};

export default EhacPage;
