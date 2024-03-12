import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store.ts';
import { setAvatarColor } from "@features/filters/model";
import { RadioInputList, RadioInputProps } from "@shared/UIKit/radioInputs";
import { GroupObject } from '@entities/group/model/types';

import styles from "./filter.module.sass"

export const ColorFilter: React.FC = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.filter);
    const groups = useSelector((state: RootState) => state.groups.groups);
    const extractColorsFromGroups = [...new Set(groups.map((group: GroupObject) => group.avatar_color).filter(color => color))] as string[];
    const handleAvatarColorChange = (color: string) => {
        dispatch(setAvatarColor(color));
    };

    const options: RadioInputProps[] = [
        { value: 'any', label: 'Любой цвет', checked: filter.avatar_color === 'any', onChange: () => handleAvatarColorChange('any') },
        ...extractColorsFromGroups.map((color: string) => ({
            value: color,
            label: color,
            checked: filter.avatar_color === color,
            onChange: () => handleAvatarColorChange(color)
        }))
    ];

    return (
        <div className={styles.filterContainer}>
            <h3 className={styles.filterContainerHeader}>Цвета аватарок</h3>
            <RadioInputList options={options} selectedValue={filter.avatar_color} onChange={(value) => handleAvatarColorChange(value)} />
        </div>
    );
};
