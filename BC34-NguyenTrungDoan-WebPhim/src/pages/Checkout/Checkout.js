import React, { Fragment, useEffect } from 'react';
import { token, USER_LOGIN } from '../../utils/constant';
import { Navigate, NavLink} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import  QuanLyNguoiDungReducer  from '../../redux/reducers/QuanLyNguoiDungReducer';
import style from "../Checkout/CheckOut.module.css"
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import { useParams } from "react-router-dom";
import "./CheckOut.css"
import { DAT_VE } from '../../redux/types/QuanLyDatVeType';
import { ThongTinDatVe } from '../../_core/Models/ThongTinDatVe';
import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import moment from 'moment';
import { history } from '../../utils/history';




 function Checkout() {

  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
  
  const {chiTietPhongVe,danhSachGheDangDat} = useSelector(state => state.QuanLyDatVeReducer)

  const {thongTinPhim,danhSachGhe} = chiTietPhongVe

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
     const action = layChiTietPhongVeAction(id)

    dispatch(action)
  },[])

  // console.log({chiTietPhongVe});

  if (!localStorage.getItem(USER_LOGIN)) {
     return <Navigate to="/login" />

  }

  // const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer)

  const rederSeats = () =>{
    return danhSachGhe?.map((ghe,index) => {

     let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
     let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
     let classGheDangDat = '';
     let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

     let classGheDaDuocDat = "";

     if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
      classGheDaDuocDat = "gheDaDuocDat"
     }

     if (indexGheDD!=-1) {
      classGheDaDat ="gheDangDat"
     }

      return <Fragment key={index}>
        <button onClick={() => {
          dispatch({
            type:DAT_VE,
            gheDuocChon:ghe
          })
        }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat }`} key={index}>{ghe.stt}</button> 
        {(index+1)%16 === 0 ? <br/> : ""}
      </Fragment>
    })
  }

  return (
    <div className='container min-h-screen'>
      <div className='grid grid-cols-12'>
          <div className='col-span-9'>
            <div className='flex flex-col items-center mt-5'>
            <div className='bg-black w-full' style={{width:'80%',height:10}}>     
            </div>
            <div className={`${style['hinh_thang']} text-center`}>
            <h3 className='mt-3 text-black'>M??n H??nh</h3>
            </div>
            <div>
              {rederSeats()}
            </div>
            </div>
            <div className='mt-5 flex justify-center'>
                <table className='table w-2/3' style={{border: "non"}}>
                  <thead>
                    <tr>
                      <th>Gh??? Ch??a ?????t</th>
                      <th>Gh??? ??ang ?????t</th>
                      <th>Gh??? Vip</th>
                      <th>Gh??? ???? ?????t</th>
                      <th>Gh??? M??nh ?????t</th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    <tr>
                    <td><button className='ghe text-center'>00</button></td>
                    <td><button className='ghe gheDangDat text-center'>00</button></td>
                    <td><button className='ghe gheVip text-center'>00</button></td>
                    <td><button className='ghe gheDaDat text-center'>00</button></td>
                    <td><button className='ghe gheDaDuocDat text-center'>00</button></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
          <div className='col-span-3'>
               <h3 className='text-green-400 text-center text-2xl'>0??</h3>
               <hr />
               <h3 className='text-xl'>{thongTinPhim.tenPhim}</h3>
               <p>{thongTinPhim.diaChi}</p>
               <p>Ng??y chi???u: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} {thongTinPhim.tenRap}</p>
               <hr />
               <div className='flex flex-row my-3'>
                 <div className='w-4/5'>
                 <span className='text-red-400 text-lg'>Gh???</span>

                 {danhSachGheDangDat.map((gheDD,index)=>{
                    return <span key={index} className="text-green-500 text-xl"> {gheDD.stt}</span>
                 })}
                 </div>
                 <div className='text-right col-span-1 '>
                  <span className='text-green-800 text-lg'>
                    {danhSachGheDangDat.reduce((tongTien,ghe,index)=> {
                      return tongTien += ghe.giaVe;
                    },0).toLocaleString()}
                  </span>
                 </div>
               </div>
               <hr />
               <div className='my-3'>
                <i>Email</i> <br />
                {userLogin.email}
               </div>
               <div className='my-3'>
                <i>Phone</i> <br />
                {userLogin.soDT}
               </div>
               <hr/>
               <div className='mb-0 h-full flex flex-col item-center' style={{marginBottom:0}}>
                  <div onClick={() => {
                    const thongTinDatVe = new ThongTinDatVe();
                    thongTinDatVe.maLichChieu = id;
                    thongTinDatVe.danhSachVe = danhSachGheDangDat;

                    console.log(thongTinDatVe);

                    dispatch(datVeAction(thongTinDatVe));
                  }} className='bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer'>
                       ?????T V??
                  </div>
               </div>
          </div>
      </div>
    </div>
  )
}
 
const {TabPlane} = Tabs;

function callback(key) {
  console.log(key);
}



export default  function (props)  {

  function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}'
  }
  const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer)
  const operations = <Fragment>
     {! isEmptyObject(userLogin) ? <Fragment> <button onClick={() => {
      history.push("/profile")
     }}> <div style={{width:50,height:50,display:"flex",justifyContent:"center",alignItems:"center"}} className='text-2xl rounded-full bg-red-200'>{userLogin.taiKhoan.substr(0,1)}</div>Hello ! {userLogin.taiKhoan}</button> <button className='text-blue-800' onClick={() => {
      localStorage.removeItem(USER_LOGIN)
      localStorage.removeItem(token)
      history.push("/")
      window.location.reload();
     }}>????ng Xu???t</button> </Fragment>: ""}
  </Fragment>
  

 return <div className='p-5'>
  <Tabs tabBarExtraContent={operations} defaultActiveKey='1' onChange={callback}>
      <TabPlane tab="01 CH???N GH??? & THANH TO??N" key="1">
          <Checkout {...props} />
      </TabPlane>
      <TabPlane tab="02 K???T QU??? ?????T V??" key="2">
          <KetQuaDatVe {...props} />
      </TabPlane>
      <TabPlane tab={<NavLink to="/"> <i className="fa-solid fa-house m-2" />
Home</NavLink>} key="3">
          
      </TabPlane>
  </Tabs>
 </div>
}


 function KetQuaDatVe (props) {

const dispatch = useDispatch()

 const {thongTinNguoiDung} = useSelector(state => state.QuanLyNguoiDungReducer);

 const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer);



 useEffect(() => {
   const action = layThongTinNguoiDungAction();
   dispatch(action)
 })

 const renderTicketItem = function () {
  return thongTinNguoiDung.thongTinDatVe?.map((ticket,index) =>{
    return    <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
      <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
      <div className="flex-grow">
        <h2 className="text-gray-900 title-font font-medium">{ticket.tenPhim}</h2>
        <p className="text-gray-500"> Gi??? chi???u:{moment(ticket.ngayDat).format("hh:mm A ")} <br/> Ng??y chi???u:{moment(ticket.ngayDat).format("-DD-MM-YY")}</p>
      </div>
    </div>
  </div>
  })
 }


   return <div className='p-5'>
 <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-800">L???ch S??? ?????t V??</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Ch??c B???n M???t Bu???i Xem Phim Vui V??? <br/> H??n H???nh ???????c Ph???c V??? Qu?? Kh??ch</p>
    </div>
    <div className="flex flex-wrap -m-2">
      {renderTicketItem()}

    </div>
  </div>
</section>

   </div>
}