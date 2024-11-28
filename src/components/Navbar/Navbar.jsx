import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-myColor-800 py-7 fixed top-0 left-0 right-0 z-50" id="navbar">
      <div className="container flex items-center justify-between">
        <div className="nav-logo">
          <Link to="/" className="text-white text-3xl font-bold uppercase">start framework</Link>
        </div>
        <div className="nav-links">
        <ul className="flex items-center justify-center text-white text-lg font-semibold uppercase">
            <li className="mr-9">
              <NavLink to="/about"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-secColor-700 px-2 py-2 rounded-md" : " "
                  }`
                }
              >
                about
              </NavLink>
            </li>
            <li className="mr-9">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-secColor-700 px-2 py-2 rounded-md" : " "
                  }`
                }
              >
                portfolio
              </NavLink>
            </li>
            <li className="mr-9">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-secColor-700 px-2 py-2 rounded-md" : " "
                  }`
                }
              >
                contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};  

