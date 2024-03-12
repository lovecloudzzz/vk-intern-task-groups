import { createSlice } from '@reduxjs/toolkit';

interface FriendsState {
    openGroupId: number | null;
    isModalOpen: boolean;
}

const initialState: FriendsState = {
    openGroupId: null,
    isModalOpen: false,
};

const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        openModal(state, action) {
            state.openGroupId = action.payload;
            state.isModalOpen = true;
        },
        closeModal(state) {
            state.openGroupId = null;
            state.isModalOpen = false;
        },
    },
});

export const { openModal, closeModal } = friendsSlice.actions;

export default friendsSlice.reducer;
