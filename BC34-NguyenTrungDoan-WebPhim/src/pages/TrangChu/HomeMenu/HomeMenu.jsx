import React, { Component, Fragment } from 'react';
import { Radio, Space, Tabs } from 'antd';
import { NavLink } from "react-router-dom";
import moment from 'moment';


const {TabPlane} = Tabs;

export default class HomeMenu extends Component {
    state = {
        tabPosition : 'left',
    };
    changedTabPosition = e => {
        this.setState({tabPosition: e.target.value});
    };
    componentDidMount() {
       console.log(this.props,"props123");
    }

    renderHeThongRap = () => {
   return this.props.heThongRapChieu?.map((heThongRap,index) => {
    let  {tabPosition} = this.state;
     return   <TabPlane tab = {<img src={heThongRap.logo} className='rounded-circle' width="70" height="70" />} key ={index}>
       <Tabs tabPosition={tabPosition} >
        {heThongRap.lstCumRap?.map((cumRap,index) => {
          return  <TabPlane tab = {
          <div style={{width: '300px',display: 'flex'}}>
          <img src={heThongRap.logo} className='rounded-circle' width="50"  /> < br/>
          <div className='text-left ml-2'>
            {cumRap.tenCumRap}
          <p className='text-red-200'>Chi Tiết</p>
          </div>
          </div>
          }

          key ={index}>
            
            {cumRap.danhSachPhim.slice(0,5).map((phim,index)=>{
              return <Fragment key={index}>
              <div className='my-5' >
                 <div style={{display: 'flex'}}>
                  <img style={{width:100,height:100}} src={phim.hinhAnh} alt={phim.tenPhim} />
                    <div className='ml-2'>
                    <h3 className=' text-2xl text-green-800'>{phim.tenPhim}</h3>
                     <p>{cumRap.diaChi}</p>
                     <div className='grid grid-cols-6 gap-6'>
                     {phim.lstLichChieuTheoPhim?.slice(0,12).map((lichChieu,index) => {
                      return <NavLink className='text-2xl text-yellow-400' to="/" key={index}>
                         {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                      </NavLink>
                     })}
                     </div>
                    </div>
                 </div>
             
              </div>
              <hr />
              </Fragment>
            })}
          </TabPlane>
           
        })}
         </Tabs>
 </TabPlane>
   })
    }
  render() {
    const  {tabPosition} = this.state;
    return (
      <>
     <Tabs tabPosition={tabPosition} >
        {this.renderHeThongRap()}
       </Tabs>
      </>
    );
  }
}
