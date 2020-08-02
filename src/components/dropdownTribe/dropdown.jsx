import React, { useState, useEffect } from "react";
import onClickOutside from "react-onclickoutside";

import "./dropdown.css";

function DropdownT({ placehold, item, categories }) {
  
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState(item);

  useEffect(() => {
    setFiltered(item)
  }, [item])

  const toggle = (e) => {
    setOpen(!open);
  };

  const handleItem = (e) => {
    categories(e.target.innerText);
    // toggle()
  };

  const handleSearch = (e) => {
    let search = e.target.value;
    search === '' ? setFiltered(item) : setFiltered(item.filter(elem => elem.includes(search)))
  }

  DropdownT.handleClickOutside = () => setOpen(false);
  return (
    <div className="wrapper">
      <div className="search_box">
        <div className="search_field">
          <p type="text" className="input">{placehold}</p>
          <i className="fas fa-search"></i>
        </div>
        <div className="dropdown" onClick={(event) => toggle(event)}>
          <div className="default_option"></div>
        </div>
      </div>
      <ul className={open ? "active teste" : "teste"}>
        <li>
          <input type="text" className="inputLi" placeholder="Search" onChange={(e) => handleSearch(e)}/>
        </li>
        <hr />
        {filtered &&
          filtered.map((item, key) => {
            return (
              <li
                className="loT"
                key={key}
                id={key}
                onClick={(event) => handleItem(event)}
              >
                {item}
              </li>
            );
          })}
        {/* <li className="loT" onClick={() => toggle()}>
          Popular
        </li> */}
        <hr />
      </ul>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropdownT.handleClickOutside,
};

export default onClickOutside(DropdownT, clickOutsideConfig);
