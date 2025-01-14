import { FC, useState } from "react";
import styles from "./Capsules.module.css";
import { Option } from "../../interfaces/Global";

interface CapsulesProps {
	options: Option[],
  onSelect: Function,
  defaultOption: Option
}

export const Capsules: FC<CapsulesProps> = ({ options, onSelect, defaultOption }) => {
  const [selected, setSelected] = useState<Option | undefined>(defaultOption);

	return (
		<div className={styles["capsulesContainer"]}>
      {options.map((option: Option) => {
        return <div key={option.value} className={selected && selected.value === option.value ? styles["capsuleSelected"] : styles["capsule"]} onClick={(e: any) => {
          setSelected(option);
          onSelect(option);
        }}>
          <p>{option.label}</p>
        </div>
      })}
    </div>
  );
}

export default Capsules;