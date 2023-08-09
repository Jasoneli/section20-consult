import Image from "next/image";
import Link from "next/link";

const Pay = () => {
  return (
    <section className="bg-primary text-background mt-14 py-10">
      <div className="max-w-6xl p-4 container mx-auto">
        <h2 className="text-2xl lg:text-4xl  uppercase font-bold my-8  text-center">
          Payment Methods
        </h2>

        <div className="flex flex-col justify-between items-center lg:flex-row gap-10">
          <div className="card">
            <Image
              src="/images/paypal-logo.png"
              width={200}
              height={200}
              alt="paypal logo"
              className="rounded-xl"
            />
            <div className="mt-5 text-center">
              <div>
                <h3 className="text-xl font-bold">Account Name:</h3>
                <h5 className="text-base  hover:text-rose-600">
                  Paypal Account
                </h5>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold">Account Number: </h3>
                <h5 className="text-base  hover:text-rose-600">
                  Account number
                </h5>
              </div>
              <Link
                href="#"
                className="bg-rose-600 w-full block mt-4 p-2 font-bold text-lg rounded-md shadow-2xl tracking-wider hover:bg-background hover:text-rose-600 transition-all duration-75"
              >
                Pay
              </Link>
            </div>
          </div>
          <div className="card">
            <Image
              src="/images/Wise.png"
              width={200}
              height={200}
              alt="paypal logo"
              className="rounded-xl"
            />
            <div className="mt-5 text-center">
              <div>
                <h3 className="text-xl font-bold">Account Name:</h3>
                <h5 className="text-base  hover:text-rose-600">
                  Paypal Account
                </h5>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold">Account Number: </h3>
                <h5 className="text-base hover:text-rose-600 ">
                  Account number
                </h5>
              </div>
              <Link
                href="#"
                className="bg-rose-600 w-full block mt-4 p-2 font-bold text-lg rounded-md shadow-2xl tracking-wider hover:bg-background hover:text-rose-600 transition-all duration-75"
              >
                Pay
              </Link>
            </div>
          </div>

          <div className="card">
            <Image
              src="/images/mtngh.png"
              width={200}
              height={200}
              alt="paypal logo"
              className="rounded-xl"
            />
            <div className="mt-5 text-center">
              <div>
                <h3 className="text-xl font-bold">Account Name:</h3>
                <h5 className="text-base  hover:text-rose-600">
                  Paypal Account
                </h5>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold">Account Number: </h3>
                <h5 className="text-base  hover:text-rose-600">
                  Account number
                </h5>
              </div>
              <Link
                href="#"
                className="bg-rose-600 w-full block mt-4 p-2 font-bold text-lg rounded-md shadow-2xl tracking-wider hover:bg-background hover:text-rose-600 transition-all duration-75"
              >
                Pay
              </Link>
            </div>
          </div>

          <div className="card">
            <Image
              src="/images/cal-logo.jpg"
              width={200}
              height={200}
              alt="paypal logo"
              className="rounded-xl"
            />
            <div className="mt-5 text-center">
              <div>
                <h3 className="text-xl font-bold">Account Name:</h3>
                <h5 className="text-base  hover:text-rose-600">
                  Paypal Account
                </h5>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold">Account Number: </h3>
                <h5 className="text-base hover:text-rose-600">
                  Account number
                </h5>
              </div>
              <Link
                href="#"
                className="bg-rose-600 w-full block mt-4 p-2 font-bold text-lg rounded-md shadow-2xl tracking-wider hover:bg-background hover:text-rose-600 transition-all duration-100"
              >
                Pay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pay;
