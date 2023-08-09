import Link from "next/link";

const Support = () => {
  return (
    <section id="support" className="my-20 bg-rose-800 text-background">
      <div className="max-w-6xl py-10 container mx-auto">
        <h2 className="text-2xl lg:text-4xl  uppercase font-bold my-8  text-center">
          Call to Support Us
        </h2>
        <p className="text-center text-base lg:text-lg my-5 font-semibold ">
          We call on individuals, churches, private companies, governmental and
          NGOs to support the vision.
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-14 lg:gap-20 mt-8 p-4">
          <div>
            <h3 className="font-bold text-xl">Clement Kojo Acquah</h3>
            <small className="font-semibold">Founder & CEO</small>
            <p>
              <Link className="hover:opacity-80" href="tel:+36705780067">
                +36705780067
              </Link>
            </p>
            <p>
              <Link
                className="hover:opacity-80"
                href="mailto:ckacquah@section20consult.com"
              >
                ckacquah@section20consult.com
              </Link>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl">Emmanuel Osei</h3>
            <small className="font-semibold">Deputy Director</small>
            <p>
              <Link className="hover:opacity-80" href="tel: +233554807083">
                +233554807083
              </Link>
            </p>
            <p>
              <Link
                className="hover:opacity-80"
                href="mailto:infoateahac@gmail.com"
              >
                infoateahac@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
