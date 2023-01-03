//redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import demoReducer from './reducers/demoReducer';
import { CarouselReducer } from './reducers/CarouselReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer';
import thunk from 'redux-thunk';


export const store = configureStore({
  reducer: {
    demoReducer,
    CarouselReducer,
    QuanLyRapReducer,
    QuanLyPhimReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer
  },
})



//redux
// import { combineReducers, createStore } from 'redux';
// import { DemoReducer } from './reducers/DemoReducer';

// const rootReducer = combineReducers({
//   DemoReducer
// })

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());