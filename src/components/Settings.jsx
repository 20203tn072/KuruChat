import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { NavLink } from "react-router-dom";
import { useLan } from "./LanguageContext";

const Settings = () => {
  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("themeColor") || "#2D2523"
  );
  const { selectedLanguage, handleLanguageChange, languages, translate } = useLan();

  const languageTemplate = (option) => {
    if (!option || !option.flag) return null;
    return (
      <div className="flex items-center gap-2">
        <img src={option.flag} alt={option.name} className="w-5 h-5" />
        <span>{option.name}</span>
      </div>
    );
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);

    localStorage.setItem("themeColor", newColor);

    document.documentElement.style.setProperty("--theme-color", newColor);

    const textColor = getContrastColor(newColor);
    const lighterColor = lightenColor(newColor, 40); // Más claro
    const darkerColor = darkenColor(newColor, 20); // Más oscuro
    const borderColor = darkenColor(newColor, 50); // Color para bordes

    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty("--lighter-color", lighterColor);
    document.documentElement.style.setProperty("--darker-color", darkerColor);
    document.documentElement.style.setProperty("--border-color", borderColor);
  };

  const getContrastColor = (hexColor) => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
  };

  const lightenColor = (hex, percent) => {
    let num = parseInt(hex.slice(1), 16),
      amt = Math.round(2.55 * percent),
      r = (num >> 16) + amt,
      g = ((num >> 8) & 0x00FF) + amt,
      b = (num & 0x0000FF) + amt;

    return `#${(0x1000000 + (r < 255 ? r : 255) * 0x10000 + (g < 255 ? g : 255) * 0x100 + (b < 255 ? b : 255)).toString(16).slice(1).toUpperCase()}`;
  };

  const darkenColor = (hex, percent) => {
    let num = parseInt(hex.slice(1), 16),
      amt = Math.round(2.55 * percent),
      r = (num >> 16) - amt,
      g = ((num >> 8) & 0x00FF) - amt,
      b = (num & 0x0000FF) - amt;

    return `#${(0x1000000 + (r > 0 ? r : 0) * 0x10000 + (g > 0 ? g : 0) * 0x100 + (b > 0 ? b : 0)).toString(16).slice(1).toUpperCase()}`;
  };

  useEffect(() => {
    const storedColor = localStorage.getItem("themeColor") || "#2D2523"; // Color por defecto
    document.documentElement.style.setProperty("--theme-color", storedColor);

    // Aplicar color del texto basado en el fondo
    const textColor = getContrastColor(storedColor);
    document.documentElement.style.setProperty("--text-color", textColor);
  }, []);

  return (
    <>
      <div className="border-b border-1 border-[var(--border-color)] p-4 content-center justify-center" style={{ color: "var(--text-color)" }}>
        <NavLink to="/user/profile">
          <div className="flex items-center">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="ms-3">{translate("profile")}</span>
          </div>
        </NavLink>
      </div>

      <div className="border-b border-1 border-[var(--border-color)] ">
        <div className="border-b-1 border-color-brown p-4">
          <div className="flex items-center">
            <span className="material-symbols-outlined">language</span>
            <span className="ms-3">{translate("changeLanguage")}</span>
          </div>
          <div className="mt-5 mb-4 bg-[var(--lighter-color)]">
            <Dropdown
              value={selectedLanguage}
              options={languages}
              onChange={(e) => handleLanguageChange(e)}
              optionLabel="name"
              placeholder="Selecciona un idioma"
              itemTemplate={languageTemplate}
              valueTemplate={languageTemplate}
              className="w-full bg-[var(--lighter-color)]"
            />
          </div>
        </div>

        <div className="border-b border-1 border-[var(--border-color)]  p-4">
          <div className="flex items-center">
            <span className="material-symbols-outlined">palette</span>
            <span className="ms-3">{translate("changeColor")}</span>
          </div>
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
            className="w-full h-10 mt-2 cursor-pointer "
          />
        </div>

        <NavLink to="/">
          <div className="flex items-center p-4">
            <span className="material-symbols-outlined p-1 text-4xl">logout</span>
            <span className="ms-3">{translate("logOut")}</span>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Settings;
