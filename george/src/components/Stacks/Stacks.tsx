import React from "react";
import StackIcon from "tech-stack-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Stacks = () => {
  React.useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="md:my-20 md:py-20 flex md:flex-row flex-col justify-between">
      <div
        className="writeUps md:w-[50%]"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <div className="my-5">
          <p className="text-2xl ">My Skill and Technologies</p>
        </div>
        <p className="leading-10">
          I have a strong focus on delivering efficient, scalable solutions
          tailored to client needs, and I enjoy tackling complex challenges that
          require innovative thinking. From building RESTful APIs to
          implementing real-time features, I'm adept at full-cycle development
          and I'm passionate about keeping up with the latest trends in
          technology.
        </p>
        <p className="leading-10 mt-10">
          I've worked on multiple projects, building out UI with close attention
          to details. I've also had the opportunity to work with different
          frameworks like React and Vue, while constantly learning to improve my
          skillsets.
        </p>
      </div>
      {/* <div className="h-full items-center">|</div> */}
      <div
        className="md:w-[70%] my-5"
        data-aos="fade-left"
        data-aos-duration="1300"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <div className="grid md:grid-cols-4 items-start grid-cols-4 place-items-center my-5 gap-6">
          <StackIcon name="html5" className="md:w-[50px] w-[40px]" />
          <StackIcon name="css3" className="md:w-[50px] w-[40px]" />
          <StackIcon name="tailwindcss" className="md:w-[50px] w-[40px]" />
          <StackIcon name="js" className="md:w-[50px] w-[40px]" />
          <StackIcon name="reactjs" className="md:w-[50px] w-[40px]" />
          <StackIcon name="nodejs" className="md:w-[50px] w-[40px]" />
          <StackIcon name="django" className="md:w-[50px] w-[40px]" />
          <StackIcon name="figma" className="md:w-[50px] w-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default Stacks;
