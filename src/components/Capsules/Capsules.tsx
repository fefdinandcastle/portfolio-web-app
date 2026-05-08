import { FC, useState } from "react";
import styles from "./Capsules.module.css";
import { Option } from "../../interfaces/Global";

interface CapsulesProps {
  options: Option[];
  onSelect: (option: Option) => void;
  defaultOption: Option;
}

export const Capsules: FC<CapsulesProps> = ({ options, onSelect, defaultOption }) => {
  const [selected, setSelected] = useState<Option>(defaultOption);

  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((option) => {
        const isSelected = selected.value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => {
              setSelected(option);
              onSelect(option);
            }}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium
              border backdrop-blur-md
              transition-all duration-200 ease-out
              ${isSelected
                ? "bg-gray-900/8 border-gray-900/25 text-gray-900 shadow-sm shadow-gray-400/20"
                : "bg-gray-500/6 border-gray-400/20 text-gray-500 hover:bg-gray-500/10 hover:text-gray-700 hover:border-gray-400/30"
              }
            `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default Capsules;