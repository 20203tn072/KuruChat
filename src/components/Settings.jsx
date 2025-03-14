import React, { useState,useEffect } from "react";
import { Dropdown } from "primereact/dropdown";

const Settings = () => {
  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("themeColor") || "#ff0000"
  );

  const languages = [
    { name: "Español", code: "es", flag: "https://flagcdn.com/w40/es.png" },
    { name: "Inglés", code: "en", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "Francés", code: "fr", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "Alemán", code: "de", flag: "https://flagcdn.com/w40/de.png" },
  ];
  useEffect(() => {
    setSelectedLanguage(languages[0]);
  }, []);

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  
    const languageTemplate = (option) => {
      if (!option || !option.flag) return null; 
  
      return (
        <div className="flex items-center gap-2">
          <img src={option.flag} alt={option.name} className="w-5 h-5" />
          <span>{option.name}</span>
        </div>
      );
    };
  
    const handleLanguageChange = (e) => {
      const selectedLang = languages.find(lang => lang.code === e.value.code);
      setSelectedLanguage(selectedLang || languages[0]); 
    };
  
    const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    document.documentElement.style.setProperty("--theme-color", newColor);
  };

  return (
    <>
            <div className="border-b-1 border-amber-500 p-3  content-center " id="profile">
              <span class="material-symbols-outlined">
                account_circle
              </span>
              <span class="ms-3">Perfil</span>
            </div>
            <div className="text-white bg-amber-950" id="Settings">
    
              <div className="border-b-1 border-amber-500 p-3">
                <span class="material-symbols-outlined">
                  language
                </span>
                <span class="ms-3">Cambiar Idioma</span>
    
                <div className=" mt-5 mb-4">
                  <Dropdown
                    value={selectedLanguage}
                    options={languages}
                    onChange={handleLanguageChange}
                    optionLabel="name"
                    placeholder="Selecciona un idioma"
                    itemTemplate={languageTemplate}
                    valueTemplate={languageTemplate}
                    className="w-full"
                    pt={{
                      root: { className: "bg-blue-500 text-white rounded-lg px-2 shadow-md" },
                      panel: { className: "bg-white border border-gray-300 rounded-lg shadow-lg" },
                      item: ({ context }) => ({
                        className: context.selected ? "bg-blue-600 text-white" : "hover:bg-blue-100"
                      })
                    }}
                  />
    
                </div>
              </div>
    
              <div className="border-b-1 border-amber-500 p-3 ">
                <span class="material-symbols-outlined">
                  palette
                </span>
                <span class="ms-3">Cambiar Color</span>
                <input
                  type="color"
                  value={selectedColor}
                  onChange={handleColorChange}
                  className="w-full h-10 mt-2 cursor-pointer"
                />
              </div>
    
            </div>
    
    </>
  );
};

export default Settings;
