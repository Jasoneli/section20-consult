import Image from "next/image";
import Link from "next/link";

const Issues = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-2xl lg:text-4xl  uppercase font-bold my-8  text-center">
          Having Issues or Need Help?
        </h2>
        <p className="text-left lg:text-center text-base my-5 font-semibold ">
          We understand that sometimes things may not go as smoothly as planned.
          Whether you&apos;re facing technical problems, have questions about
          our services, or need to report a concern, we&apos;re here to listen
          and assist. Our dedicated support team is ready to address your issues
          promptly and find a resolution that meets your satisfaction. Please
          don&apos;t hesitate to reach out &mdash; your feedback is invaluable
          in helping us improve our platform.
        </p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-10 text-center">
          <div className="flex flex-col gap-5 items-center">
            <Image
              className="rounded-full border-2 border-textColor object-cover shadow-2xl shadow-secondary"
              src="/images/team-1.jpg"
              width={170}
              height={170}
              alt="ceo"
            />
            <div>
              <h3 className="font-bold text-xl">Clement Kojo Acquah</h3>
              <small className="text-[#7d7c83] font-semibold">
                Founder & CEO
              </small>
              <p>
                <Link className="hover:text-accent" href="tel:+36705780067">
                  +36705780067
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent"
                  href="mailto:ckacquah@section20consult.com"
                >
                  ckacquah@section20consult.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Image
              className="rounded-full border-2 border-textColor object-cover shadow-2xl shadow-secondary"
              src="/images/team-3.jpg"
              width={150}
              height={150}
              alt="ceo"
            />
            <div>
              <h3 className="font-bold text-xl">Ebenezer Ngoah</h3>
              <small className="text-[#7d7c83] font-semibold">
                General Manager
              </small>
              <p>
                <Link className="hover:text-accent" href="tel:+233543955902">
                  +233544262825
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent"
                  href="mailto:Oathstill@yahoo.co.uk"
                >
                  ebenngoah@section20consult.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-5 items-center">
            <Image
              className="rounded-full border-2 border-textColor object-cover shadow-2xl shadow-secondary"
              src="/images/teaml-2.jpg"
              width={150}
              height={150}
              alt="ceo"
            />
            <div>
              <h3 className="font-bold text-xl">Elizabeth Kessie</h3>
              <small className="text-[#7d7c83] font-semibold">
                Ghana Branch Manager
              </small>
              <p>
                <Link className="hover:text-accent" href="tel:+233543955902">
                  +233543955902
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent"
                  href="mailto:Oathstill@yahoo.co.uk"
                >
                  elizkessie@section20consult.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Issues;
