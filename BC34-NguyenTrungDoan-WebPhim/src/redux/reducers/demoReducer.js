//rxslice
import { createSlice } from '@reduxjs/toolkit';

const initialState = 10;

const demoReducer = createSlice({
  name: "demoReducer",
  initialState,
  reducers: {
    changeNumber: (state, { type, payload }) => {
      state += payload;
      return state;
    },
  }
});

//quản lý actions
export const { changeNumber } = demoReducer.actions

export default demoReducer.reducer


//setup redux thunk






//rxreducer
// const initialState = 10;

// export const DemoReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "CHANGE_NUMBER": {
//       state += payload;
//       return state;
//     }
//     default:
//       return state
//   }
// }
