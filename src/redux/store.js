import {configureStore} from '@reduxjs/toolkit';
import noteReducer from './noteSlice';

export const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});
