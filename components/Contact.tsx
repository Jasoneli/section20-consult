"use client";

import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-hot-toast";

// import ScrollRevealSection from "./ScrollRevealSection";

interface FormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  message: string;
}

const Contact = ({
  email = "info@section20consult.com",
  title,
  description = " We're eager to hear from you and help you start your journey towards success. For inquiries, fill out the form below, email us at",
}: {
  email?: string;
  description?: string;
  title?: string;
}) => {
  const { register, handleSubmit, formState, reset } = useForm<FormData>();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail: any = (e: FormEvent) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        result => {
          toast.success("Email Sent Successfully", { duration: 6000 });
          reset();
        },
        error => {
          toast.error("Something went wrong. Try again!", { duration: 6000 });
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section>
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

            <form
              className="mt-5 flex flex-col gap-5 lg:w-3/4 mx-auto"
              onSubmit={handleSubmit(sendEmail)}
              ref={form}
            >
              <div className="flex flex-col">
                <label className="font-bold tracking-wider" htmlFor="firstname">
                  First name <span className="text-red-300 ">*</span>
                </label>
                <input
                  className="border-2 px-4 py-2 rounded-md outline-none placeholder:text-dark text-textColor"
                  type="text"
                  id="firstName"
                  placeholder="John"
                  required
                  {...register("firstName", { required: true })}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold tracking-wider" htmlFor="name">
                  Last name <span className="text-red-300 ">*</span>
                </label>
                <input
                  className="border-2 px-4 py-2 rounded-md outline-none placeholder:text-dark text-textColor"
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  required
                  {...register("lastName", { required: true })}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold tracking-wider" htmlFor="email">
                  Email <span className="text-red-300 ">*</span>
                </label>
                <input
                  className="border-2 px-4 py-2 rounded-md outline-none placeholder:text-dark text-textColor"
                  type="email"
                  id="email"
                  placeholder="someone@gmail.com"
                  required
                  {...register("emailAddress", { required: true })}
                />
              </div>
              {/* <div className="flex flex-col">
                <label className="font-bold tracking-wider" htmlFor="phone">
                  Phone number <span className="text-red-300 ">*</span>
                </label>
                <input
                  className="border-2 px-4 py-2 rounded-md outline-none placeholder:text-dark text-textColor"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+233544262825"
                  required
                />
              </div> */}
              <div className="flex flex-col">
                <label className="font-bold tracking-wider" htmlFor="message">
                  What can we help you with?
                  <span className="text-red-300 ">*</span>
                </label>
                <textarea
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="Write your message here!"
                  className="border-2 px-4 py-2 rounded-md outline-none placeholder:text-dark text-textColor"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <button
                className="bg-accent text-background font-semibold tracking-wider p-3 rounded-md  w-full  uppercase text-center  hover:bg-rose-800 duration-100 transition-all"
                type="submit"
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? (
                  <span className="flex text-center justify-center items-center gap-4">
                    Submitting...
                  </span>
                ) : (
                  <span className="flex text-center justify-center items-center gap-4">
                    Submit <AiOutlineSend />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
