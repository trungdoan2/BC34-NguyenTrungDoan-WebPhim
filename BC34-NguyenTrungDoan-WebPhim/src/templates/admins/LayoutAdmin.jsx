import React, {useState} from 'react'
import { Tabs } from 'antd';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { USER_LOGIN,token } from '../../utils/constant';
import { Fragment } from 'react';
import { history } from '../../utils/history';
import DashBoard from './DashBoard/DashBoard';
import SignIn from './SignIn';
import Films from './Films/Films';
import Showtime from './ShowTime/Showtime';

const TabPlane = Tabs


export default function LayoutAdmin() {

  function callback(key) {
    console.log(key);
  }
  

  function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}'
  }
  const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer)

  const operations = <Fragment>
  {! isEmptyObject(userLogin) ? <Fragment> <button onClick={() => {
   history.push("/profile")
  }}> <div style={{width:50,height:50,display:"flex",justifyContent:"center",alignItems:"center"}} className='text-2xl rounded-full bg-red-200'>{userLogin.taiKhoan.substr(0,1)}</div></button> <button className='text-blue-800' onClick={() => {
   localStorage.removeItem(USER_LOGIN)
   localStorage.removeItem(token)
   history.push("/")
   window.location.reload();
  }}>Đăng Xuất</button> </Fragment>: ""}
</Fragment>


  return (
    <div className='p-5'>
       <Tabs tabBarExtraContent={operations} defaultActiveKey='1' onChange={callback}>
      <TabPlane tab="User" key="1">
        <DashBoard/>
      </TabPlane>
      <TabPlane tab="Films" key="2">
        <Films/>
      </TabPlane>
  </Tabs>
    </div>
  )
}


