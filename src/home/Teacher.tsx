import React from "react";
import { ScrollReveal } from "./hero";

export const Teacher = () => {
  return (
    <ScrollReveal>
      <section className="flex overflow-hidden flex-wrap md:flex-nowrap bg-[#FAFAFF] dark:bg-transparent dark:border dark:border-white/10 pl-6 md:pl-12 gap-12 justify-between rounded-[40px] my-[100px]">
        <div className="w-full md:w-[50%] py-12">
          <span className="text-metal font-extralight  text-xl">
            ¿Quien será tu instructor? 🧑🏻‍🏫
          </span>
          <h2 className="font-semibold text-2xl md:text-5xl dark:text-white mb-2 mt-6 text-dark">
            Héctor Bliss
          </h2>
          <span className="text-metal/60 font-extralight ">
            Software Engineer & Lead Teacher
          </span>
          <p className="mt-12 text-iron dark:text-metal dark:font-extralight font-light ">
            Lorem ipsum dolor sit amet consectetur. Elit et vitae nunc
            pellentesque fusce hendrerit lacus. In nulla at sed tortor consequat
            et mi. Tincidunt nulla tempor bibendum libero quam aenean. Maecenas
            arcu dolor ac nunc orci mi fringilla enim diam. A quam amet
            suspendisse venenatis venenatis. Diam a adipiscing quis platea.
            Maecenas arcu dolor ac nunc orci mi fringilla enim diam. A quam amet
            suspendisse venenatis venenatis. Diam a adipiscing quis platea.
          </p>
        </div>
        <img className="w-[360px]" src="/titor-w.png" />
      </section>
    </ScrollReveal>
  );
};
