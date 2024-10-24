import React from "react";
export const Footer = () => {
  return (
    <section className=" bg-dark  pt-10 pb-10 md:py-20   ">
      <div className="w-full px-6 md:px-[6%] xl:px-0 lg:max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
        <div>
          <h3 className="text-white text-3xl md:text-5xl font-bold ">
            Escríbenos.
          </h3>
          <a href="mailto:hola@fixtergeek.com" className="group">
            <p className="text-metal dark:font-extralight text-lg md:text-xl font-light mt-4">
              hola@fixtergeek.com
            </p>
            <div className="h-1 border-none bg-white/10 w-44 mt-2 rounded-full">
              <div className="h-1 border-none bg-white w-0 transition-all duration-500 group-hover:w-44 mt-2 rounded-full"></div>
            </div>
          </a>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
          <a
            href="https://www.facebook.com/fixterme"
            target="_blank "
            rel="noreferrer"
          >
            <img
              className="hover:opacity-50 transition-all grayscale"
              src="/face.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/28982942/admin/feed/posts/"
            target="_blank "
            rel="noreferrer"
          >
            <img
              className="hover:opacity-50 transition-all"
              src="/linkedin.svg"
            />
          </a>
          <a
            href="https://twitter.com/FixterGeek"
            target="_blank "
            rel="noreferrer"
          >
            <img
              className="hover:opacity-50 transition-all"
              src="/twitter.svg"
            />
          </a>
          <a
            href="https://www.facebook.com/fixterme"
            target="_blank "
            rel="noreferrer"
          >
            <img className="hover:opacity-50 transition-all" src="/insta.svg" />
          </a>
          <a
            href="https://wa.me/527757609276"
            target="_blank "
            rel="noreferrer"
          >
            <img className="hover:opacity-50 transition-all" src="/whats.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};
