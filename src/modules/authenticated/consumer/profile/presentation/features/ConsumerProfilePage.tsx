import { UserOutlined } from "@ant-design/icons";
import { Typography, Form, Input, Avatar } from "antd";
import React, { useEffect } from "react";
import CircularLoadingIndicator from "../../../../../../core/common_components/CircularLoadingIndicator";
import AssetConstants from "../../../../../../core/constants/asset_constants";
import RegistrationContainer from "../../../../../guest/authentication/presentation/features/Registration/components/RegistrationContainer";
import useConsumerProfileHandler from "./use_consumer_profile_handler";

function ConsumerProfilePage() {
  const { consumer, getConsumerProfile, isProfileLoading } = useConsumerProfileHandler();
  
  useEffect(() => {
    getConsumerProfile();
    window.scroll(0, 0);
  }, [consumer?.id]);

  if (isProfileLoading) return <CircularLoadingIndicator />;
  let profilePicture = consumer?.profilePicture ?? AssetConstants.imageURL + "placeholder/profile_placeholder.png";

  const initialValues = {
    name: consumer?.name,
    email: consumer?.email,
    username: consumer?.username,
  };
  return (
    <div className="bg-[url('/public/assets/images/background/registration-background.svg')] bg-cover bg-center w-auto h-auto relative flex flex-col justify-between ">
      <div
        style={{
          padding: "35px 35px 20px",
        }}
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <Typography.Title className="text-center my-3 text-black text-lg font-bold">Profil Anda</Typography.Title>

        <Form initialValues={initialValues} layout="vertical" className="max-w-md m-auto font-semibold">
          <Typography className="text-center mb-5">Foto Profil </Typography>
          <div className="m-auto justify-center flex">
            <Avatar className="mb-3" size={128} src={profilePicture} />
          </div>
          <Form.Item label="Nama" name="name">
            <Input disabled value={consumer?.name} className="form-style-blue" style={{ backgroundColor: "#E1F4F9", border: "1px solid black", boxShadow: "0.15rem 0.15rem 0 #222", color: "black" }} />
          </Form.Item>
          <Form.Item label="Username" name="username">
            <Input disabled value={consumer?.username} className="form-style-blue" style={{ backgroundColor: "#E1F4F9", border: "1px solid black", boxShadow: "0.15rem 0.15rem 0 #222", color: "black" }} />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input disabled value={consumer?.email} className="form-style-blue" style={{ backgroundColor: "#E1F4F9", border: "1px solid black", boxShadow: "0.15rem 0.15rem 0 #222", color: "black" }} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ConsumerProfilePage;
