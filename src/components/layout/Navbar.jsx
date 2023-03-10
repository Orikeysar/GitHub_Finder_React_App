import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropType from "prop-types";

function Navbar({ title }) {
  return (
    // הכנת התפריט והלוגו של גיט 
    <nav className="navbar mb-12 shadow-lg text-neutral-content bg-gray-600">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        {/* //כל הכפתורים של התפריט */}
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn border-white px-2 mx-2">
              Home
            </Link>
           
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn border-white px-2 mx-2">
              About
            </Link>
          </div>
        </div>
      </div>
   
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Ori Keysar Github Finder",
};
Navbar.PropType = {
  title: PropType.string,
};

export default Navbar;
