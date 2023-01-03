import React, {useEffect, useState} from 'react';
import HomeMenu from '../../pages/TrangChu/HomeMenu/HomeMenu';
import {useSelector,useDispatch} from 'react-redux';
import Film from '../Film';
import MultipleRowSlick from '../RSlick/MultipleRowSlick'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import {layDanhSachHeThongRapAction} from '../../redux/actions/QuanLyRapAction'
import Carousel from '../../templates/users/Carousel';
export default function CardSanPham(props) {

const {arrPhim} = useSelector(state => state.QuanLyPhimReducer);
const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);

const dispatch = useDispatch()


// const renderPhim = () => {
//   return arrPhim.map((phim,index) => {
//     return <Film key={index}/>
//   })
// }{
useEffect(()=>{
  const action = layDanhSachPhimAction();
  dispatch(action)

  dispatch(layDanhSachHeThongRapAction())
},[])
  return (
    <div>
      <Carousel />
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">

  <MultipleRowSlick arrPhim={arrPhim}/>
    {/* <div className="flex flex-wrap -m-4">
      {renderPhim()}
    </div> */}
  </div>
</section>
<div className='mx-36'>
  <HomeMenu heThongRapChieu = {heThongRapChieu}/>
</div>

    </div>
  )
}
