import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface UserState {
  name: string | null,
  email: string | null,
  id: string | null,
  isLoggedIn: boolean
}

// Define the initial state using that type
const initialState: UserState = {
  name: null,
  email: null,
  id: null,
  isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    }
  },
})

export const { setUserData } = userSlice.actions;

// Selector to get user data from the state
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
