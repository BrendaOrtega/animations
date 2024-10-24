import React from "react";
import { Marquee } from "../components/Banners";

export const ScrollBanner = () => {
  return (
    <>
      <Marquee className="lacquer-regular bg-dark dark:bg-white">
        No más sitios web estáticos <span className="mx-3">🪄</span> Agrega
        animaciones a tu sitio web
        <span className="mx-3">🧙🏻</span> Personaliza tus animaciones
        <span className="mx-3">🎃</span> Crea tus propios componentes
        <span className="mx-3">🎛️</span> Haz a tu sitio web diferente{" "}
        <span className="mx-3">🎨</span> React + Framer Motion = 🧩{" "}
      </Marquee>
      <Marquee reversed className="bg-fish lacquer-regular text-white!">
        Scroll Animations<span className="mx-3">🎐</span> Parallax
        <span className="mx-3">💻</span> Efectos 3d{" "}
        <span className="mx-3">🎯</span> Drawers<span className="mx-3">👀</span>{" "}
        Galerías<span className="mx-3">🏞️</span> Cards dinámicas{" "}
        <span className="mx-3">🚀</span>Text effects{" "}
        <span className="mx-3">💬</span> Modales{" "}
        <span className="mx-3">🔥</span>
        Draggable elements <span className="mx-3">👆🏻</span>Sliders{" "}
        <span className="mx-3">🎑</span> Botónes{" "}
        <span className="mx-3">🔥</span>
      </Marquee>
    </>
  );
};
