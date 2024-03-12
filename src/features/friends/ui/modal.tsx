import React, { useEffect } from 'react';
import { User } from "@entities/user/ui/user.tsx";
import { correctName } from "@features/friends/utils";
import styles from "./modal.module.sass";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, FriendsObject, openModal } from "@features/friends/model";
import { RootState } from "@app/store.ts";

export const FriendsModal: React.FC<FriendsObject> = ({ users, groupId }) => {
    const dispatch = useDispatch();
    const openGroupId = useSelector((state: RootState) => state.friends.openGroupId);
    const isModalOpen = useSelector((state: RootState) => state.friends.isModalOpen);
    const friendCount = users?.length;
    const displayName = correctName(friendCount);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const handleFriendsCountClick = () => {
        dispatch(openModal(groupId));
    };

    const handleModalContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <>
            <h3 onClick={handleFriendsCountClick} className={styles.friendsNumber}>
                {friendCount} {displayName}
            </h3>
            {openGroupId === groupId && (
                <div onClick={handleCloseModal} className={styles.friendsModal}>
                    <div className={styles.friendsModalContainer} onClick={handleModalContainerClick}>
                        <ul className={styles.friendsModalContainerList}>
                            {users?.map((friend, index) => (
                                <li key={index}><User first_name={friend.first_name} last_name={friend.last_name} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};
