import React from "react";
import { FloatingDock } from "../components/floating-dock";
export const Tools = () => {
  const links = [
    {
      title: "React Js",
      icon: <img src="/react.svg" />,
    },

    {
      title: "HTML",
      icon: <img src="/html.svg" />,
    },
    {
      title: "CSS",
      icon: <img src="/css.svg" />,
    },
    {
      title: "JavaScript",
      icon: <img src="/js.svg" />,
    },
    {
      title: "Tailwind",
      icon: <img src="/tw.svg" />,
    },

    {
      title: "Framer Motion",
      icon: <img src="/framer.svg" />,
    },
    {
      title: "Motion One",
      icon: <img src="/one.svg" />,
    },
  ];
  return (
    <section className="mt-10 mb-12">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </section>
  );
};
