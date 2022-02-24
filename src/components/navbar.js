import React from "react";
import { Listitems, Navcontainer, Link, Navmenu } from "../style/navstyle";
import { useNavigate } from "react-router-dom";

// import search from "../images/search.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Navcontainer>
      <div className="searchbar">
        <input
          className="searchhere"
          type="text"
          placeholder="search here"
        ></input>
        <button className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search-heart"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
            <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
          </svg>
        </button>
      </div>
      <Navmenu>
        <Listitems>
          <Link
            className="items"
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            Home
          </Link>
        </Listitems>
        <Listitems>
          <Link
            className="items"
            onClick={() => {
              navigate("/News");
            }}
          >
            News
          </Link>
        </Listitems>
        <Listitems>
          <Link
            className="items"
            onClick={() => {
              navigate("/Contact");
            }}
          >
            Contact
          </Link>
        </Listitems>
        <Listitems>
          <Link
            className="items"
            onClick={() => {
              navigate("/About");
            }}
          >
            About us
          </Link>
        </Listitems>
      </Navmenu>
    </Navcontainer>
  );
};
export default Navbar;
