import React, { useState } from "react";
import contactImage from "@/assets/virtual-assistant.svg";
import Image from "next/image";
import { sendMail, IData } from "@/services/mail.services";

const Contact = () => {
  const [data, setData] = useState<IData>({
    fullName: "",
    tel: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const [loading, setLoading] = React.useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await sendMail(data); // Call the sendMail function
    setLoading(false);
  };

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
        <form onSubmit={handleSubmit} className="w-full my-12 md:flex-1">
          <div className="flex flex-col w-full">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g., John Doe"
              value={data.fullName}
              onChange={handleChange}
              className="py-2 px-2 rounded-sm my-3 text-black focus:outline-none"
              required
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
                value={data.email}
                onChange={handleChange}
                className="py-2 px-2 rounded-sm my-3 text-black focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="tel">Tel</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="e.g., +123456789"
                value={data.tel}
                onChange={handleChange}
                className="py-2 px-2 rounded-sm my-3 text-black focus:outline-none"
                required
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
              value={data.message}
              onChange={handleChange}
              className="py-2 px-2 rounded-sm my-3 text-black focus:outline-none"
              required
            ></textarea>
          </div>

          {loading ? (
            <button
              type="submit"
              className="text-center bg-blue-500 w-full py-2 rounded-md"
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="text-center bg-blue-500 w-full py-2 rounded-md"
            >
              Submit
            </button>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;
