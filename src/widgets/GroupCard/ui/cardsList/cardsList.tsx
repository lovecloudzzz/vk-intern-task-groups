import React from 'react';
import {GroupCardListObject} from "@widgets/GroupCard/model";
import {GroupCard} from "@widgets/GroupCard/ui";
import styles from "./cardsList.module.sass"

export const GroupCardsList: React.FC<GroupCardListObject> = (props) => {
    return (
        <ul className={styles.cardsContainer}>
            {props.groups.map((group) => (
                <li key={group.id}>
                    <GroupCard {...group} />
                </li>
            ))}
        </ul>
    );
};
