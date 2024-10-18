import React, { useEffect } from "react";
import image from "../../../public/myPisure.png";
import image2 from "../../../public/image.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Hero = () => {
  const { scroll } = useLocomotiveScroll();

  const settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    fade: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (scroll) {
      scroll.update();
    }
  }, [scroll]);

  return (
    <>
      <section
        className="grid md:grid-cols-[65%_40%] gap-5 items-center place-items-center my-14"
        data-scroll-section
      >
        <div className="">
          <div
            className="md:text-[70px] text-[55px]"
            data-aos="zoom-in"
            data-aos-duration="1300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            <div
              className="flex items-center"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-5"
            >
              <span className="block w-[20px] md:w-[30px] mr-2 md:mr-5 h-0.5 bg-[#ffffffbe] my-4"></span>
              <h2 className="text-[#eee3e3]">Howdy 👋,</h2>
            </div>
            <h2
              className="text-[#eee3e3]"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="-5"
            >
              I'm George 🤗
            </h2>
          </div>
          <div
            className="md:text-xl text-[17px] font-light py-10 text-[#eee3e3] md:w-[60%]"
            data-aos="fade-right"
            data-aos-duration="1300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            <p className=" md:leading-[50px] leading-[40px]">
              I'm a dedicated Full Stack Developer with 2 years of hands-on
              experience, I specialize in creating dynamic, responsive web
              applications using the MERN stack (MongoDB, Express, React,
              Node.js) as well as Python and Django.
            </p>
            <p className="py-10 ">
              {" "}
              Check out my{" "}
              <span
                className=" cursor-pointer hover:text-green-400  
            text-[#55f846]"
              >
                Resume
              </span>{" "}
              to learn more about my skills
            </p>
          </div>
        </div>
        <div
          className="w-full md:block hidden bg-fixed"
          data-aos="fade-left"
          data-aos-duration="1300"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <Slider {...settings}>
            <div className="">
              <Image
                src={image2}
                alt="Inu Enike"
                width={400}
                height={130}
                className="rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={image}
                alt="Inu Enike"
                width={400}
                height={130}
                className="rounded-lg"
              />
            </div>
          </Slider>
        </div>
      </section>
      <div className="float-right text-lg relative inline-block cursor-pointer ">
        <a href="mailto:inuenike@gmail.com">
          <p className="underline-before">Let's talk</p>
        </a>
      </div>
    </>
  );
};

export default Hero;
