import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { NavLink } from "react-router-dom";
import { useLan } from "./LanguajeContext";

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
  };

  useEffect(() => {
    const storedColor = localStorage.getItem("themeColor") || "#2D2523";
    document.documentElement.style.setProperty("--theme-color", storedColor);
  }, []);

  return (
    <>
      <div className="border-b-1  p-4 content-center" id="profile">
        <NavLink to="/user/profile">
          <div className="flex items-center">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="ms-3">{translate("profile")}</span>
          </div>
        </NavLink>
      </div>

      <div className="text-white " id="Settings">
        <div className="border-b-1  p-4">
          <div className="flex items-center">
            <span className="material-symbols-outlined">language</span>
            <span className="ms-3">{translate("changeLanguage")}</span>
          </div>
          <div className="mt-5 mb-4">
            <Dropdown
              value={selectedLanguage}
              options={languages}
              onChange={(e) => handleLanguageChange(e)}
              optionLabel="name"
              placeholder={translate("selectLanguage")}
              itemTemplate={languageTemplate}
              valueTemplate={languageTemplate}
              className="w-full"
              pt={{
                root: { className: "bg-blue-500 text-white rounded-lg px-2 shadow-md" },
                panel: { className: "bg-white border border-gray-300 rounded-lg shadow-lg" },
                item: ({ context }) => ({
                  className: context.selected ? "bg-blue-600 text-white" : "hover:bg-blue-100",
                }),
              }}
            />
          </div>
        </div>

        <div className="border-b-1 p-4">
          <div className="flex items-center">
            <span className="material-symbols-outlined">palette</span>
            <span className="ms-3">{translate("changeColor")}</span>
          </div>
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
            className="w-full h-10 mt-2 cursor-pointer"
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
