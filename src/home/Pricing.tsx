import { Button, Tab } from "@headlessui/react";
import React from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import { ScrollReveal } from "./hero";
import { AnimatePresence, motion } from "framer-motion";
import DialogButton from "../components/DialogButton";

export const Pricing = () => {
  return (
    <ScrollReveal>
      <section className="text-center py-16 md:py-[80px] lg:py-[120px] ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl	text-evil text-dark dark:text-white font-bold">
          ¿Qué incluye el curso? 🚀
        </h2>
        <p className="text-lg md:text-2xl text-iron dark:text-metal dark:font-extralight font-normal md:font-light mt-4 mb-16">
          Elige tu pack
        </p>
        <MyTabs />
      </section>
    </ScrollReveal>
  );
};

const MyTabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-0 md:gap-10 justify-between md:justify-center w-full md:w-[560px] mx-auto">
        <Tab
          data-headlessui-state="selected"
          className="border focus:outline-none data-[selected]:outline-fish data-[selected]:border-fish  data-[hover]:bg-transparent  dark:data-[hover]:bg-[#131316] data-[focus]:outline-1 data-[focus]:outline-white   bg-[#ffffff] dark:bg-transparent border-lightGray dark:border-lightGray/20 w-[48%] md:w-[260px] h-[160px] rounded-3xl flex items-center justify-center"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-dark dark:text-white">
              Animaciones <br /> con React
            </h3>
            <p className="text-iron font-normal md:font-light dark:text-metal text-sm mt-2">
              Full course
            </p>
          </div>
        </Tab>

        <Tab className="border focus:outline-none data-[selected]:outline-fish data-[selected]:border-fish  data-[hover]:bg-transparent  dark:data-[hover]:bg-[#131316] data-[focus]:outline-1 data-[focus]:outline-white   bg-[#ffffff] dark:bg-transparent border-lightGray dark:border-lightGray/20 w-[48%] md:w-[260px] h-[160px] rounded-3xl flex items-center justify-center">
          <div className="relative">
            <img
              className="w-16 absolute -right-3 -top-14 md:-right-10 "
              src="/best-seller.svg"
              alt="best seller"
            />
            <h3 className="text-xl md:text-2xl text-dark dark:text-white font-medium">
              Animaciones <br /> con React
            </h3>
            <p className="text-iron font-normal md:font-light dark:text-metal text-sm mt-2">
              Full course + Player oficial
            </p>
          </div>
        </Tab>
      </Tab.List>
      <Tab.Panels className="flex justify-center mt-8 md:mt-10">
        <AnimatePresence>
          <Tab.Panel data-selected>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="w-full md:w-[560px] bg-white dark:bg-[#1B1D22]  rounded-3xl p-6 md:p-12 text-left border-[1px] border-lightGray dark:border-none "
            >
              {" "}
              <p className="mb-3 text-[#DE665F] dark:text-[#C8496C] ">
                Precio especial Earlybird
              </p>{" "}
              <h3 className="text-dark dark:text-white text-4xl md:text-5xl font-bold	">
                <span className="line-through	">$999 </span>{" "}
                <span className=" text-[#DE665F] dark:text-[#C8496C] ml-2">
                  $599{" "}
                </span>
                <span className="text-xl font-normal text-iron dark:text-metal/70 ">
                  / MXN{" "}
                </span>
              </h3>
              <div className="text-base font-normal md:font-light text-iron dark:text-metal  flex flex-col gap-4 mt-10">
                <p>
                  📹{" "}
                  <strong className="font-semibold text-iron dark:text-white/60">
                    12 unidades
                  </strong>{" "}
                  con tutoriales en video (1 por componente)
                </p>
                <p>💪🏻 Learnings y ejercicios por lección</p>
                <p>
                  📚 Recopilación de{" "}
                  <strong className="font-semibold text-iron dark:text-white/60">
                    recursos extra{" "}
                  </strong>
                </p>
                <p>💀 Acceso de por vida</p>
                <p>
                  🚀{" "}
                  <strong className="font-semibold text-iron dark:text-white/60">
                    Actualizaciones futuras
                  </strong>{" "}
                  del curso
                </p>
                <p>🫶🏻 Acceso a la comunidad de Disscord</p>
              </div>
              <DialogButton className="w-full mt-16" />
              {/* <PrimaryButton className=" mt-12 w-full ">
                Comprar curso <img src="/cursor.svg" />
              </PrimaryButton> */}
            </motion.div>
          </Tab.Panel>
        </AnimatePresence>
        <Tab.Panel>
          {" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="w-full md:w-[560px] bg-white dark:bg-[#1B1D22]  rounded-3xl p-6 md:p-12 text-left border-[1px] border-lightGray dark:border-none "
          >
            {" "}
            <p className="mb-3 text-[#DE665F] dark:text-[#C8496C] ">
              Precio especial Earlybird
            </p>{" "}
            <h3 className="text-dark dark:text-white text-4xl md:text-5xl font-bold	">
              <span className="line-through	">$1,499 </span>{" "}
              <span className=" text-[#DE665F] dark:text-[#C8496C] ml-2">
                $999{" "}
              </span>
              <span className="text-xl font-normal text-iron dark:text-metal/70  ">
                / MXN{" "}
              </span>
            </h3>
            <div className="text-base font-normal md:font-light text-iron dark:text-metal flex flex-col gap-4 mt-10">
              <p>
                📹{" "}
                <strong className="font-semibold text-iron dark:text-white/60">
                  12 unidades
                </strong>{" "}
                con tutoriales en video (1 por componente)
              </p>
              <p>💪🏻 Learnings y ejercicios por lección</p>
              <p>
                📚 Recopilación de{" "}
                <strong className="font-semibold text-iron dark:text-white/60">
                  recursos extra{" "}
                </strong>
              </p>
              <p>💀 Acceso de por vida</p>
              <p>
                🚀{" "}
                <strong className="font-semibold text-iron dark:text-white/60">
                  Actualizaciones futuras
                </strong>{" "}
                del curso
              </p>
              <p>🫶🏻 Acceso a la comunidad de Disscord</p>
              <p>
                👕{" "}
                <strong className="font-semibold text-iron dark:text-white/60">
                  Playera oficial
                </strong>{" "}
                de Fixtergeek
              </p>
            </div>
            {/* <PrimaryButton className=" mt-12 w-full ">
              Comprar curso <img src="/cursor.svg" />
            </PrimaryButton> */}
            <DialogButton className="w-full mt-16" />
          </motion.div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
