import React from "react";

export default function About() {
  return (
    <section className="bg-secColor-700 py-56">
      <div className="container flex flex-col justify-center items-center space-y-2 text-white">
        <h1 className="font-bold text-4xl uppercase">about component</h1>
        <div className="icon relative after:w-24  after:right-0 after:-translate-x-7 after:-translate-y-2 after:bottom-0 after:h-1 after:bg-white after:absolute      before:w-24 before:translate-x-7 before:translate-y-3 before:h-1 before:bg-white before:absolute  ">
          <i className="fa-solid text-xl fa-star text-white "></i>
         
        </div>
        <div className="grid grid-cols-12">
            <div className="col-span-6">
              <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-span-6">
              <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
