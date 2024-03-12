import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store.ts';
import { setFriends } from '../model';
import { RadioInputList, RadioInputProps } from '@shared/UIKit/radioInputs';
import styles from "./filter.module.sass"

export const FriendsFilter: React.FC = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.filter);

    const handleFriendsFilterChange = (friends: 'any' | 'with' | 'without') => {
        dispatch(setFriends(friends));
    };

    const options: RadioInputProps[] = [
        {
            value: 'any',
            label: 'Любые',
            checked: filter.friends === 'any',
            onChange: () => handleFriendsFilterChange('any'),
        },
        {
            value: 'with',
            label: 'С друзьями',
            checked: filter.friends === 'with',
            onChange: () => handleFriendsFilterChange('with'),
        },
        {
            value: 'without',
            label: 'Без друзей',
            checked: filter.friends === 'without',
            onChange: () => handleFriendsFilterChange('without'),
        },
    ];

    return (
        <div className={styles.filterContainer}>
            <h3 className={styles.filterContainerHeader}>Друзья</h3>
            <RadioInputList
                options={options}
                selectedValue={filter.friends}
                onChange={(value) => handleFriendsFilterChange(value as 'any' | 'with' | 'without')}
            />
        </div>
    );
};
