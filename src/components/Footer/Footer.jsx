import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-myColor-700 text-white py-10 text-center">
        <div className="container">
          <div className="grid grid-cols-12 first-half">
            <div className="col-span-4  space-y-3">
              <div>
                <h4 className="text-2xl font-semibold">LOCATION</h4>
                <h5 className="text-lg">2215 John Daniel Drive</h5>
              </div>
              <h5 className="text-lg">Clark, MO 65243</h5>
            </div>
            <div className="col-span-4 space-y-3 ">
              <h4 className="text-2xl font-semibold">AROUND THE WEB</h4>
              <div className="icons flex justify-center items-center space-x-3">
                <span className="w-8 h-8 rounded-full border-2 border-white flex justify-center items-center">
                  <i className="text-sm fa-brands fa-twitter"></i>
                </span>
                <span className="w-8 h-8 rounded-full border-2 border-white flex justify-center items-center">
                  <i className="text-sm fa-brands fa-facebook"></i>
                </span>
                <span className="w-8 h-8 rounded-full border-2 border-white flex justify-center items-center">
                  <i className="text-sm fa-brands fa-linkedin-in"></i>
                </span>
                <span className="w-8 h-8 rounded-full border-2 border-white flex justify-center items-center">
                  <i className="text-sm fa-solid fa-globe"></i>
                </span>
              </div>
            </div>
            <div className="col-span-4 ">
              <h4 className="text-2xl font-semibold">ABOUT FREELANCER</h4>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
