import { GroupObject } from "@entities/group/model";
import {Avatar} from "@shared/UIKit/avatar/avatar.tsx";
import {FriendsModal} from "@features/friends/ui";
import React from "react";
import styles from "./card.module.sass"

export const GroupCard: React.FC<GroupObject> = (group) => {
    const avatarColor = group.avatar_color || 'white';
    return (
        <div className={styles.card}>
            <Avatar color={avatarColor} />

            <div className={styles.cardContainer}>
                <h2 className={styles.cardContainerName}>{group.name}</h2>
                <h3 className={styles.cardContainerPrivacy}>{group.closed ? 'Закрытая' : 'Открытая'}</h3>
                <div className={styles.cardContainerNumbers}>
                    <h3 className={styles.cardContainerNumbersFollowers}>
                        Подписчиков: {group.members_count}
                    </h3>
                    <FriendsModal users={group.friends} groupId={group.id}></FriendsModal>
                </div>
            </div>
        </div>
    );
};
