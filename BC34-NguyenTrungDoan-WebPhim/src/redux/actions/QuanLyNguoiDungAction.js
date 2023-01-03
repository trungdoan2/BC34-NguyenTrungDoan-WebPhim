import { quanLyNguoiDungService } from "../../Services/QuanLyNguoiDung";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";
import {history} from '../../utils/history'



export const dangNhapAction = (thongTinDangNhap) =>{
   
  return async (dispatch) => {
    try {
        const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

        if (result.data.statusCode === 200) {
            dispatch({
                type: DANG_NHAP_ACTION,
                thongTinDangNhap: result.data.content
            });
        history.back()
        }
        console.log("result",result);
    } catch (error) {
        console.log("error",error);
    }
  }
}


export const layThongTinNguoiDungAction = () =>{
   
  return async (dispatch) => {
    try {
        const result = await quanLyNguoiDungService.layThongTinNguoiDung();

        if (result.data.statusCode === 200) {
            dispatch({
                type: SET_THONG_TIN_NGUOI_DUNG,
                thongTinNguoiDung: result.data.content
            });
        }
        console.log("result",result);
    } catch (error) {
        console.log("error",error);
    }
  }
}