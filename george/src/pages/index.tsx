import localFont from "next/font/local";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import NavOpen from "../components/Navbar/NavOpen";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect } from "react";
import { useAppContext } from "../Hooks/Context";
import Projects from "../components/Projects/Projects";
import Stacks from "@/components/Stacks/Stacks";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Ogg = localFont({
  src: "./fonts/Ogg-Regular.ttf",
  variable: "--font-Ogg-Regular",
  weight: "100 900",
});

export default function Home() {
  const { open } = useAppContext();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (typeof window !== "undefined" && scroll) {
      scroll.update(); // Ensure scroll is initialized only on the client side
    }
  }, [scroll]);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${Ogg.variable} font-serif`}
      data-scroll-section
    >
      <main
        className="font-serif py-10 md:px-60 px-5"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="6"
      >
        <Navbar />
        <Hero />
        <Projects />
        <Stacks />
        <Contact />
        <Footer />
      </main>
      {open && <NavOpen />}
    </div>
  );
}
