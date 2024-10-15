import React from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import { TextGenerateEffect } from "../components/text-generate-effect";

const words = `  Aprende animaciones web con React
`;

export const Hero = () => {
  return (
    <section className="bg-white flex items-center min-h-[80vh]">
      <div className="w-[60%]">
        <TextGenerateEffect words={words} />
        <p className="text-iron text-2xl font-light mt-3 mb-12">
          Construye 12 componentes para tus proyectos web
        </p>
        <PrimaryButton>
          Comprar <img src="/cursor.svg" />
        </PrimaryButton>
      </div>
    </section>
  );
};
