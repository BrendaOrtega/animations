import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import React from "react";
import { BsStopwatch } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export default function DialogButton({ className }: { className?: string }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          title="Suscripcion"
          type="button"
          onClick={openModal}
          className={twMerge(
            "h-14 flex gap-3 hover:scale-95	transition-all font-normal bg-fish text-white  mx-auto  px-8 rounded-full text-lg  items-center justify-center",
            className
          )}
        >
          Regístrate a la lista de espera <BsStopwatch />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[99]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[94%] md:w-[680px] transform overflow-hidden rounded-2xl bg-white dark:bg-dark text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-2xl  leading-6 text-dark dark:text-white"
                  >
                    Regístrate, te avisaremos cuando el curso este disponible
                  </Dialog.Title> */}
                  <div className="flex ">
                    <img
                      className="w-[320px] h-[480px] object-cover hidden md:block"
                      src="/banner.png"
                      alt="banner"
                    />
                    <div className="pt-10 relative">
                      <img
                        className="absolute right-4 top-4 cursor-pointer w-10"
                        src="/closeDark.png"
                        onClick={closeModal}
                        alt="close"
                      />
                      <h3 className="text-2xl  leading-8 text-dark dark:text-white ml-10 pr-10">
                        {" "}
                        Únete a la lista de espera
                      </h3>
                      <p className="text-lg text-iron dark:text-metal font-light dark:font-extralight leading-6 mt-4 ml-10 pr-10">
                        Sé de los primeros en enterarte del lanzamiento del
                        curso, y recibe un descuento especial.
                      </p>
                      <div className="ml-5 mt-6 mr-5 dark:block hidden ">
                        <iframe
                          frameBorder="0"
                          id="formmy-iframe"
                          title="formmy"
                          width="100%"
                          height="260"
                          src="https://formmy.app/embed/67194c1bca38562b276857c0"
                          style={{ margin: "0 auto", display: "block" }}
                        ></iframe>
                      </div>
                      <div className="ml-5 mt-6 mr-5 dark:hidden block">
                        <iframe
                          frameBorder="0"
                          id="formmy-iframe"
                          title="formmy"
                          width="100%"
                          height="260"
                          src="https://formmy.app/embed/67194b57ca38562b276857be"
                          style={{ margin: "0 auto", display: "block" }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
