import Image from "next/image";
import Link from "next/link";

const AboutUS = () => {
  return (
    <section id="about" className="my-10">
      <div className="container max-w-6xl p-4 mx-auto">
        <h2 className="text-4xl text-textColor uppercase font-semibold text-center">
          About us
        </h2>
        <article className="flex flex-col  gap-8 p-4 justify-center items-center">
          <p className="text-base text-center lg:text-left order-1 lg:order-none text-slate-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            est consectetur alias incidunt quo facere possimus ex dolorum
            officia commodi. Company assists foreign applicants in obtaining
            higher education in Ukraine. We are one of the leading companies in
            the industry. We work with 33 countries. We are not an intermediary,
            we have direct contracts with universities. We graduated more than
            13 000 students. The Business Center “INGEK” is a team of experts
            who help foreign applicants get higher education in Ukraine. Thanks
            to our diligent training for 17 years, the best universities have
            chosen to work with us. Today we offer you admission and training in
            accordance with the European standards.
          </p>

          <Image
            src="/images/board.jpg"
            width={500}
            height={500}
            alt="board"
            className="rounded-md shadow-md"
          />
        </article>
        <Link
          className="px-4 py-2 font-semibold tracking-wide text-xl  hover:translate-y-[-2px] duration-200 transition-all flex justify-center items-center text-center mt-4 underline uppercase text-red-500 hover:text-blue-700"
          href="/services"
        >
          View our services
        </Link>
      </div>
    </section>
  );
};

export default AboutUS;
