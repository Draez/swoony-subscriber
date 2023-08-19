"use client"; // This is a client component 👈🏽
import React, { FC, useEffect, useState } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import { trackLead } from "@/lib/fb";

const quickSand = Quicksand({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

const Header: FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  const trackLeadAction = () => {
    const email = emailRef.current?.value;
    const name = nameRef.current?.value;

    if (!email) return;
    trackLead({
      email,
    });
  };

  return (
    <>
      <section className="w-full h-full">
        <div className="items-center justify-between bg-main-blue p-8">
          <div className="container mx-auto flex items-center justify-between">
            <div className="pointer-events-none select-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 m">
              <Image
                src="/swoony.svg"
                alt="Swoony: Dating app"
                width={32}
                height={24}
                priority
              />
              <div
                className={`${quickSand.className} text-xl font-semibold text-zinc-50 uppercase tracking-wide`}
              >
                Swoony
              </div>
            </div>

            <div className="flex justify-center items-center">
              <a href="https://swoony.io" className="text-md hidden md:block text-white font-bold mr-8">
                Mikä on Swoony?
              </a>
              <a href="https://www.instagram.com/swoonyapp/" target="_blank">
                <Image
                  src="/instagram.svg"
                  alt="Instagram Icon"
                  className="mr-4"
                  width={32}
                  height={24}
                  priority
                />
              </a>
              <a href="https://www.facebook.com/Swoonyapp" target="_blank">
                <Image
                  src="/facebook.svg"
                  alt="Instagram Icon"
                  width={36}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-16 flex flex-wrap items-center p-8 md:py-16">
          <div className="container mx-auto flex items-center justify-between">
            <div className="hidden md:block md:w-1/2 py-8">
              <img
                className="h-80 w-100 object-cover min-w-[400px] min-h-[560px] rounded-xl ml-auto opacity-80"
                src="/date.jpg"
                alt="Swoony: Etsi rakkaus asiantuntevien mätsääjien avulla"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Voita 40€ lahjakortti ravintolaan
              </h1>
              <p className="text-xl text-white mb-10">
                Osallistu arvontaan tilaamalla deittailuaiheinen uutiskirjeemme!
              </p>
              <form
                name="contact"
                method="POST"
                action="/?success=true#footer-section"
                data-netlify="true"
                onSubmit={trackLeadAction}
              >
                <input type="hidden" name="form-name" value="contact" />


                <div className="mb-8 max-w-md">
                  <div className="w-full mx-auto md:py-2 py-4 pr-0 flex items-center rounded-md bg-light-blue">
                    <input type="email" name="name" ref={nameRef} placeholder="Sähköpostiosoitteesi.."
                      className="flex-1 appearance-none rounded bg-light-blue text-white focus:outline-none ml-4" />
                    <button type="submit"
                      className="bg-main-red hidden md:block text-white text-base font-semibold rounded-md shadow-md hover:bg-main-red-hover p-4 px-6 mr-4">Osallistu</button>

                  </div>
                  <button type="submit"
                    className="bg-main-red mt-4 md:hidden text-white text-base font-semibold rounded-md shadow-md hover:bg-main-red-hover p-4 px-6 mr-4">Osallistu</button>
                  {success && (
                    <h3 className="text-lg text-white font-semibold mt-2">
                      Kiitos osallistumisesta arvontaan!
                    </h3>
                  )}
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
