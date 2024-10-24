import React from "react";
import { ScrollReveal } from "./hero";

export const Why = () => {
  return (
    <ScrollReveal>
      {" "}
      <section className="	flex flex-wrap-reverse xl:flex-nowrap gap-[64px] pt-20 pb-16 md:pt-[120px] md:pb-[80px] lg:pt-[160px] lg:pb-[120px]">
        <img
          alt="students"
          className="h-[240px] w-full xl:w-[42%] object-cover rounded-xl md:h-[320px] xl:h-auto"
          src="https://images.pexels.com/photos/7437487/pexels-photo-7437487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div>
          <h2 className="dark:text-white  text-3xl md:text-4xl lg:text-5xl	text-dark font-bold">
            No te conformes con el copy - paste 🎯
          </h2>
          <p className="text-lg  dark:text-metal text-iron font-normal md:font-light mt-6">
            Si te gustan los componentes animados y los has estado copiando de
            cuanta biblioteca encuentras pero no entiendes cómo funcionan, no
            son exacatamente lo que necesitas, no sabes cómo modificarlos o se
            comportan de forma extraña, entonces este curso es para ti.
          </p>
          <p className="text-lg  dark:text-metal text-iron font-normal md:font-light mt-4">
            A lo largo de 12 unidades aprenderás a construir componentes
            animados tu mism@, añadirles tu personalidad y entender exactamente
            lo que pasa detrás de las animaciones.
          </p>
          <p className="text-lg  dark:text-metal text-iron font-normal md:font-light mt-4"></p>
          <div className="flex flex-wrap md:flex-nowrap gap-12 mt-12">
            <div className="w-full md:w-[50%] ">
              <h3 className="text-2xl text-wvil text-dark dark:text-white font-semibold">
                Únete a la comunidad 👨‍👩‍👦‍👦
              </h3>
              <p className=" text-lg  dark:text-metal text-iron font-normal md:font-light mt-2">
                Al ser parte del curso, también eres parte de la comunidad de
                Discord, en donde puedes conversar con otros estudiantes o con
                el instructor para{" "}
                <span className="text-iron dark:text-white/70 font-semibold">
                  {" "}
                  colaborar, pedir feedback o recibir ayuda.
                </span>{" "}
              </p>
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-2xl text-wvil text-dark dark:text-white font-semibold">
                Aprende de forma flexible ⌛️{" "}
              </h3>
              <p className=" text-lg  dark:text-metal text-iron font-normal md:font-light mt-2">
                No es necesario un horario fijo para tomar el curso, hazlo{" "}
                <span className="text-iron dark:text-white/70 font-semibold">
                  cuando quieras desde donde quieras.
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-12 mt-12">
            <div className="w-full md:w-[50%] ">
              <h3 className="text-2xl text-wvil text-dark dark:text-white font-semibold">
                Recibe feedback personal 🔥
              </h3>
              <p className=" text-lg  dark:text-metal text-iron font-normal md:font-light mt-2">
                Los ejercicios prácticos que realices durante el curso serán
                revisados por el instructor y{" "}
                <span className="text-iron dark:text-white/70 font-semibold">
                  recibirás feedback personalizado.
                </span>
              </p>
            </div>
            <div className="w-full md:w-[50%]">
              <h3 className="text-2xl text-wvil text-dark dark:text-white font-semibold">
                Con acceso permanente 🛟
              </h3>
              <p className=" text-lg  dark:text-metal text-iron font-normal md:font-light mt-2">
                Al comprar el curso tienes{" "}
                <span className="text-iron dark:text-white/70 font-semibold">
                  acceso de por vida
                </span>{" "}
                desde tu cuenta, además de acceso a todas las futuras
                actualizaciones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
