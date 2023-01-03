import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/imgs/logomovie.png';
import {useSelector} from "react-redux";
import { Fragment } from 'react';
import { history } from '../../utils/history';
import { USER_LOGIN,token } from '../../utils/constant';

export default function Header(props) {

const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer);

function isEmptyObject(obj){
  return JSON.stringify(obj) === '{}'
}


  const renderLogin = () => {
    if (isEmptyObject(userLogin)) {
      return <Fragment>
     <button onClick={() =>{
       history.push("/login")
     }} className="self-center px-8 py-3 rounded">Sign In</button>
     <NavLink className="nav=link" to="register"><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></NavLink> 
      </Fragment>
    }

    return <Fragment>  <button onClick={() =>{
      history.push("/profile")
    }} className="self-center px-8 py-3 rounded">Hello!  {userLogin.taiKhoan}</button>

   <button className='text-blue-800' onClick={() => {
      localStorage.removeItem(USER_LOGIN)
      localStorage.removeItem(token)
      history.push("/")
      window.location.reload();
     }}>Đăng Xuất</button>
    </Fragment>
    
  }
  return (
  <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
  <div className="container flex justify-between h-16 mx-auto">
    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
     <img src= {logo} alt="" width={100}/>
    </a>
    <ul className="items-stretch hidden space-x-3 lg:flex">
      <li className="flex">
      <NavLink className="nav-link" to="/">Trang Chủ</NavLink>
      </li>
      <li className="flex">
      <NavLink className="nav-link" to="/timkiem">Search</NavLink>
      </li>
      <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Liên hệ</a>
      </li>
      <li className="flex">
       <NavLink className="nav-link" to="/admin">DashBoard</NavLink>
      </li>
    </ul>
    <div className="items-center flex-shrink-0 hidden lg:flex">
    {renderLogin()}
  
    </div>
    <button className="p-4 lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>


  )
}
