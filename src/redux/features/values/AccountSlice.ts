import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/Store';

export interface AccountState {
    values: Array<string>;
    data: string;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: AccountState  = {
    values: [],
    data: '',
    status: 'idle',
};

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        set_values: (state, action) => {
            state.values = action.payload;
        },
        set_data: (state, action) => {
            state.data = action.payload;
        }
    },
});

export const { set_values } = accountSlice.actions;
export const { set_data} = accountSlice.actions;

export const selectValues = (state: RootState) => state.account_values.values;
export const selectData = (state: RootState) => state.other_data.data;

export default accountSlice.reducer;
