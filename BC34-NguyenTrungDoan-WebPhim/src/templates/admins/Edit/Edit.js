import React, { useEffect, useState } from 'react';
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch
} from 'antd';
import {useFormik} from "formik";
// import { moment } from 'moment';
import * as moment from 'moment';
import {useDispatch, useSelector} from "react-redux"
import {capNhatPhimUploadAction, layThongTinPhimAction, themPhimUploadHinhAction } from '../../../redux/actions/QuanLyPhimAction';
import { groupID } from '../../../utils/constant';
import { useParams } from 'react-router-dom';

export default function Edit() {
    const [componentSize, setComponentSize] = useState('default');

    const [imgSrc,setImgSrc] = useState("");

    const dispatch = useDispatch()

    const {thongTinPhim} = useSelector(state => state.QuanLyPhimReducer)

    console.log(thongTinPhim);

    const {id} = useParams();

    useEffect(() => {
        dispatch(layThongTinPhimAction(id))
    },[])

 const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
    maPhim: thongTinPhim.maPhim,
    tenPhim: thongTinPhim?.tenPhim,
    trailer: thongTinPhim.trailer,
    moTa: thongTinPhim.moTa,
    ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
    dangChieu: thongTinPhim.dangChieu,
    sapChieu: thongTinPhim.sapChieu,
    hot: thongTinPhim.hot,
    danhGia: thongTinPhim.danhGia,
    hinhAnh: null

  },
  onSubmit: (values) => {
    console.log("values",values);
    values.maNhom = groupID;

    let formData = new FormData();
   
    for(let key in values) {
    
      if (key !== "hinhAnh") {
        formData.append(key,values[key]);
      }else{
        if (values.hinhAnh !== null) {
            formData.append("File",values.hinhAnh,values.hinhAnh.name);
        }
      }
    }
    
    dispatch(capNhatPhimUploadAction(formData));
  
  }
 })

 const handleChangeDatePicker = (value) => {
   console.log("datepickerchange");
   let ngayKhoiChieu = moment(value);
   formik.setFieldValue("ngayKhoiChieu",ngayKhoiChieu)

 }
 
 const handleChangeSwitch = (name) =>{
     return (value) => {formik.setFieldValue(name, value)}
 }

 const handleChangeFile = async (e) =>{
  let file = e.target.files[0];

  if (file.type === "image/png" || file.type === " image/jpeg" || file.type === "image/gif") {

   await formik.setFieldValue("hinhAnh", file)
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = (e) => {
    console.log(e.target.result);
    setImgSrc(e.target.result);
    }
  }


 }

    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
  return (
    <div className='p-5'>
           <Form onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
        <h3 className='text-2xl'>Cập nhật phim</h3>
      <Form.Item label="Tên Phim">
        <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim}/>
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer}/>
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa}/>
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker format={"DD/MM/YYYY"}  onChange={handleChangeDatePicker} value= {moment(formik.values.ngayKhoiChieu)}/>
      </Form.Item>
      <Form.Item label="Đang Chiếu" >
        <Switch  onChange={handleChangeSwitch("dangChieu")} checked={formik.values.dangChieu}/>
      </Form.Item>
      <Form.Item label="Sắp Chiếu" >
        <Switch onChange={handleChangeSwitch("sapChieu")} checked={formik.values.sapChieu}/>
      </Form.Item>
      <Form.Item label="Hot">
        <Switch  onChange={handleChangeSwitch("hot")} checked={formik.values.hot}/>
      </Form.Item>
      <Form.Item label="Đánh giá">
        <InputNumber onChange={(value)=>{formik.setFieldValue("danhGia",value)}} min={1} max={10} value={formik.values.danhGia}/>
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif"/>
        <br/>
        <img style={{width: 150,height: 150}} src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt="..."/>
      </Form.Item>
    
      <Form.Item label="">
        <button type="submit" className='bg-blue-300 text-white p-2'>Cập Nhật</button>
      </Form.Item>
    </Form>
    </div>
  )
}
