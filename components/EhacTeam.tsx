import Image from "next/image";
import Link from "next/link";

const EhacTeam = () => {
  return (
    <section>
      <div className="container mx-auto max-w-6xl p-4">
        <h2 className="text-2xl lg:text-4xl  uppercase font-bold  lg:text-center">
          Ehac Team
        </h2>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-10">
          <div className="flex flex-col gap-5 items-center">
            <Image
              className="rounded-full border-2 border-textColor object-cover shadow-2xl shadow-secondary"
              src="/images/team-1.jpg"
              width={200}
              height={200}
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
          <div className="flex flex-col  gap-5 items-center">
            <Image
              className="rounded-full border-2 border-textColor object-cover shadow-2xl shadow-secondary"
              src="/images/ehac-team.jpg"
              width={200}
              height={200}
              alt="ehac pic"
            />
            <div>
              <h3 className="font-bold text-xl">Emmanuel Osei</h3>
              <small className="text-[#7d7c83] font-semibold">
                Federation of Helping Hands
              </small>
              <p>
                <Link className="hover:text-accent" href="tel:+233554807083">
                  +233554807083
                </Link>
              </p>
              <p>
                <Link
                  className="hover:text-accent"
                  href="mailto:Oathstill@yahoo.co.uk"
                >
                  infoateahac@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Image
              className="rounded-full border-2 border-textColor object-cover shadow-2xl shadow-secondary"
              src="/images/team-3.jpg"
              width={200}
              height={200}
              alt="ceo"
            />
            <div>
              <h3 className="font-bold text-xl">Ebenezer Ngoah</h3>
              <small className="text-[#7d7c83] font-semibold">
                Vice President
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
                  info@section20consult
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EhacTeam;
