import { configureStore } from '@reduxjs/toolkit';
import {friendsReducer} from "@features/friends/model";
import {groupsReducer} from "@entities/group/model";
import {filterReducer} from "@features/filters/model";

export const store = configureStore({
    reducer: {
        friends: friendsReducer,
        groups: groupsReducer,
        filter: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
