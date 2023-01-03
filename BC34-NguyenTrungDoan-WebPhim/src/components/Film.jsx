import React from 'react'

export default function Film(props) {

  const {phim} = props;

  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div className="p-6">
       <div style={{background: `url(${phim.hinhAnh})`, backgroundPosition:'center', backgroundSize: '100%'}}>
       <img src={phim.hinhAnh} alt={phim.tenPhim} className="opacity-0 w-full" style={{height: '200px'}} />
       </div>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{phim.tenPhim}</h1>
        <p className="leading-relaxed mb-3">{phim.moTa.length >100 ? <span>{phim.moTa.slice(0,100)}...</span>: <span>{phim.moTa}</span>}</p>
       
          <a className="text-indigo-500 inline-flex items-center">Đặt Vé
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
      
       
      </div>
    </div>
  )
}
