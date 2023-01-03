import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType"


const stateDefault = {
    chiTietPhongVe: {
    thongTinPhim: {}
  },
 danhSachGheDangDat: [
  ]
}

export const QuanLyDatVeReducer = (state=stateDefault,action) => {
  switch (action.type) {
     case SET_CHI_TIET_PHONG_VE: {
        state.chiTietPhongVe = action.chiTietPhongVe;
        return {...state};
     }
     case DAT_VE: {
      
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(GheDD => GheDD.maGhe === action.gheDuocChon.maGhe)

      if (index!=-1) {
        danhSachGheCapNhat.splice(index,1);
      }else {
          danhSachGheCapNhat.push(action.gheDuocChon)
      }
      console.log(action);
         
      return {...state,danhSachGheDangDat: danhSachGheCapNhat}
     }

    default: return {...state}
       
  }
} 