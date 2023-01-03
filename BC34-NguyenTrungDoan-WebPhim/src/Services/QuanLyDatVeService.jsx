import { ThongTinDatVe } from "../_core/Models/ThongTinDatVe";
import {baseService }from "./baseService";
import axios from "axios";
import { DOMAIN_BE, token } from "../utils/constant";

// import { DOMAIN_BE, groupID } from "../utils/constant";
export class QuanLyDatVeService extends baseService {

  layChiTietPhongVe = (maLichChieu) => {
     return axios({
    url: `https://movieapi.cyberlearn.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    method: "GET",
  });
  };
  

  datVe = (thongTinDatVe) => {
    return axios({
      url: `${DOMAIN_BE }/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };

  taoLichChieu = (thongTinLichChieu) => {
   return this.post(`api/QuanLyDatVe/TaoLichChieu`,thongTinLichChieu);
  }
 
}

export const quanLyDatVeService = new QuanLyDatVeService();