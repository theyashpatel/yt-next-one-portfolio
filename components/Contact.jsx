import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contact-us.jpg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me using your preferred
              medium.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaLinkedin size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaFacebook size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaGithub size={25} />
              </div>
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form action="">
                <div className="gird md:grid-cols-2 gap-4 w-full py-2">
                  <label className="capitalize text-sm py-2 text-slate-600 font-light">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                  />
                  <label className="capitalize text-sm py-2 text-slate-600 font-light">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
