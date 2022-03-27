import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTracks: [],
  loading: false,
  myTracks: [],
  initialTestimonials: [],
  sortOption: "newest",
  trackSelected: "all",
};

const appSlicer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTracks: (state, action) => {
      state.allTracks = action.payload;
    },
    setMyTracksAndTestimonials: (state, action) => {
      state.initialTestimonials = action.payload;
      state.allTracks.forEach((track) => {
        if (state.initialTestimonials.tracks.includes(track.slug)) {
          track.track_count =
            state.initialTestimonials.track_counts[track.slug];
          state.myTracks = [...state.myTracks, track];
        }
      });
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setTrackSelected: (state, action) => {
      state.trackSelected = action.payload;
    },
  },
});

export const {
  setLoading,
  setTracks,
  setMyTracksAndTestimonials,
  setSortOption,
  setTrackSelected
} = appSlicer.actions;

export default appSlicer.reducer;
