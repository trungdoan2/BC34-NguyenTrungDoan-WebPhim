import React, { useEffect, useState } from "react";
import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/scss/circle.scss";
import { Radio, Space, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_CHI_TIET_PHIM } from "../../redux/types/QuanLyRapType";
import { NavLink, useParams } from "react-router-dom";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { Rate } from "antd";

const { TabPane } = Tabs;

export default function Detail() {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  console.log(filmDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    //  let {id} = props.match.params;

    dispatch(layThongTinChiTietPhim(id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#C780FF" // required
        color="#14AEFF" // default color is white
        blur={20} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                src={filmDetail.hinhAnh}
                style={{ width: "100%" }}
                alt="123"
              />
              <div
                className="col-span-2  text-white"
                style={{ marginTop: "25%" }}
              >
                <p className="text-sm">
                  Ngày Chiếu:{" "}
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}{" "}
                </p>
                <p className="text-3xl leading-3">{filmDetail.tenPhim}</p>
                <p>{filmDetail.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 ">
            <h1
              style={{ marginRight: "60%" }}
              className="text-green-400 text-2xl"
            >
              {" "}
              <Rate allowHalf value={filmDetail.danhGia / 2} />{" "}
            </h1>
            <div className={`c100 p${filmDetail.danhGia * 10} big`}>
              <span className="text-white">{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>
         <div className="mt-20 ml-72 w-2/3 container bg-white px-5 py-5" >
        <Tabs defaultActiveKey="1" centered >
          <TabPane tab=" Lịch Chiếu" key="1">
          <div >
          <Tabs tabPosition={"left"}>
            {filmDetail.heThongRapChieu?.map((htr, index) => {
              return (
                <TabPane
                  tab={
                    <div>
                      {" "}
                      <img
                        src={htr.logo}
                        width={50}
                        className="rounded-full"
                        alt={htr.logo}
                      />{" "}
                      {htr.tenHeThongRap}
                    </div>
                  }
                  key={index}
                >
                  {htr.cumRapChieu?.map((cumRap,index) => {
                    return <div className="mt-5" key={index} >
                        <div className="flex flex-row" >
                        <img style={{width:60,height:60}} src={cumRap.hinhAnh} />
                        <div className="ml-2">
                          <p style={{fontSize:20,fontWeight:'bold',lineHeight:1}}>{cumRap.tenCumRap}</p>
                          <p className="text-gray-400" style={{marginTop:0}}>{cumRap.diaChi}</p>
                        </div>
                        </div>
                        <div className="thong-tin-lich-chieu grid grid-cols-4">
                          {cumRap.lichChieuPhim?.map((lichChieu,index) => {
                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1">
                                { moment( lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                              </NavLink>
                          })}
                        </div>
                    </div>
                  })}
                </TabPane>
              );
            })}

            {/* <TabPane tab="Tab 2" key="2">
              Content Tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content Tab 3
            </TabPane>  */}
          </Tabs>
        </div>
          </TabPane>
          <TabPane tab="Thông Tin" key="2">
            <h1>{filmDetail.tenPhim}</h1>
            <a href={filmDetail.trailer}>Trailer</a>
            <p>{filmDetail.moTa}</p>
          </TabPane>
          <TabPane tab="Đánh Giá" key="3">
              Content of Tab Pane 3
          </TabPane>
        </Tabs>
        </div>

   
      </CustomCard>
    </div>
  );
}
