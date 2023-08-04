import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

// Async thunk for signing in with Google
export const signInWithGoogle = createAsyncThunk(
  'user/signInWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Send a POST request to the '/signup' endpoint with the user's data
      const response = await axios.post('https://youtube-clone-api.chungmangjie200.repl.co/signup', {
        name: user.displayName,
        profileURL: user.photoURL,
        firebase_id: user.uid,
      });

      return response.data;  // The newly created user
    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
);

// User slice
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add user to state
        state.user = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
