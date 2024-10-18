import React from "react";
import contactImage from "@/assets/virtual-assistant.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="my-16" id="contact">
      <div className="">
        <h3 className="text-3xl md:text-8xl text-center tracking-widest">
          Let's work together
        </h3>
      </div>
      <section className="flex justify-center gap-10 items-center my-5">
        <div className="md:block hidden">
          <Image
            src={contactImage}
            alt="contact-img"
            width={650}
            height={100}
          />
        </div>
        <form action="" className="w-full my-12 md:flex-1">
          <div className="flex flex-col w-full">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="e.g., John Doe"
              className="py-2 px-2 rounded-sm my-3 text-black focus:outline-none"
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g., johndoe@example.com"
                className="py-2 px-2 rounded-sm my-3 text-black focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="tel">Tel</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="e.g., +123456789"
                className="py-2 px-2 rounded-sm my-3 text-black focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-5">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              cols={50}
              rows={10}
              placeholder="Your message here..."
              className="py-2 px-2 rounded-sm my-3 text-black focus:outline-none"
            ></textarea>
          </div>

          <button className="text-center bg-blue-500 w-full py-2 rounded-md">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
