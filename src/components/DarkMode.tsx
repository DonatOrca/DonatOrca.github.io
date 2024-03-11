import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [isChecked, setIsChecked] = useState(false);

  const setDarkMode = () => {
    document.querySelector("html")?.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("html")?.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    if (checked) setDarkMode();
    else setLightMode();
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme) {
      setIsChecked(savedTheme === "dark");
      if (savedTheme === "dark") {
        setDarkMode();
      } else {
        setLightMode();
      }
    } else {
      setIsChecked(prefersDarkMode);
      if (prefersDarkMode) {
        setDarkMode();
      } else {
        setLightMode();
      }
    }
  }, []);

  return (
    <>
      <div className="p-[10px]">
        <input
          className="peer/switch hidden h-0 w-0"
          type="checkbox"
          id="themeToogle"
          onChange={toggleTheme}
          checked={isChecked}
        />
        <label
          className={`relative z-50 block h-[30px] w-[65px] cursor-pointer rounded-[200px] bg-[#ebebeb] shadow-dmShadow transition-all duration-300 after:absolute after:left-[3px] after:top-[3px] after:h-[25px] after:w-[25px] after:rounded-[180px] after:bg-gradient-to-b after:from-[#ffcc89] after:to-[#d8860b] after:shadow-dmAfterShadow after:transition-all after:duration-300 after:content-[''] peer-checked/switch:bg-[#242424] peer-checked/switch:transition-all peer-checked/switch:duration-300 peer-checked/switch:after:left-[62px] peer-checked/switch:after:translate-x-[-100%] peer-checked/switch:after:bg-gradient-to-b peer-checked/switch:after:from-[#777] peer-checked/switch:after:to-[#3a3a3a]`}
          htmlFor="themeToogle"
        >
          <svg
            className={`absolute left-[5px] top-[5px] z-50 w-[20px] fill-white transition-all delay-200 duration-300 ${isChecked ? "opacity-0" : "opacity-100"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>
          <svg
            className={`absolute left-[40px] top-[5px] z-50 w-[20px] fill-white transition-all delay-200 duration-300 ${isChecked ? "opacity-100" : "opacity-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" />
          </svg>
        </label>
      </div>
    </>
  );
};

export default DarkMode;
