import React, { useState, useRef, useEffect } from "react";
import "./Menu.scss";

interface MenuProps {
  title: string;
  items: string[];
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="menuWrapper"
      ref={menuRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="menuButton">{title}</button>

      {isOpen && (
        <div className="dropdown">
          {items.map((item, i) => (
            <div key={i} className="dropdownItem">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
