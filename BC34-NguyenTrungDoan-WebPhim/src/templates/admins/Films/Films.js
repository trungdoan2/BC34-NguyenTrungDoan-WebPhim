import React, { Fragment, useEffect } from 'react';
import { Table } from 'antd';
import { Input, Button} from 'antd';
import { AudioOutlined, CalendarOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction, layThongTinPhimAction, xoaPhimAction} from "../../../redux/actions/QuanLyPhimAction"
import { NavLink } from 'react-router-dom';
import { history } from '../../../utils/history';
const { Search } = Input;



export default function Films(props) {
 
  const onSearch = (value) => {

    dispatch(layDanhSachPhimAction(value))
  }
  

  const {arrPhimDefault}  = useSelector(state=>state.QuanLyPhimReducer);

 
  const dispatch = useDispatch();

  console.log(arrPhimDefault);
  useEffect(() => {
     dispatch(layDanhSachPhimAction())
  },[])

  const columns = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      value: (text,object) => {return <span>{text}</span>},
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend",'aescend'],
      width: "15%"
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, film,index) => {
        return <Fragment>
           <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e)=>{
            e.target.onError = null; e.target.src=`https://picsum.photos/id/${index}/50/50`
           }}/>
        </Fragment>
      },
      width:"15%",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      sorter: (a,b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim()
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      width: "25%"
   
   
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      sorter: (a,b) => {
        let moTaA = a.moTa.toLowerCase().trim();
        let moTaB = b.moTa.toLowerCase().trim()
        if (moTaA > moTaB) {
          return 1;
        }
        return -1;
      },
      render: (text,film) =>{
      return <Fragment>
        {film.moTa.length>50 ? film.moTa.substr(0,50) + "...": film.moTa}
      </Fragment>
      },
      width: "25%"
   
   
    },  {
      title: 'Hành Động',
      dataIndex: 'maPhim',
      render: (text,film) =>{
      return <Fragment>
       <NavLink key={1} className=" mr-2 text-4xl" to={`/admin/films/edit/${film.maPhim}`}><EditOutlined style={{color:"blue"}}/></NavLink>
       <span key={2} style={{cursor: "pointer"}} className="text-4xl" onClick={() => {
         
         if(window.confirm("Bạn có chắc muốn xóa phim " + film.tenPhim)) {
            dispatch(xoaPhimAction(film.maPhim));
         }
       }}><DeleteOutlined style={{color:"red"}}/></span>
         <NavLink key={1} className=" mr-2 text-4xl" to={`/admin/films/showtime/${film.maPhim}`}><CalendarOutlined style={{color:"blue"}}/></NavLink>
      </Fragment>
      },
      width: "25%"
   
   
    },
  ];
  const data = arrPhimDefault;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h3 className='text-2xl'>Quản Lý Phim</h3>
      <Button className='mb-5' onClick={()=>{
          history.push("/admin/films/addfilm");
      }}>Thêm Phim</Button>
      <Search
      className='mb-5'
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}

    />
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"}/>
    </div>
  )
}
