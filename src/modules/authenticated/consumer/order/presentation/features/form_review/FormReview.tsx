  import { InboxOutlined } from '@ant-design/icons';
import { Form, Input, message, Rate, Typography } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import DangerButton from '../../../../../../../core/common_components/buttons/DangerButton';
import SuccessButton from '../../../../../../../core/common_components/buttons/SuccessButton';
  
  function FormReview() {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
    console.log("Review form Values: ", values);
  };
  return (
     <div>
      <div
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <Typography className="text-center my-3 text-black text-2xl font-bold">Formulir Ulasan</Typography>
        <Form layout="vertical" onFinish={onFinish} name="normal_login" className="max-w-md m-auto font-semibold">
          <Form.Item className="" label="Rating" name="rating">
             <Rate className="text-4xl  sm:text-4xl lg:text-6xl " value={0} />
          </Form.Item>
          <Form.Item className="" label="Komentar"  name="comment">
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
           <div className="mx-auto justify-center flex">
            <div className="mt-3 mb-1 mr-3">
            <DangerButton
            onClick={()=>{navigate(-1)}}
            title="Batal"
            block 
            rounded
            />
            </div>
            <Form.Item className="mt-3 mb-1 text-center ">
              <SuccessButton htmlType="submit" title="Submit" block rounded />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}
  
  export default FormReview