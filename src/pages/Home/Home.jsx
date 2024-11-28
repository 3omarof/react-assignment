import React from "react";
import carton from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <section className="bg-secColor-700">
        <div className="flex flex-col justify-center items-center py-28 space-y-3">
          <img src={carton} className="w-64 " alt="animateImg" />
          <h1 className="text-white font-bold text-5xl">start Framework</h1>
          <div className="icon relative after:w-36  after:right-0 after:-translate-x-7 after:-translate-y-2 after:bottom-0 after:h-1 after:bg-white after:absolute      before:w-36 before:translate-x-7 before:translate-y-3 before:h-1 before:bg-white before:absolute  ">
            <i className="fa-solid text-xl fa-star text-white "></i>
          </div>
          <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
