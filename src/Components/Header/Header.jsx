import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h2>
          <a href="#home" className="link">
            Iswariya
          </a>
        </h2>
        <Navbar />
      </header>
    </>
  );
};
