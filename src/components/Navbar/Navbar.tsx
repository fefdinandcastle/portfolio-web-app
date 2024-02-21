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
    <div className={styles.navbar}>
      <div className={styles["navbar-dropdown-container"]}>
        <Dropdown
          options={languageOptions}
          onSelect={handleLanguageChange}
          defaultValue={languageOptions[0]}
        />
      </div>
      
      <div className={styles["navbar-title"]}>GL</div>
      <div style={{flex: "1"}}>Weather</div>
    </div>
  );
}

export default Navbar;