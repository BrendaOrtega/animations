import React from "react";
import { ScrollReveal } from "./hero";

export const Why = () => {
  return (
    <ScrollReveal>
      {" "}
      <section className="	flex flex-wrap-reverse xl:flex-nowrap gap-[64px] pt-[120px] pb-[80px] md:py-[160px]">
        <img
          className="h-[240px] w-full md:w-[42%] object-cover rounded-xl md:h-[320px] xl:h-auto"
          src="https://images.pexels.com/photos/7437487/pexels-photo-7437487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        <div>
          <h2 className="dark:text-white  text-3xl md:text-5xl	text-dark font-bold">
            Porqué tomar este curso 🎯
          </h2>
          <p className="text-lg  dark:text-metal text-iron font-light mt-6">
            Aprenderás de forma teórica y práctica desde como elegir tu paleta
            de color y tipografía, conocer los elementos web y sus casos de uso,
            tendencias actuales de diseño, hasta como organizar y aplicar
            pruebas de usabilidad a tu diseño; para al final aplicar todos estos
            conocimientos.{" "}
          </p>
          <p className="text-lg  dark:text-metal text-iron font-light mt-4">
            Con este curso aprenderás todo lo necesario para tomar decisiones de
            diseño, sabrás el porqué de las decisiones que tomas y podrás
            respaldarlas con buenas prácticas, patrones de diseño y experiencia
            de usuario.
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-12 mt-12">
            <div className="w-full md:w-[50%] ">
              <h3 className="text-2xl text-wvil text-dark dark:text-white font-semibold">
                Únete a la comunidad 👨‍👩‍👦‍👦
              </h3>
              <p className="  dark:text-metal text-iron font-light mt-2">
                Al ser parte del curso, también eres parte de la comunidad de
                Discord, en donde puedes conversar con otros estudiantes o con
                el instructor para colaborar, pedir feedback o recibir ayuda.{" "}
              </p>
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-2xl text-wvil text-dark dark:text-white font-semibold">
                Aprende de forma flexible ⌛️{" "}
              </h3>
              <p className="  dark:text-metal text-iron font-light mt-2">
                No es necesario un horario fijo para tomar el curso, hazlo
                cuando quieras desde donde quieras.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-12 mt-12">
            <div className="w-full md:w-[50%] ">
              <h3 className="text-2xl text-wvil text-dark dark:text-white font-semibold">
                Recibe feedback personal 🔥
              </h3>
              <p className="  dark:text-metal text-iron font-light mt-2">
                Los ejercicios prácticos que realices durante el curso serán
                revisados por el instructor y recibirás feedback personalizado.
              </p>
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-2xl text-wvil text-dark dark:text-white font-semibold">
                Con acceso permanente 🛟
              </h3>
              <p className="  dark:text-metal text-iron font-light mt-2">
                Al comprar el curso tienes acceso de por vida desde tu cuenta,
                además de acceso a todas las futuras actualizaciones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
