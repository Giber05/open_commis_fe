import { UserOutlined } from '@ant-design/icons';
import { Typography, Form, Input, Avatar } from 'antd';
import React from 'react';
import RegistrationContainer from '../../../../../guest/authentication/presentation/features/Registration/components/RegistrationContainer';

function ProfileCustomerPage() {
  return (
    <RegistrationContainer>
      <div
        style={{
          padding: "35px 35px 20px",
        }}
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <Typography.Title className="text-center my-3 text-black text-lg font-bold">Profil Anda</Typography.Title>

        <Form layout="vertical"  className="max-w-md m-auto font-semibold">
           <Typography className="text-center mb-5" >Foto Profil </Typography>
          <div className="m-auto justify-center flex">
                <Avatar className="mb-3" size={128} icon={<UserOutlined />} />
          </div>
          <Form.Item  initialValue={"test_consumer"} className="" label="Nama"  name="name">
            <Input disabled className="form-style-blue"
            style={{backgroundColor:"#E1F4F9", border: "1px solid black",
                boxShadow: "0.15rem 0.15rem 0 #222", color:"black"}}/>
        </Form.Item>
          <Form.Item initialValue={"test_consumer123"} className="" label="Username" name="username">
            <Input disabled className="form-style-blue"
            style={{backgroundColor:"#E1F4F9", border: "1px solid black",
                boxShadow: "0.15rem 0.15rem 0 #222", color:"black"}} />
          </Form.Item>
          <Form.Item initialValue={"test_consumer@email.com"} label="Email"  name="email">
            <Input disabled className="form-style-blue"
            style={{backgroundColor:"#E1F4F9", border: "1px solid black",
                boxShadow: "0.15rem 0.15rem 0 #222", color:"black"}} />
          </Form.Item>
        </Form>
      </div>
    </RegistrationContainer>
  );
}

export default ProfileCustomerPage

function useRegistrationHandler(): { isLoadingUser: any; onFormSubmitted: any; } {
    throw new Error('Function not implemented.');
}
