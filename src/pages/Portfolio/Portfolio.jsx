import React, { useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <section className="py-24 text-myColor-800 text-center">
        <div className="container">
          <div className="top py-5">
            <h1 className="font-bold text-4xl uppercase">
              portfolio component
            </h1>
            <div className="icon relative after:w-24  after:left-1/2 after:-translate-x-28 after:bottom-2 after:h-1 after:bg-myColor-800 after:absolute      before:w-24 before:translate-x-7 before:translate-y-3 before:h-1 before:bg-myColor-800 before:absolute  ">
              <i className="fa-solid text-xl fa-star text-myColor-800 "></i>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-4">
              <div className="imgs space-y-10 cursor-pointer">

                <div className="relative" >
                  <img src={img1} className="w-full rounded-md" alt="" />
                  <div className="layer absolute top-0 left-0 bg-secColor-600 bg-opacity-80 w-full h-full opacity-0 hover:opacity-100 transition-colors duration-1000 flex justify-center items-center text-white text-8xl"><i className=" fa-solid fa-plus"></i></div>

                </div>

                <div className="relative " >
                  <img src={img1} className="w-full rounded-md" alt="" />
                  <div className="layer absolute top-0 left-0 bg-secColor-600 bg-opacity-80 w-full h-full opacity-0 hover:opacity-100 transition-colors duration-1000 flex justify-center items-center text-white text-8xl"><i className=" fa-solid fa-plus"></i></div>
                </div>

              </div>
            </div>
            <div className="col-span-4">
              <div className="imgs space-y-10 cursor-pointer">
              <div className="relative" >
                  <img src={img2} className="w-full rounded-md" alt="" />
                  <div className="layer absolute top-0 left-0 bg-secColor-600 bg-opacity-80 w-full h-full opacity-0 hover:opacity-100 transition-colors duration-1000 flex justify-center items-center text-white text-8xl"><i className=" fa-solid fa-plus"></i></div>
                </div>

                <div className="relative" >
                  <img src={img2} className="w-full rounded-md" alt="" />
                  <div className="layer absolute top-0 left-0 bg-secColor-600 bg-opacity-80 w-full h-full opacity-0 hover:opacity-100 transition-colors duration-1000 flex justify-center items-center text-white text-8xl"><i className=" fa-solid fa-plus"></i></div>
                </div>

              </div>
            </div>
            <div className="col-span-4">
              <div className="imgs space-y-10 cursor-pointer">

              <div className="relative" >
                  <img src={img3} className="w-full rounded-md" alt="" />
                  <div className="layer absolute top-0 left-0 bg-secColor-600 bg-opacity-80 w-full h-full opacity-0 hover:opacity-100 transition-colors duration-1000 flex justify-center items-center text-white text-8xl"><i className=" fa-solid fa-plus"></i></div>
                </div>

                <div className="relative" >
                  <img src={img3} className="w-full rounded-md" alt="" />
                  <div className="layer absolute top-0 left-0 bg-secColor-600 bg-opacity-80 w-full h-full opacity-0 hover:opacity-100 transition-colors duration-1000 flex justify-center items-center text-white text-8xl"><i className=" fa-solid fa-plus"></i></div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
