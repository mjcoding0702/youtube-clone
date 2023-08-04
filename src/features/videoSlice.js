import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { useDispatch } from 'react-redux';

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
);


// Async thunk for liking/disliking a video
export const likeVideo = createAsyncThunk(
    'video/likeVideo',
    async ({videoId, userId, likeType}, { rejectWithValue, dispatch }) => {
      try {
        const response = await axios.post('https://youtube-clone-api.chungmangjie200.repl.co/likevideo', {
          videoId, userId, likeType
        });
        console.log(likeType)

        return { likeType };  // The like/dislike status
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.message);
      }
    }
);
  
// Async thunk for fetching likes/dislikes for a video
export const fetchLikesDislikes = createAsyncThunk(
    'video/fetchLikesDislikes',
    async (videoId, { rejectWithValue }) => {
      try {
        const response = await axios.get(`https://youtube-clone-api.chungmangjie200.repl.co/fetchlikes/${videoId}`);
        return response.data;  // The likes/dislikes data
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

// Async thunk for fetching initial likeType of user
export const fetchLikeType = createAsyncThunk (
    'video/fetchLikeType',
    async({videoId,userId}, {rejectWithValue}) => {
        try {
            const response = await axios.post(`https://youtube-clone-api.chungmangjie200.repl.co/fetchliketype`, { videoId, userId });
            return response.data;
        } catch(error) {
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
      userLikeStatus: null,
      likesDislikes: { likes: 0, dislikes: 0 },
    },
    reducers: {
        updateLikesDislikes: (state, action) => {
            state.likesDislikes = action.payload;
        },
        updateLikeStatus: (state, action) => {
          state.userLikeStatus = action.payload;
        }
    },
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
        .addCase(likeVideo.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.userLikeStatus = action.payload; // Update the userLikeStatus

        })
        .addCase(likeVideo.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(fetchLikesDislikes.fulfilled, (state, action) => {
            state.likesDislikes = action.payload;
        })
        .addCase(fetchLikesDislikes.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(fetchLikeType.fulfilled, (state, action) => {
            state.userLikeStatus = action.payload;
        })
        
    },
  });

  export const { updateLikesDislikes, updateLikeStatus} = videoSlice.actions;
  export default videoSlice.reducer;
  
