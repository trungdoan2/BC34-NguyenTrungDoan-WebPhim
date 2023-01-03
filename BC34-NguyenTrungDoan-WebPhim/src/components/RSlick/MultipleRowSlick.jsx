import React, { Component } from "react";
import styleSlick from "../RSlick/MultipleRowSlick.module.css";
import Slider from "react-slick";
import Film from "../Film";
import Film_Flip from "../Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/types/QuanLyPhimType";
import { QuanLyPhimReducer } from "../../redux/reducers/QuanLyPhimReducer";

//

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const renderPhim = () => {
    return props.arrPhim.slice(0, 12).map((item, index) => {
      return (
        <div key={index}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };
  let activeClassDC = dangChieu === true ? "active_Film" : "non_active_Film";

  let activeClassSC = sapChieu === true ? "active_Film" : "non_active_Film";

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500,
    row: 2,
    slidesPreRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div>
        <button
          type="button"
          className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold border rounded mr-2`}
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          Phim Đang Chiếu
        </button>
        <button
          type="button"
          className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold border rounded  border-gray-800 border`}
          onClick={() => {
            const action = { type: SET_FILM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          Phim Sắp Chiếu
        </button>
      </div>

      <Slider {...settings}>{renderPhim()}</Slider>
    </div>
  );
};
export default MultipleRowSlick;
