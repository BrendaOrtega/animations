import React from "react";
export const Footer = () => {
  return (
    <section className="flex pt-0 pb-10 md:py-20 flex-wrap md:flex-nowrap justify-between items-center  ">
      <div>
        <h3 className="text-dark dark:text-white text-3xl md:text-5xl font-bold ">
          Escríbenos.
        </h3>
        <a href="mailto:hola@fixtergeek.com">
          <p className="text-iron dark:text-metal dark:font-extralight text-lg md:text-xl font-light mt-4">
            hola@fixtergeek.com
          </p>
        </a>
      </div>
      <div className="flex gap-4 mt-6 md:mt-0">
        <a
          href="https://www.facebook.com/fixterme"
          target="_blank "
          rel="noreferrer"
        >
          <img className="hover:opacity-50 transition-all" src="/face.svg" />
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
          <img className="hover:opacity-50 transition-all" src="/twitter.svg" />
        </a>
        <a
          href="https://www.facebook.com/fixterme"
          target="_blank "
          rel="noreferrer"
        >
          <img className="hover:opacity-50 transition-all" src="/insta.svg" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+527757609276"
          target="_blank "
          rel="noreferrer"
        >
          <img className="hover:opacity-50 transition-all" src="/whats.svg" />
        </a>
      </div>
    </section>
  );
};
