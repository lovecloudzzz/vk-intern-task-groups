import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store.ts';
import { setPrivacy } from '../model';
import { RadioInputList, RadioInputListProps, RadioInputProps } from "@shared/UIKit/radioInputs";
import styles from "./filter.module.sass"

export const PrivacyFilter: React.FC = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.filter);

    const handlePrivacyChange = (privacy: 'all' | 'closed' | 'open') => {
        dispatch(setPrivacy(privacy));
    };

    const options: RadioInputProps[] = [
        { value: 'all', label: 'Все', checked: filter.privacy === 'all', onChange: () => handlePrivacyChange('all') },
        { value: 'closed', label: 'Закрытые', checked: filter.privacy === 'closed', onChange: () => handlePrivacyChange('closed') },
        { value: 'open', label: 'Открытые', checked: filter.privacy === 'open', onChange: () => handlePrivacyChange('open') },
    ];

    const radioInputListProps: RadioInputListProps = {
        options: options,
        selectedValue: filter.privacy,
        onChange: (value) => handlePrivacyChange(value as 'all' | 'closed' | 'open'),
    };

    return (
        <div className={styles.filterContainer}>
            <h3 className={styles.filterContainerHeader}>Приватность</h3>
            <RadioInputList {...radioInputListProps} />
        </div>
    );
};
