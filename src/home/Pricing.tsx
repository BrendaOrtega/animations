import { Button, Tab } from "@headlessui/react";
import React from "react";
import { PrimaryButton } from "../components/PrimaryButton";
export const Pricing = () => {
  return (
    <section className="text-center py-[80px] md:py-[120px] px-[10%] md:px-[12%]">
      <h2 className="text-4xl md:text-5xl	text-evil text-dark font-bold">
        ¿Qué incluye el curso? 🚀
      </h2>
      <p className="text-lg text-iron font-light mt-6 mb-16">
        A lo largo de 10 unidades y más de 50 lecciones, aprenderás
      </p>
      <MyTabs />
    </section>
  );
};

const MyTabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-0 md:gap-10 justify-between md:justify-center w-full md:w-[560px] mx-auto">
        <Tab
          data-headlessui-state="selected"
          className="border focus:outline-none data-[selected]:outline-fish data-[selected]:border-fish data-[hover]:bg-transparent data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white   bg-[#F9F9F9] dark:bg-lightGray/10 border-lightGray w-[48%] md:w-[260px] h-[160px] rounded-3xl flex items-center justify-center"
        >
          <div>
            <h3 className="text-lg md:text-2xl font-medium text-dark">
              Animaciones <br /> con React
            </h3>
            <p className="text-iron font-light text-sm mt-2">
              Incluye 3 mentorías
            </p>
          </div>
        </Tab>

        <Tab className="border focus:outline-none data-[selected]:outline-fish data-[selected]:border-fish  data-[hover]:bg-transparent data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white   bg-[#F9F9F9] dark:bg-lightGray/10 border-lightGray w-[48%] md:w-[260px] h-[160px] rounded-3xl flex items-center justify-center">
          <div className="relative">
            <img
              className="w-10 absolute -right-3 -top-10 md:-right-10 "
              src="/bonus.png"
            />
            <h3 className="text-lg md:text-2xl text-dark font-medium">
              Animaciones <br /> con HTML y CSS
            </h3>
            <p className="text-iron font-light text-sm mt-2">
              Incluye 2 mentorías
            </p>
          </div>
        </Tab>
      </Tab.List>
      <Tab.Panels className="flex justify-center mt-8 md:mt-10">
        <Tab.Panel data-selected>
          <div className="w-full md:w-[560px] bg-white  rounded-3xl p-8 md:p-12 text-left border-[1px] border-lightGray ">
            <h4 className="text-dark text-5xl font-bold	">
              $599{" "}
              <span className="text-xl font-normal text-iron dark:text-ironGray ">
                / MXN{" "}
              </span>
              <div className="text-base font-light text-iron dark:text-ironGray flex flex-col gap-4 mt-10">
                <p>📹 + 10 horas de lecciones en video</p>
                <p>💪🏻 Learnings y ejercicios por lección</p>
                <p>📚 Recursos extra </p>
                <p>💀 Acceso de por vida</p>
                <p>🚀 Actualizaciones futuras del curso</p>
                <p>🫶🏻 Acceso a la comunidad de Disscord</p>
              </div>
              <PrimaryButton className=" mt-12 w-full ">
                Comprar cursos
              </PrimaryButton>
            </h4>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          {" "}
          <div className="w-full md:w-[560px] bg-white rounded-3xl p-8 md:p-12 text-left border-[1px] border-lightGray ">
            <h4 className="text-dark text-5xl font-bold	">
              $499{" "}
              <span className="text-xl font-normal text-iron dark:text-ironGray ">
                / MXN{" "}
              </span>
              <div className="text-base font-light text-iron dark:text-ironGray flex flex-col gap-4 mt-10">
                <p>📹 + 10 horas de lecciones en video</p>
                <p>💪🏻 Learnings y ejercicios por lección</p>
                <p>📚 Recopilación de recursos extra </p>
                <p>💀 Acceso de por vida</p>
                <p>🚀 Actualizaciones futuras del curso</p>
                <p>🫶🏻 Acceso a la comunidad de Disscord</p>
              </div>
              <PrimaryButton className=" mt-12 w-full ">
                Comprar cursos
              </PrimaryButton>
            </h4>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
