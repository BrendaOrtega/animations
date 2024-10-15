import React from "react";
export const Animations = () => {
  return (
    <section className="my-[120px]">
      <h2 className="text-dark text-4xl md:text-5xl	text-evil font-bold text-center">
        ¿Qué componentes vamos a construir? 🎨
      </h2>
      <p className="text-iron text-2xl font-light text-center mt-4">
        A lo largo de 10 unidades y más de 50 lecciones, aprenderás
      </p>
      <div className="grid grid-cols-3 gap-16 mt-20">
        <Card title="Flip words" />
        <Card title="Flip words" />
        <Card title="Flip words" />
        <Card title="Flip words" />
        <Card title="Flip words" />
        <Card title="Flip words" />
        <Card title="Flip words" />
        <Card title="Flip words" />
        <Card title="Flip words" />
      </div>
    </section>
  );
};

const Card = ({ title, image }: { image?: string; title: string }) => {
  return (
    <section className="col-span-1">
      <div className="bg-red-500 w-full h-[280px] rounded-lg"></div>
      <h3 className="font-semibold mt-3 text-2xl">{title}</h3>
    </section>
  );
};
