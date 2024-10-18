import Image from "next/image";
import React from "react";
import Alpha from "../../assets/Alpha.png";
import Expense from "../../assets/Expense.png";
import Kreston from "../../assets/kreston.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  React.useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="md:my-20 md:py-20" id="works">
      <div
        className="text-center"
        data-aos="slide-up"
        data-aos-duration="1300"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <h2 className="text-4xl">Here are some projects I've worked on.</h2>
      </div>
      <div className="mt-10 py-10 gap-5 grid sm:grid-cols-2 place-items-center md:grid-cols-2">
        {/* Project 1 */}
        <div
          className="flex flex-col md:flex-row mb-10 "
          data-aos="fade-left"
          data-aos-duration="1300"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <div className="image relative overflow-hidden">
            <Image
              src={Alpha}
              width={400}
              height={500}
              alt="ACM Shipping Co. project"
              className="rounded-md hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="text py-5 md:pl-5 md:max-w-[50%]">
            <p className="md:text-3xl text-2xl md:text-left text-center">
              ACM Shipping Co.
            </p>
            <p className="mt-3 text-sm md:block hidden">
              A responsive web application designed for handling consignments
              and shipments, offering users a seamless experience in tracking
              and managing their deliveries.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="flex flex-col md:flex-row mb-10"
          data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <div className="image relative overflow-hidden">
            <Image
              src={Expense}
              width={400}
              height={500}
              alt="Expensify project"
              className="rounded-md hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="text py-5 md:pl-5 md:max-w-[50%]">
            <p className="md:text-3xl md:text-left text-center text-2xl">
              Expensify
            </p>
            <p className="mt-3 text-sm md:block hidden">
              A responsive web application where students can buy and transfer
              coins to other students.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="flex flex-col md:flex-row mb-10"
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <div className="image relative overflow-hidden">
            <Image
              src={Kreston}
              width={400}
              height={500}
              alt="Kreston Bank project"
              className="rounded-md hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="text py-5 md:pl-5 md:max-w-[50%]">
            <p className="md:text-3xl md:text-left text-center text-2xl">
              Kreston Bank
            </p>
            <p className="mt-3 text-sm md:block hidden">
              A "Bank-Like" responsive website. still ongoing...
            </p>
          </div>
        </div>

        {/* Project 4 */}
        <div
          className="flex flex-col md:flex-row mb-10"
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <div className="image relative overflow-hidden">
            <Image
              src={Alpha}
              width={400}
              height={500}
              alt="Kreston Bank project"
              className="rounded-md hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="text py-5 md:pl-5 md:max-w-[50%]">
            <p className="md:text-3xl md:text-left text-center text-2xl">
              Kreston Bank
            </p>
            <p className="mt-3 text-sm md:block hidden">
              A "Bank-Like" responsive website. still ongoing...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
