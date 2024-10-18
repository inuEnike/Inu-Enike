import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-3 text-center mt-30 pt-20 items-center">
      <h2 className="italic md:text-xl text-lg">Inu George Enike</h2>

      <p className="text-center py-5 hidden md:block">
        Designed & Developed by Inu George
      </p>
      <ul className="flex items-center text-center gap-3">
        <li className="cursor-pointer underline-before">X</li>
        <li className="cursor-pointer underline-before">Facebook</li>
        <li className="cursor-pointer">WhatsApp</li>
        <li className="cursor-pointer">
          <a href="mailto:inuenike@gmail.com">Gmail</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
