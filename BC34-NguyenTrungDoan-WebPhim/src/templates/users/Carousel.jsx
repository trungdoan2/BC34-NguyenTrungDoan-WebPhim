import React,{useEffect} from 'react';
import { Carousel } from 'antd';
import {useSelector,useDispatch} from 'react-redux';

import axios from "axios"
import { getCarouselAction } from '../../redux/actions/CarouselActions';
import css from '../../pages/TrangChu/HomeMenu/HomeCarousel.css';




export default function (props) {
 const {arrImg} = useSelector(state=>state.CarouselReducer);

 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getCarouselAction);
 },[])


  const contentStyle = {
    height: '700px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"
  };


  const renderImg = () => {
    return arrImg.map((item,index) => {
      return  <div key={index}>
      <div style={{...contentStyle,backgroundImage: `url(${item.hinhAnh})`}}>
      <img src= {item.hinhAnh} alt= {item.hinhAnh} className='w-full opacity-0' />
      </div>
    </div>
    })
  }
  return (
    <Carousel autoplay>
     {renderImg()}
  </Carousel>
);
}
