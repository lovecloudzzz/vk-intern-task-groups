import React from "react";
import { RadioInputListProps, RadioInputProps } from "@shared/UIKit/radioInputs";
import {RadioInput} from "@shared/UIKit/radioInputs";
import styles from "./radioInputList.module.sass"

export const RadioInputList: React.FC<RadioInputListProps> = ({ options, selectedValue, onChange }) => {
    const handleOptionChange = (value: string) => {
        onChange(value);
    };

    return (
        <div className={styles.container}>
            {options.map((option: RadioInputProps) => (
                <RadioInput
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    checked={selectedValue === option.value}
                    onChange={() => handleOptionChange(option.value)}
                />
            ))}
        </div>
    );
};
