import React from 'react';
import {RadioInputProps} from "@shared/UIKit/radioInputs/types.ts";
import styles from "./radioInput.module.sass"

export const RadioInput: React.FC<RadioInputProps> = ({ value, label, checked, onChange }) => {
    return (
        <label className={styles.label}>
            <input type="radio" value={value} checked={checked} onChange={onChange}/>
            {label}
        </label>
    );
};
