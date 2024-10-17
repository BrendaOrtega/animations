import React, { ReactNode, useRef } from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { motion, useInView } from "framer-motion";
const words = `  Aprende animaciones web con React`;

export const Hero = () => {
  return (
    <section className=" flex flex-wrap md:flex-nowrap items-center min-h-[84vh]  bg-cover bg-center ">
      <div className="w-full px-6 md:px-0 lg:max-w-7xl mx-auto">
        <div className="w-full md:w-[60%]">
          <TextGenerateEffect words={words} />
          <p className="text-iron dark:text-metal text-center md:text-left text-lg lg:text-2xl font-light dark:font-extralight mt-3 mb-12">
            Construye 12 componentes para tus proyectos web
          </p>
          <PrimaryButton className="w-full md:w-auto">
            Comprar <img src="/cursor.svg" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export const ScrollReveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        transform: isInView ? "translateY(0)" : "translateY(100px)",
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
