import { quanLyPhimService } from "../../Services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../types/QuanLyPhimType";
import {history} from "../../utils/history"





export const layDanhSachPhimAction = (tenPhim = "") =>{
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim);
    
    
            dispatch({
                type:SET_DANH_SACH_PHIM,
                arrPhim: result.data.content
              })
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const themPhimUploadHinhAction = (formData) =>{
  return async (dispatch) => {
   try {
    let result = await quanLyPhimService.themPhimUploadHinh(formData);
    alert("thêm thành công")
    console.log("result",result.data.content);
   } catch (error) {
    console.log("error",error);
   }
  }
}

export const capNhatPhimUploadAction = (formData) => {
 return async (dispacth) => {
    try {
       const result = await quanLyPhimService.CapNhatPhimUpload(formData);
        alert("Cập nhật phim thành công")
        console.log("result",result.data.content);

        dispacth(layThongTinPhimAction())
        history.push("/admin/films");
    } catch (error) {
        console.log("error",error);
    }
 }
}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
        const result = await quanLyPhimService.layThongTinPhim(maPhim);
        
         dispatch({
            type: SET_THONG_TIN_PHIM,
            thongTinPhim: result.data.content
         })
        } catch (error) {
         console.log("error",error);
        }
       }
}

export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.xoaPhim(maPhim);
            console.log("result", result.data.content);
            alert("Xóa phim thành công !")
            dispatch(layDanhSachPhimAction())
            } catch (error) {
             console.log("error",error);
            }
    }
}