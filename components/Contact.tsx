import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="my-10 text-background">
      <div className="container max-w-6xl mx-auto bg-textColor p-20 rounded-md shadow-2xl">
        <h2 className="text-4xl  uppercase font-semibold text-center">
          Reach Out Today!
        </h2>
        <p className="text-base lg:text-lg mt-2 font-medium text-left">
          We&apos;re eager to hear from you and help you start your journey
          towards success. For inquiries, fill out the form below, email us at{" "}
          <Link
            className="font-bold text-rose-300"
            href="mailto:info@example.com"
          >
            info@section20consult.com
          </Link>
          , or give us a call at{" "}
          <span className="font-bold text-rose-300">+36705780067</span> or{" "}
          <span className="font-bold text-rose-300">+233544262825</span> . Our
          office is located at Lapaz, Accra, Ghana. Let&apos;s connect and
          discuss how we can support your aspirations.
        </p>

        <form className="mt-5 flex flex-col lg:grid lg:grid-cols-3  lg:justify-center lg:items-end gap-5">
          <div className="flex flex-col">
            <label
              className="font-bold tracking-wider text-lg lg:text-2xl"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border-2 px-4 py-2 rounded-md outline-none placeholder:text-textColor text-textColor font-semibold"
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              className="font-bold tracking-wider text-lg lg:text-2xl"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-2 px-4 py-2 rounded-md outline-none placeholder:text-textColor text-textColor font-semibold"
              type="email"
              name="email"
              id="email"
              placeholder="someone@gmail.com"
              required
            />
          </div>
          <button
            className="bg-accent text-background font-semibold tracking-wider p-3 rounded-md  w-full  uppercase text-center  hover:opacity-90"
            type="submit"
          >
            <span className="flex text-center justify-center items-center gap-4">
              Send <AiOutlineSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
