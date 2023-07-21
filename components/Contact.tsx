import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="mt-10 bg-blue-800 text-textGray py-10">
      <div className="container max-w-6xl p-4 mx-auto">
        <h2 className="text-4xl  uppercase font-semibold text-center">
          Contact us
        </h2>
        <p className="text-center text-lg mt-2 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          illum.
        </p>
        <div>
          <form className="flex flex-col justify-center items-center gap-5 mt-8">
            <div className="flex flex-col gap-2 w-full">
              <label
                className="font-bold tracking-wider text-2xl"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-1/2 border-2 px-4 py-2 rounded-md outline-none placeholder:text-gray-400 text-textColor"
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="font-bold tracking-wider text-2xl"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-1/2 border-2 px-4 py-2 rounded-md outline-none placeholder:text-gray-400 text-textColor"
                type="email"
                name="email"
                id="email"
                placeholder="someone@gmail.com"
                required
              />
            </div>
            <button
              className="bg-textColor font-semibold tracking-wider p-3 rounded-md self-start w-1/2 uppercase text-center hover:opacity-80"
              type="submit"
            >
              <span className="flex text-center justify-center items-center gap-4">
                Send <AiOutlineSend />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
