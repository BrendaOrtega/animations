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

function App() {
  return (
    <main id="main" className="  bg-white dark:bg-dark">
      <nav className=" h-16 flex items-center justify-between w-full px-6 md:px-0 lg:max-w-7xl mx-auto">
        <a>
          <img className="h-10" src="/Logo.png" alt="logo" />
        </a>
        <ToggleButton />
      </nav>
      <Hero />
      <Tools />
      <section className="w-full px-6 md:px-0 lg:max-w-7xl mx-auto ">
        <Why />
        <Animations />
        <Testimonials />
        <Pricing />
        <Teacher />
        <Faq />
        <Footer />
        {/* <Example /> */}
      </section>
    </main>
  );
}

export default App;
