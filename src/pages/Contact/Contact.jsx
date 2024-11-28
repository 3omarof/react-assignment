import React, { useState } from "react";

export default function Contact() {
  const [validFields, setValidFields] = useState({
    name: false,
    age: false,
    email: false,
    password: false,
  });

  const handleInputChange = (e, field) => {
    const value = e.target.value.trim();
    setValidFields((state) => ({ ...state, [field]: value  }));
  };

  return (
    <>
      <div className="container py-40  pt-7 w-[1000px]">
        <div className="text-center mt-24">
          <h1 className="font-bold text-4xl text-myColor-800 uppercase">
            Contact Section
          </h1>
          <div className="icon relative after:w-24 after:left-1/2 after:-translate-x-28 after:bottom-2 after:h-1 after:bg-myColor-800 after:absolute before:w-24 before:translate-x-7 before:translate-y-3 before:h-1 before:bg-myColor-800 before:absolute">
            <i className="fa-solid text-xl fa-star text-myColor-800"></i>
          </div>
        </div>
        <form className="space-y-3 mt-10 grid-flow-col">
          
          <div className="inputName relative">
            <label
              htmlFor="name"
              className={`text-secColor-700 absolute -top-3 translate-y-5 transition-all duration-300 ${
                validFields.name ? "translate-y-0 opacity-100" : "opacity-0"
              }`}
            >
              User Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full form-control"
              onInput={(e) => handleInputChange(e, "name")}
            />
          </div>

         
          <div className="inputAge relative">
            <label
              htmlFor="age"
              className={`text-secColor-700 absolute -top-3 translate-y-5 transition-all duration-300 ${
                validFields.age ? "translate-y-0 opacity-100" : "opacity-0"
              }`}
            >
              User Age:
            </label>
            <input
              id="age"
              type="number"
              placeholder="Enter your age"
              className="form-control w-full"
              onInput={(e) => handleInputChange(e, "age")}
            />
          </div>

          
          <div className="inputEmail relative">
            <label
              htmlFor="email"
              className={`text-secColor-700 absolute -top-3 translate-y-5 transition-all duration-300 ${
                validFields.email ? "translate-y-0 opacity-100" : "opacity-0"
              }`}
            >
              User Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="form-control w-full"
              onInput={(e) => handleInputChange(e, "email")}
            />
          </div>

          
          <div className="inputPassword relative">
            <label
              htmlFor="password"
              className={`text-secColor-700 absolute -top-3 translate-y-5 transition-all duration-300 ${
                validFields.password ? "translate-y-0 opacity-100" : "opacity-0"
              }`}
            >
              User Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="form-control w-full"
              onInput={(e) => handleInputChange(e, "password")}
            />
          </div>

          <button
            type="submit"
            className="bg-secColor-700 hover:bg-secColor-900 transition-colors duration-300 text-white px-2 py-1 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
