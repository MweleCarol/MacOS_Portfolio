import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import dayjs from "dayjs";
import React from "react";

const Navbar = () => {
//Imported to enable the nav links to open a window
  const {openWindow} = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Carolyne's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type}) => (
            <li key={id} onClick={()=> openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <ul>
            {navIcons.map(({ id, img})=>(
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover"/>
            </li>
            ))}
        </ul>
        <time dateTime="">{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
