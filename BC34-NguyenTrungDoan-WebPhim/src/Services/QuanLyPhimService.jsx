import axios from "axios";
import {baseService} from "./baseService"
import { DOMAIN_BE, groupID } from "../utils/constant";
export class QuanLyPhimServices extends baseService {

  layDanhSachBanner = () => {
    return axios({
      url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
    });
  };
  
  layDanhSachPhim = (tenPhim = "") => {
   if (tenPhim !== "") {
    return axios({
      url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}&tenPhim=${tenPhim}`,
      method: "GET",
    });
   }else{
    return axios({
      url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
    });
   }
  };
 themPhimUploadHinh = (formData) => {
    return this.post(`api/QuanLyPhim/ThemPhimUploadHinh`,formData);
 }

 layThongTinPhim = (maPhim) => {
   return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
 }
 CapNhatPhimUpload = (formData) => {
   return this.post(`api/QuanLyPhim/CapNhatPhimUpload`,formData)
 }

 xoaPhim = (maPhim) => {
  return this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
}

}




export const quanLyPhimService = new QuanLyPhimServices();