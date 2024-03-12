import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
    privacy: 'all' | 'closed' | 'open';
    avatar_color: 'any' | string;
    friends: 'any' | 'with' | 'without';
}

const initialState: FilterState = {
    privacy: 'all',
    avatar_color: 'any',
    friends: 'any',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPrivacy(state, action: PayloadAction<'all' | 'closed' | 'open'>) {
            state.privacy = action.payload;
        },
        setAvatarColor(state, action: PayloadAction<'any' | string>) {
            state.avatar_color = action.payload;
        },
        setFriends(state, action: PayloadAction<'any' | 'with' | 'without'>) {
            state.friends = action.payload;
        },
    },
});

export const { setPrivacy, setAvatarColor, setFriends } = filterSlice.actions;

export default filterSlice.reducer;
