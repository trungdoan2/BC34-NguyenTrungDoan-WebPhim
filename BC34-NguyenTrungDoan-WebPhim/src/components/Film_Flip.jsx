import React from 'react';
import '../components/Film_flip.css';
import { NavLink } from 'react-router-dom';

export default function Film_Flip(props) {

const {item} = props;

  return (
   <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
        <div>
      <img  src={item.hinhAnh} alt="Avatar" style={{width: 300, height: 300}} />
      </div>
    </div>
    <div className="flip-card-back">
      <h1>{item.tenPhim}</h1>
       <img src={item.hinhAnh} alt="" style={{width: 300, height: 150}} />
       <div className='bg-orange-300 cursor-pointer py-2 bg-indigo-300 my-2 text-success-50 font-bold w-full'>
       <NavLink to ={`/detail/${item.maPhim}`} >Đặt Vé</NavLink>
       </div>
     
    </div>
  </div>
</div>

  )
}
