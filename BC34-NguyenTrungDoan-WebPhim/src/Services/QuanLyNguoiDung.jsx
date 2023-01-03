import axios from "axios";
import {baseService }from "./baseService";
import { DOMAIN_BE, token, groupID } from "../utils/constant";
export class QuanLyNguoiDungService extends baseService {

  dangNhap = (thongTinDangNhap) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
  };
  
   dangKy = (thongTin) => {
    return this.post('api/QuanLyNguoiDung/DangKy',thongTin)
  };

 layThongTinNguoiDung= () => {
  return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')

  // return axios({
  // url: "https://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
  //   method: "POST"
  // });
 };

 layDanhSachNguoiDung = () => {
  return axios({
    url: `${DOMAIN_BE}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`,
    method: "GET",
  });
};

 themNguoiDung = (thongTinNguoiDung) => {
  return axios({
    url: `${DOMAIN_BE}/api/QuanLyNguoiDung/ThemNguoiDung`,
    method: "POST",
    data: thongTinNguoiDung,
    headers: {
      Authorization: "Bearer " + localStorage.getItem(token),
    },
  });
};
capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
  return axios({
    url: `${DOMAIN_BE}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
    method: "PUT",
    data: thongTinNguoiDung,
    headers: {
      Authorization: "Bearer " + localStorage.getItem(token),
    },
  });
};
xoaNguoiDung = (taiKhoan) => {
  return axios({
    url: `${DOMAIN_BE}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(token),
    },
  });
};


taoLichChieu = (thongTin) => {
  return axios({
    url: `${DOMAIN_BE}/QuanLyDatVe/TaoLichChieu`,
    method: "POST",
    data: thongTin,
    headers: {
      Authorization: "Bearer " + localStorage.getItem(token),
    },
  });
};
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();