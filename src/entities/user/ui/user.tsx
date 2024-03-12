import {UserObject} from "@entities/user/model";
import React from "react";
import styles from "./user.module.sass"

export const User: React.FC<UserObject> = (user) => {
    return (
        <a className={styles.user}>
            <h2 className={styles.userName}>{user.first_name}</h2>
            <h2 className={styles.userName}>{user.last_name}</h2>
        </a>
    );
};