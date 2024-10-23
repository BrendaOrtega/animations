import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Switch } from "@headlessui/react";
import { ToggleButton } from "./components/ToggleButton";
import { PrimaryButton } from "./components/PrimaryButton";
import { Hero } from "./home/hero";
import { Why } from "./home/why";
import { Animations } from "./components/Animations";
import { Pricing } from "./home/Pricing";
import { Tools } from "./home/Tools";
import { Teacher } from "./home/Teacher";
import { Faq } from "./home/Faq";
import { Footer } from "./home/Footer";
import { Testimonials } from "./home/Testimonial";
import { Example } from "./home/Example";
import { ScrollBanner } from "./home/ScrollBanenr";

function App() {
  return (
    <main id="main" className="  bg-white dark:bg-dark overflow-hidden">
      <nav className="fixed h-16  bg-white/40 dark:bg-dark/40 backdrop-blur-md z-[100] w-full  px-6 md:px-[6%] lg:px-0 ">
        <div className="xl:max-w-7xl justify-between items-center h-16 mx-auto flex">
          <a>
            <img className="h-10" src="/Logo.png" alt="logo" />
          </a>
          <ToggleButton />
        </div>
      </nav>
      <Hero />
      <ScrollBanner />
      <section className="w-full px-6 md:px-[6%] xl:px-0 xl:max-w-7xl mx-auto ">
        <Why />
        <Animations />
        <Testimonials />
        <Pricing />
        <Teacher />
        <Faq />
      </section>
      <Footer />
    </main>
  );
}

export default App;
