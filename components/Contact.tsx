import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";
import ScrollRevealSection from "./ScrollRevealSection";

const Contact = ({
  email = "info@section20consult.com",
  title,
  description = " We're eager to hear from you and help you start your journey towards success. For inquiries, fill out the form below, email us at",
}: {
  email: string;
  description?: string;
  title?: string;
}) => {
  return (
    <>
      <ScrollRevealSection>
        <div id="contact" className="my-10 text-background">
          <div className="container max-w-6xl mx-auto bg-textColor p-20 rounded-md shadow-2xl">
            {title === "ehac" ? (
              <h2 className="text-2xl lg:text-4xl uppercase font-semibold lg:text-center">
                Get In Touch!
              </h2>
            ) : (
              <h2 className="text-2xl lg:text-4xl uppercase font-semibold lg:text-center">
                Reach Out Today!
              </h2>
            )}
            <p className="text-base lg:text-lg mt-2 font-medium text-left">
              {description}{" "}
              <Link
                className="font-bold text-rose-300"
                href="mailto:info@section20consult.com"
              >
                {email}
              </Link>
              , or give us a call at{" "}
              <Link href="tel:+36705780067" className="font-bold text-rose-300">
                +36705780067
              </Link>{" "}
              or{" "}
              <Link
                href="tel:+233544262825"
                className="font-bold text-rose-300"
              >
                +233544262825
              </Link>
              . Our office is located at Lapaz, Accra, Ghana. Let&apos;s connect
              and discuss how we can support your aspirations.
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
                  Subscribe <AiOutlineSend />
                </span>
              </button>
            </form>
          </div>
        </div>
      </ScrollRevealSection>
    </>
  );
};

export default Contact;
