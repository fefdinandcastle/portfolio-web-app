import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/appContext";
import { Language } from "../../utils/globals";
import { Option } from "../../interfaces/Global";
import styles from "./Dropdown.module.css";
import { TbChevronUp, TbChevronDown } from "react-icons/tb";

interface DropdownProps {
	options: Option[]
	onSelect: Function,
	defaultValue: Option,
}

export const Dropdown: FC<DropdownProps> = ({ options, onSelect, defaultValue }) => {
	const [open, isOpen] = useState<boolean>(false);
	const openRef = useRef(open);
	const [selected, setIsSelected] = useState<Option>(defaultValue);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	
	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		}
	},[])

	const handleClickOutside  = useCallback((event: MouseEvent) => {
		console.log(`[Dropdown] clickEvent | opened: `,open);
		if(open && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
			console.log(`[Dropdown] closedMenu.`);
			isOpen(false);
		}
    },[open]);

	return (
		<div className={styles["dropdown-parent"]}>
			<div className={styles["dropdown"]} ref={dropdownRef} onClick={(e: any) => {
						isOpen(!open);
					}}>
				<div className={styles["dropdown-btn"]}>
					{selected.label}
					<span className={styles["dropdown-icon-container"]}>
						{open ? <TbChevronUp/> : <TbChevronDown/>}
					</span>
				</div>
				<div
					className={styles["dropdown-content"]}
					style={{ display: open ? "block" : "none" }}>
					{
						options.map((option: Option, index: number) => {
							return <div
								key={`dd_${index}`}
								className={styles["item"]}
								onClick={(e) => {
									setIsSelected(option);
									onSelect(option);
									isOpen(!open);
								}}
							>
								{option.label}
							</div>
						})
					}
				</div>
			</div>
		</div>
	);
}

export default Dropdown;