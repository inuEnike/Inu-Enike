import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdClose } from "react-icons/io";
import { useAppContext } from "@/Hooks/Context";

const Navbar = () => {
  const { open, handleNav } = useAppContext();
  React.useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <nav
      className="flex items-center justify-between sticky"
      data-aos="fade-down"
      data-aos-duration="1300"
      data-aos-delay="300"
      data-aos-easing="ease-in-out"
    >
      <section>
        <h2 className="italic md:text-xl text-lg">Inu George Enike</h2>
      </section>
      <section onClick={handleNav} className="cursor-pointer">
        {open ? <IoMdClose size={50} /> : <RxHamburgerMenu size={50} />}
      </section>
    </nav>
  );
};

export default Navbar;
