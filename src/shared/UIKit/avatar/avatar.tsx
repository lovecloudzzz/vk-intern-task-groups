import React from 'react';
import styles from './avatar.module.sass'
import {AvatarProps} from "@shared/UIKit/avatar/types";

export const Avatar: React.FC<AvatarProps> = ({ color }) => {
    return (
        <div className={styles.avatar}>
            <a className={styles.avatar_photo} style={{ backgroundColor: color}}></a>
        </div>
    );
};
