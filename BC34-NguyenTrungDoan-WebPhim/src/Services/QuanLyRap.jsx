import axios from "axios";
import {baseService} from "./baseService"
import { DOMAIN_BE, groupID } from "../utils/constant";
export class QuanLyRapService {



  layDanhSachHeThongRap = () => {
    return axios({
      url: "https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00",
      method: "GET",
    });
  };
 


   layThongTinLichChieuPhim = (maPhim) => {
  return axios({
    url: `https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    method: "GET",
  });

   };

   layThongTinHeThongRap = () => {
    return axios({
      url: `https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
};

   layThongTinCumRap = (maHeThongRap) => {
    return axios({
      url: `https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    });
   }
}
export const quanLyRapService = new QuanLyRapService();