import { Card, Col, Row, Tag, Typography, Image, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import SuccessButton from '../../../../../../../core/common_components/buttons/SuccessButton'

function DetailOrder() {
  return (
    <div className='mb-5'>
    <h2 className="text-2xl font-extrabold tracking-tight pt-2 text-gray-900 text-center">Pesanan</h2>
     <Card className="comic-shadow max-w-2xl mx-auto my-4 py-1 px-4 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-8 rounded">
        <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">Pesanan Muhammad ifaldzi</h3>
        <Row>
            <Col xs={24} sm={24} lg={12} className="text-base leading-10">
                <Typography.Text className="text-xl">Commission Post: CHIBI STYLE</Typography.Text>
                <br />
                <span>
                    <Typography.Text className="text-xl ">  Order ID : 1001</Typography.Text>
                </span>
                <br />
                <span>
                    <Typography.Text className="text-xl ">Tenggat Waktu  :</Typography.Text> <Typography.Text className="w- font-bold text-xl">24 December 2022 </Typography.Text>
                </span>
                <br />
            </Col>
        <Col xs={24} sm={24} lg={12} className="text-base leading-10" >
         <Typography.Text className="text-xl">STATUS : </Typography.Text>
         <Typography.Text className="text-xl bg-green-500 text-white p-2"> DIKERJAKAN</Typography.Text>
          <br />
          <span>
            <Typography.Text className="text-xl">Tanggal Pemesanan: </Typography.Text>
            <Typography.Text className="font-bold text-xl">24 December 2022</Typography.Text>
          </span>
          <br />
          <span>
           <Typography.Text className="text-xl"> Total Pembayaran:</Typography.Text> 
           <Typography.Text className="w- font-bold text-xl"> Rp. 100.000 </Typography.Text>
          </span>
          <br />
        </Col>
      </Row>
       <div className="text-2xl pt-5 text-center"> REFERENSI GAMBAR
       <br/>
         <Image
              src="https://cf.shopee.co.id/file/eb2e91c689adca4e6205dedbe5f5d6b7"
              className="max-h-40 object-contain"
              style={{
                minHeight: "160px",
                maxWidth: "250px",
              }}
            />
        </div>
        <h3 className="text-2xl mt-5 text-center">Deskripsi permintaan</h3>
        <p  className="text-xl text-justify">But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give 
            you a complete account of the system, 
            and expound the actual teachings of the great explorer of the truth, </p>
    </Card>
     <div className="mx-auto mt-5 flex justify-center"> 
    <Link to={{ pathname: `/manage/order/1001/sendOrder` }}>
    <SuccessButton 
        block 
        title="Kirim Pekerjaan"
        rounded
        />
    </Link>
    </div>    
    </div>
  )
}

export default DetailOrder