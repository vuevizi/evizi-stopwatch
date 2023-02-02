import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Record, RecordState} from '../../interfaces/interfaces';
import {RootState} from '../../redux/store';

const initialState = {
  amountOfRecords: 0,
  timeRecords: [],
} as RecordState;

const RecordTimeSlice = createSlice({
  name: 'RecordTime',
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<Record>) => {
      state.amountOfRecords++;
      const idOfRecord = state.amountOfRecords;
      const {minutes, seconds, milliseconds} = action.payload;
      const record = {
        id: idOfRecord,
        minutes,
        seconds,
        milliseconds,
      };
      state.timeRecords = [...state.timeRecords, record];
    },
    deleteAllRecord: (state, action: PayloadAction) => {
      state.timeRecords = [];
      state.amountOfRecords = 0;
    },
  },
});

export default RecordTimeSlice.reducer;
export const {addRecord, deleteAllRecord} = RecordTimeSlice.actions;
export const getTimeRecords = (state: RootState) =>
  state.RecordTimeReducer.timeRecords;
