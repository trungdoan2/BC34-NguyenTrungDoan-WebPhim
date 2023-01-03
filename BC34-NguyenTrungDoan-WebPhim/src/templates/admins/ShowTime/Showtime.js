import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Cascader } from "antd";
import { DatePicker} from 'antd';
import { quanLyRapService } from "../../../Services/QuanLyRap";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import moment from "moment";
import { quanLyDatVeService, QuanLyDatVeService } from "../../../Services/QuanLyDatVeService";

export default function Showtime() {

  const {id} = useParams()

  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: "",
      maRap : "",
      giaVe: ""
    },
    onSubmit: async (values) => {
      console.log("values",values);
      try {
        const result = await quanLyDatVeService.taoLichChieu(values);
        alert(result.data.content)
      } catch (error) {
        console.log("error",error);
      }
    }
  })

  const [state,setState] = useState({
    heThongRapChieu : [],
    cumRapChieu: []
  })

  console.log(state.heThongRapChieu);
  
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

      useEffect(async () =>{
          try {
            let result = await quanLyRapService.layThongTinHeThongRap();

            setState({
              ...state,
              heThongRapChieu: result.data.content
            })
          } catch (error) {
            console.log("error",error);
          }
      },[])

  const handleChangeHeThongRap = async (value, option) => {

      console.log("maHeThongRap",value);
      console.log("maHeThongRap", option);
    try {
     let result = await quanLyRapService.layThongTinCumRap(value)

      setState({
        ...state,
        cumRapChieu: result.data.content
      })
    } catch (error) {
      console.log("error",error);
    }

    formik.setFieldValue("maRap",value)
  };


  const onOk = (values) => {
    formik.setFieldValue("ngayChieuGioChieu",moment(values).format("DD/MM/YYYY hh:mm:ss"))
    console.log('onOk: ',moment(values).format("DD/MM/YY hh:mm:ss"));
  };

  const onChange = (values) => {
    formik.setFieldValue("ngayChieuGioChieu",moment(values).format("DD/MM/YYYY hh:mm:ss"))
    console.log('onChangeDate: ',moment(values).format("DD/MM/YY hh:mm:ss"));
  };

  const onChangeInputNumber = (value) => {
    formik.setFieldValue('giaVe', value)
  }
  return (
    <div className="p-5">
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onSubmitCapture={formik.handleSubmit}
      >
        <h3 className="text-2xl">Tạo Lịch Chiếu</h3>
        <Form.Item label="Hệ thống rạp">
          <Select
            options={state.heThongRapChieu?.map((htr,index) => ({label: htr.tenHeThongRap,value: htr.maHeThongRap}))}
            onChange={handleChangeHeThongRap}
            placeholder="Chọn hệ thống rạp"
          />
        </Form.Item>
        <Form.Item label="Cụm Rạp">
          <Select
            options={state.cumRapChieu?.map((cumRap,index) => ({label: cumRap.tenCumRap,value: cumRap.maCumRap}) )}
            onChange={handleChangeHeThongRap}
            placeholder="Chọn cụm rạp"
          />
        </Form.Item>
        <Form.Item label="Ngày chiếu giờ chiếu">
        <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={onChange} onOk={onOk} />
        </Form.Item>

        <Form.Item label="Giá vé">
          <InputNumber min={75000} max={150000} onChange={onChangeInputNumber}/>
        </Form.Item>
        <Form.Item label="Chức năng">
          <Button htmlType="submit">Tạo lịch chiếu</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
