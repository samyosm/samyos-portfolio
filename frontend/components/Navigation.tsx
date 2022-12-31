import * as React from 'react';
import {FaAddressCard, FaNewspaper, FaTasks} from "react-icons/fa";
import {NavItem} from "./NavItem";

export const Navigation = () => {

  return (
      <div className="nav-card">
        <div className="nav-header">
          <h1>Samyos</h1>
        </div>
        <div className="nav-body">
          <NavItem href="/" label="Projects" selected icon={<FaTasks />} />
          <NavItem href="/about" label="About Me" icon={<FaAddressCard />} />
          <NavItem href="/blog" label="Blog" icon={<FaNewspaper />} />
        </div>
        <div className="nav-footer">
          <button className="nav-send-message">
            Send a message
          </button>
        </div>
      </div>
  );
};