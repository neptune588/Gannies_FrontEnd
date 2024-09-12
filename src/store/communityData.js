import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postData: {
    posts: [],
    postLength: 0,
  },
};

const communityDataSlice = createSlice({
  name: 'communityData',
  initialState,
  reducers: {
    getPostData(state, action) {
      const { posts, totalPostsLength } = action.payload;

      state.postData.posts = [...posts];
      state.postData.postLength = totalPostsLength;
    },
  },
});

export const { getPostData } = communityDataSlice.actions;
export default communityDataSlice.reducer;
