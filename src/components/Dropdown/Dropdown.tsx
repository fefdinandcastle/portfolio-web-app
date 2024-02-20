import { FC, useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import { Language } from "../../utils/globals";
import { Option } from "../../interfaces/Global";
import styles from "./Dropdown.module.css";

interface DropdownProps {
	options: Option[]
	onSelect: Function,
	defaultValue: string,
}

export const Dropdown: FC<DropdownProps> = ({ options, onSelect, defaultValue }) => {
	const [open, isOpen] = useState<boolean>(false);
	const handleChange = (event: any) => {
    const selectedOption: Option | undefined = options.find(option => option.value === event.target.value);
    onSelect(selectedOption);
  };

	return (
		<div className={styles["custom-select"]}>
			 <select defaultValue={defaultValue} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
		</div>
	);
}

export default Dropdown;