import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    //Definindo rota para a resultado da pesquisa
    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <form onSubmit={handleSubmit}>
               <input
                    type="text"
                     placeholder="Busque um filme"
                     onChange={(e) => setSearch(e.target.value)}
                     value={search}
                />
              <button type="submit">
                      <BiSearchAlt2 />
              </button>
      </form>
    </nav>
  );
};

export default Navbar;
