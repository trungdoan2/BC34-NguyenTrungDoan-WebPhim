import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";

const stateDefault = {
    arrPhim: [
        {
            "maPhim": 6061,
            "tenPhim": "Hành Tinh Mất Trật Tự 88888",
            "biDanh": "hanh-tinh-mat-trat-tu-88888",
            "trailer": "https://www.youtube.com/embed/CNfNsNkgxjo",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/hanh-tinh-hon-loan-2_gp01.jpg",
            "moTa": "Todd Hewwitt (Tom Holland) tình cờ phát hiện ra Viola (Daisy Ridley)- một cô gái sống sót sau khi phi thuyền của cô gặp nạn và rơi xuống hành tinh của cậu. Hành tinh này không hề có bóng dáng phụ nữ, còn đàn ông thì bị ảnh hưởng bởi 'Tiếng Ồn' - một thế lực thể hiện toàn bộ suy nghĩ của họ ra bên ngoài. Vì là cô gái duy nhất trên hành tinh kì lạ này, tính mạng của Viola bị đe dọa. Todd quyết tâm bảo vệ Viola và cả hai bị cuốn vào cuộc phiêu lưu nguy hiểm. Từ đó, Todd dần khám phá ra năng lực đặc biệt của mình, và phát hiện ra những bí mật đen tối của hành tinh mà cậu đang sống..",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-11-09T15:02:23.323",
            "danhGia": 9,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
    ],
    dangChieu: true,
    sapChieu: true,
    arrPhimDefault: [],

    filmDetail: {},
    thongTinPhim: {}
}

export const QuanLyPhimReducer = (state = stateDefault,action) => {
    switch (action.type) {
        
        case SET_DANH_SACH_PHIM: {
            state.arrPhim = action.arrPhim;
            state.arrPhimDefault = state.arrPhim;
            return {...state}
        }
        
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;
            state.arrPhim = state.arrPhimDefault.filter(film => film.dangChieu === state.dangChieu)
            return {...state}
        }
        case SET_FILM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu;
            state.arrPhim = state.arrPhimDefault.filter(film => film.sapChieu === state.sapChieu)
            return {...state}
        }
        case SET_CHI_TIET_PHIM : {
            state.filmDetail = action.filmDetail;
            return {...state}
        }
        case SET_THONG_TIN_PHIM : {
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }
    
        default: return {...state}
    }

}