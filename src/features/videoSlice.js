import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

// Async thunk for uploading video
export const uploadVideo = createAsyncThunk(
  'video/uploadVideo',
  async ({title, description, videoFile, thumbnailFile, userId}, { rejectWithValue }) => {

    try {
      let videoURL = "";
      let thumbnailURL = "";

      if (videoFile !== null){
        const videoRef = ref(storage, `videos/${videoFile.name}`);
        const videoResponse = await uploadBytes(videoRef, videoFile);
        videoURL = await getDownloadURL(videoResponse.ref);
      }

      if (thumbnailFile !== null){
        const thumbnailRef = ref(storage, `thumbnails/${thumbnailFile.name}`);
        const thumbnailResponse = await uploadBytes(thumbnailRef, thumbnailFile);
        thumbnailURL = await getDownloadURL(thumbnailResponse.ref);
      }

      const response = await axios.post('https://youtube-clone-api.chungmangjie200.repl.co/createvideo', {
        title, description, videoURL, thumbnailURL, userId
      });

      return response.data;  // The newly created video
    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
);

//Async thunk for fetching all videos from database
export const fetchVideoById = createAsyncThunk(
    'video/fetchVideoById',
    async (videoId, {rejectWithValue}) => {
        try {
            const response = await axios.get(`https://youtube-clone-api.chungmangjie200.repl.co/fetchvideo/${videoId}`);
            return response.data; //Video data
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)

// Video slice
export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    video: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadVideo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add video to state
        state.video = action.payload;
      })
      .addCase(uploadVideo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchVideoById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add fetched video to state
        state.video = action.payload;
      })
      .addCase(fetchVideoById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  },
});

export default videoSlice.reducer;
