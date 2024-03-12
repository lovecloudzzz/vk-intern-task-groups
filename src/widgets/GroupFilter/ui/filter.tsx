import {ColorFilter, FriendsFilter, PrivacyFilter} from "@features/filters";
import styles from "./filter.module.sass"

export const Filter = () => {
    return (
        <div className={styles.filter}>
            <div className={styles.filterWidget}>
                <PrivacyFilter />
                <ColorFilter />
                <FriendsFilter />
            </div>
        </div>
    );
};

