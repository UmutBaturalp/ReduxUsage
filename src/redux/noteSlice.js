import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const {title, description} = action.payload;
      state.notes.push({
        id: Date.now(),
        title,
        description,
      });
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
  },
});

export const {addNote, removeNote} = noteSlice.actions;
export default noteSlice.reducer;
