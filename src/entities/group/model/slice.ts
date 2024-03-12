import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GroupObject } from '@entities/group/model/types.ts';

interface GroupsState {
    groups: GroupObject[];
}

const initialState: GroupsState = {
    groups: [],
};

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        fetchGroupsSuccess(state, action: PayloadAction<GroupObject[]>) {
            state.groups = action.payload;
        },
    },
});

export const { fetchGroupsSuccess } = groupsSlice.actions;

export default groupsSlice.reducer;
