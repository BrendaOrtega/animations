import React from "react";
import { ScrollReveal } from "../home/hero";
import { twMerge } from "tailwind-merge";
export const Animations = () => {
  return (
    <ScrollReveal>
      <section className="my-[120px]">
        <h2 className="text-dark dark:text-white text-3xl md:text-5xl	text-evil font-bold text-center">
          ¿Qué componentes vamos a construir? 🎨
        </h2>
        <p className="text-iron dark:text-metal font-light text-lg md:text-2xl  text-center mt-4">
          A lo largo de 10 unidades y más de 50 lecciones, aprenderás
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
          <Card
            title="Flip words"
            className="bg-flipWords hover:bg-flipWordsGif"
          />
          <Card
            title="Swipe Gallery"
            className="bg-draggable hover:bg-draggableGif"
          />
          <Card title="3D card" className="bg-cards hover:bg-cardsGif" />
          <Card title="Hero highlight" />
          <Card title="Basic Scroll" />
          <Card title="Hero Parallax" />
          <Card title="Animated tabs" />
          <Card title="Link preview" />
          <Card title="Moving border" />
          <Card title="Images slider" />
          <Card title="Draggable list" />
          <Card title="Scroll cards" />
        </div>
      </section>
    </ScrollReveal>
  );
};

const Card = ({
  title,
  image,
  className,
}: {
  image?: string;
  title: string;
  className?: string;
}) => {
  return (
    <section className="col-span-1">
      <div
        className={twMerge(
          "bg-cover bg-center w-full h-[240px] md:h-[280px] rounded-lg transition-all cursor-pointer dark:border dark:border-lightGray/10",
          className
        )}
      ></div>
      <h3 className="font-semibold text-dark dark:text-white  mt-3 text-2xl">
        {title}
      </h3>
    </section>
  );
};
