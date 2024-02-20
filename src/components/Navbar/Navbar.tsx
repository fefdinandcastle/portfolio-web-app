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
  const {language, changeLanguage} = useContext(AppContext);

  const handleLanguageChange = (selectedOption: Option) => {
    changeLanguage(selectedOption.value as Language);
  };

	return (
		<div className={styles.Navbar}>
        <Dropdown 
          options={languageOptions}
          onSelect={handleLanguageChange}
          defaultValue={language}
        />
        <div className="Navbar__title">GL</div>
        <div>Weather</div>
      </div>
	);
}

export default Navbar;