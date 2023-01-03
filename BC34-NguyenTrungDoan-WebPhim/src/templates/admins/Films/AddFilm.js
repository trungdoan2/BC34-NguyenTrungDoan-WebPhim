import React, { useState } from 'react';
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
import {useDispatch} from "react-redux"
import { themPhimUploadHinhAction } from '../../../redux/actions/QuanLyPhimAction';
import { groupID } from '../../../utils/constant';

export default function AddFilm() {
    const [componentSize, setComponentSize] = useState('default');

    const [imgSrc,setImgSrc] = useState("");

    const dispatch = useDispatch()

 const formik = useFormik({
  initialValues: {
    tenPhim: "",
    trailer: "",
    moTa: "",
    ngayKhoiChieu: "",
    dangChieu: false,
    sapChieu: false,
    hot: false,
    danhGia: "",
    hinhAnh: {}

  },
  onSubmit: (values) => {
    console.log("values",values);
    values.maNhom = groupID;

    let formData = new FormData();
   
    for(let key in values) {
    
      if (key !== "hinhAnh") {
        formData.append(key,values[key]);
      }else{
        formData.append("File",values.hinhAnh,values.hinhAnh.name);
      }
    }
    
    dispatch(themPhimUploadHinhAction(formData));
  }
 })

 const handleChangeDatePicker = (value) => {
   console.log("datepickerchange");
   let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
   formik.setFieldValue("ngayKhoiChieu",ngayKhoiChieu)

 }
 
 const handleChangeSwitch = (name) =>{
     return (value) => {formik.setFieldValue(name, value)}
 }

 const handleChangeFile = (e) =>{
  let file = e.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = (e) => {
  console.log(e.target.result);
  setImgSrc(e.target.result);
  }
  
   formik.setFieldValue("hinhAnh", file)
  console.log("file",file);
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
        <h3 className='text-2xl'>Thêm Mới Phim</h3>
      <Form.Item label="Tên Phim">
        <Input name="tenPhim" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name="trailer" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name="moTa" onChange={formik.handleChange}/>
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker format={"DD/MM/YYYY"}  onChange={handleChangeDatePicker}/>
      </Form.Item>
      <Form.Item label="Đang Chiếu" >
        <Switch  onChange={handleChangeSwitch("dangChieu")}/>
      </Form.Item>
      <Form.Item label="Sắp Chiếu" >
        <Switch onChange={handleChangeSwitch("sapChieu")}/>
      </Form.Item>
      <Form.Item label="Hot">
        <Switch  onChange={handleChangeSwitch("hot")}/>
      </Form.Item>
      <Form.Item label="Đánh giá">
        <InputNumber onChange={(value)=>{formik.setFieldValue("danhGia",value)}} min={1} max={10}/>
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif"/>
        <br/>
        <img style={{width: 150,height: 150}} src={imgSrc} alt="..."/>
      </Form.Item>
    
      <Form.Item label="">
        <button type="submit" className='bg-blue-300 text-white p-2'>Thêm Phim</button>
      </Form.Item>
    </Form>
    </div>
  )
}
