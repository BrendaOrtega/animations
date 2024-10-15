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

function App() {
  return (
    <main className="">
      <section className="max-w-7xl mx-auto">
        <nav className="bg-red-500 h-16">
          <span>logo</span>
          <ToggleButton />
        </nav>
        <Hero />
        <Tools />
        <Why />
        <Animations />
        <Pricing />
        <Teacher />
        <Faq />
        <Footer />
      </section>
    </main>
  );
}

export default App;
