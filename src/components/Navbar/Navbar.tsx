import { FC, useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import { Language } from "../../utils/globals";
import { Option } from "../../interfaces/Global";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Navbar.module.css";

const languageOptions: {value: Language, label: string}[] = [
  { value: "english", label: "EN" },
  { value: "spanish", label: "ES" },
];

export const Navbar = () => {
  const {changeLanguage} = useContext(AppContext);

  const handleLanguageChange = (selectedOption: Option) => {
    changeLanguage(selectedOption.value as Language);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["menu-icon"]}>
          <Dropdown
            options={languageOptions}
            onSelect={handleLanguageChange}
            defaultValue={languageOptions[0]}
          />
        </div>
        <h1>GL</h1>
        {/* <div className={styles["weather-container"]}>
          32
          <div style={{background: "url(/weather/cloudy.svg)", width: "50px", height: "50px"}}/>
        </div> */}
      </div>
    </header>
  );
}

export default Navbar;