import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {

  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)

  console.log(userLogin);
  return (
    <div className='p-5'>
      <h3 className='text-2xl'>Thông Tin Tài Khoản</h3>
      
   <div className="flex justify-center">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
  <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyD3SI8Qdekp6twYtnVVcpKfHw7WVQGy9Yfd32EiXPZI30cEgXJ-XhquB0ObTnutlwQrM&usqp=CAU" alt="" />

    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Tên tài khoản: {userLogin.taiKhoan}</h5>
      <p className="text-gray-700 text-base mb-4">
        Email: {userLogin.email}
      </p>
      <p className="text-gray-700 text-base mb-4">
       Họ Tên : {userLogin.hoTen}
      </p>

      <p className="text-gray-700 text-base mb-4">
        Mã loại người dùng: {userLogin.maLoaiNguoiDung}
      </p>
      <p className="text-gray-700 text-base mb-4">
        Số Điện Thoại: {userLogin.soDT}
      </p>
      <p className="text-gray-600 text-xs">Mã Nhóm: {userLogin.maNhom}</p>
    </div>
  </div>
</div>

      
    </div>
  )
}
