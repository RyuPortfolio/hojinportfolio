import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Vue3", path: "/machbase" },
    {
      id: 3,
      title: "Publishing",
      path: "/publishing",
      dropdown: [
        { id: "neo", title: "neo", path: "/neo" },
        { id: "ssangyoung", title: "ssangyoung", path: "/ssangyoung" },
      ],
    },
    {
      id: 4,
      title: "Design",
      path: "/design",
      dropdown: [
        { id: "coex", title: "coex", path: "/coex" },
        { id: "others", title: "others", path: "/machdesign" },
      ],
    },
    { id: 5, title: "SEO", path: "/seo" },
    { id: 6, title: "YouTube", path: "/youtube" },
  ];

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={item.path} className="nav-link">
                {item.title}
              </Link>

              {item.dropdown && activeDropdown === item.id && (
                <ul className="dropdown-menu">
                  {item.dropdown.map((dropItem) => (
                    <li key={dropItem.id} className="dropdown-item">
                      <Link to={dropItem.path} className="dropdown-link">
                        {dropItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
