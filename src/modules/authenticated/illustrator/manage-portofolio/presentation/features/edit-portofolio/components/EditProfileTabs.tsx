import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Select, Form, Row, Col, Input, Divider, Space, Typography, InputNumber, Card, Avatar, Upload, Button, message } from "antd";
import React, { useState } from "react";
import SuccessButton from "../../../../../../../../core/common_components/buttons/SuccessButton";
import UploadWithCrop from "../../../../../manage_compost/presentation/features/create_compost/components/FormMultiImage";

let index = 0;
const { Option } = Select;

function EditProfileTabs() {
  const [initialValues, setInitialValues] = useState({
    name: "Kim Jisoo",
    whatsapp: "087XXXXXX",
    instagram: "sooyaaa__",
    facebook: "",
    bio: "Pembuatan commission Baru\nAnime style\npengerjaan cepat",
    twitter: "",
    profile_picture: "https://1.bp.blogspot.com/-Ap7aNSKUVs0/X2XIZvC_MJI/AAAAAAAANOE/ohlQo_0pLxAaFGjs2PYUkRf-GHH9o1xaQCLcBGAsYHQ/s1600/05a7d3e123774a0eb6c6f1dbe09480b1%2B%25281%2529.jpg",
    id: "1",
  });

  const validateMessages = {
    required: "${label} wajib diisi!",
    types: {
      category: "${label} wajib dipilih!",
      number: "${label} bukan inputan yang valid!",
    },
    number: {
      range: "${label} harus >= ${min} atau <= ${max}",
    },
  };
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onFinish = (e: any) => {
    console.log("Values Form:", e);
  };
  const beforeUpload = (file: any) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      return;
    }
    return false;
  };
  return (
    <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Edit Profile</h2>
      <Form layout="vertical" name="profile_form" validateMessages={validateMessages} onFinish={onFinish} initialValues={initialValues}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          <Col xs={24} sm={12} lg={12}>
            <Form.Item name="name" label="Nama Ilustrator" rules={[{ required: true }]}>
              <Input className="form-style-blue" />
            </Form.Item>
            <Form.Item name="whatsapp" label="WhatsApp" rules={[{ type: "number", min: 11, max: 13, required: true }]}>
              <Input className="form-style-blue" />
            </Form.Item>
            <Form.Item name="facebook" label="Facebook">
              <Input className="form-style-blue" />
            </Form.Item>
            <Form.Item name="instagram" label="Instagram">
              <Input className="form-style-blue" />
            </Form.Item>
            <Form.Item name="bio" label="Bio">
              <Input.TextArea autoSize={true} className="form-style-blue" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <div className="mx-auto text-center">
              <Typography.Title level={5} className="my-4 text-center">
                Foto Profil
              </Typography.Title>
              <Avatar
                size={{ xs: 72, sm: 84, md: 92, lg: 100, xl: 120, xxl: 132 }}
                src={initialValues.profile_picture}
              />
              <Form.Item name="profile_picture" getValueFromEvent={normFile}>
                <Upload maxCount={1} accept=".png,.jpg,.jpeg" beforeUpload={beforeUpload}>
                  <Button 
                    className="comic-shadow-btn bg-[#1D94C8] text-white rounded-full mt-4 mb-2" 
                    icon={<UploadOutlined />}>
                      Ubah Foto Profile
                  </Button>
                </Upload>
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Form.Item>
          <div className="mx-auto my-3 flex justify-center">
            <SuccessButton block width="w-40" rounded title="Submit" htmlType="submit" />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditProfileTabs;
