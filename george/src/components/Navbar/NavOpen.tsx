import React from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useAppContext } from "@/Hooks/Context";

const NavOpen = () => {
  const { handleCloseNav } = useAppContext();
  React.useEffect(() => {
    AOS.init();

    // Apply overflow hidden when NavOpen is active
    document.body.classList.add("overflowNav");

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.classList.remove("overflowNav");
    };
  }, []);
  return (
    <div className="absolute top-0 md:px-60 px-5 bg-black w-screen h-screen py-5 ">
      <div className="">
        <Navbar />
        <ul className="flex flex-col gap-6 justify-center items-center my-12 py-12">
          <Link href={"#works"}>
            <li
              onClick={handleCloseNav}
              className="md:text-9xl text-6xl flex items-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              <span className="block w-[20px] md:w-[30px] mr-2 md:mr-5 h-0.5 bg-[#ffffffbe] my-4"></span>
              Works
            </li>
          </Link>
          <li
            onClick={handleCloseNav}
            className="md:text-9xl text-6xl flex items-center"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            Resume{" "}
            <span className="block w-[20px] md:w-[30px] ml-2 md:mr-5 h-0.5 bg-[#ffffffbe] my-4"></span>
          </li>
          <Link href={"#contact"}>
            <li
              onClick={handleCloseNav}
              className="md:text-9xl text-6xl flex items-center"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              {" "}
              <span className="block w-[20px] md:w-[30px] mr-2 md:mr-5 h-0.5 bg-[#ffffffbe] my-4"></span>
              Contact
            </li>
          </Link>
        </ul>

        <div className="absolute bottom-0 left-0 right-0 flex md:flex-row justify-around gap-5 flex-col items-center pb-10">
          <ul className="flex gap-3">
            <li className="cursor-pointer">X</li>
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">WhatsApp</li>
            <li className="cursor-pointer">Gmail</li>
          </ul>

          <p className="text-center py-5  ">
            Designed & Developed by
            <a
              href="https://github.com/inuEnike"
              className="hover:text-green-700"
            >
              {" "}
              Inu George
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavOpen;
