import { InboxOutlined, QuestionCircleOutlined, ToolOutlined, UploadOutlined } from "@ant-design/icons";
import { Form, Typography, Input, Upload, Button, InputNumber, Select } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useEffect, useState } from "react";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import useBeVerifiedIllustratorHandler from "./use_be_verified_illustrator_handler";

const { Option } = Select;
function BeVerifiedIllustrator() {
  const [idCardImage, setIdCardImage] = useState([]);
  const [selfieCardImage, setSelfieCardImage] = useState([]);
  const {
    cities,
    getCities,
    getProvinces,
    isGetCitiesLoading,
    isGetProvincesLoading,
    onSelectedProvince,
    provinces,
    selectedProvince,
    isUploadFileLoading,
    uploadIdCardImage,
    uploadedIdCardFilePath,
    uploadedSelfieCardFilePath,
    uploadSelfieCardImage,
    sendVerificationAccountReq,
    isSendVerificationLoading,
  } = useBeVerifiedIllustratorHandler();
  const handleOnChangeIdCardImage = ({ file, fileList, event }: any) => {
    setIdCardImage(fileList);
    console.log({ idCardImage });
  };
  const handleOnChangeSelfieCardImage = ({ file, fileList, event }: any) => {
    setSelfieCardImage(fileList);
  };

  const validateMessages = {
    required: "${label} wajib diisi!",
    string: {
      range: "${label} harus berisi minimal ${min} karakter, maksimal ${max} karakter",
    },
    types: {
      number: "${label} bukan inputan yang valid!",
    },
    number: {
      range: "${label} harus ${min} digit ${max}",
    },
  };

  useEffect(() => {
    getProvinces();
  }, []);
  useEffect(() => {
    getCities();
  }, [selectedProvince]);

  const uploadedFilePath = { path: "" };
  return (
    <div className="p-4">
      <Form validateMessages={validateMessages} layout="vertical" onFinish={sendVerificationAccountReq} name="normal_login" className="max-w-md m-auto font-semibold">
        <Form.Item
          required
          rules={[
            () => ({
              validator(rule, value) {
                if (idCardImage.length > 0 && uploadedIdCardFilePath != null) {
                  return Promise.resolve();
                }
                return Promise.reject("File wajib diisi");
              },
            }),
          ]}
          className=""
          label="Foto KTP"
          name="idCardPhoto"
        >
          <Upload className="" maxCount={1} accept=".png,.jpg,.jpeg" defaultFileList={idCardImage} customRequest={uploadIdCardImage} listType="picture" onChange={handleOnChangeIdCardImage}>
            <Button className="comic-shadow-btn bg-[#1D94C8] text-white rounded-full  mb-2" icon={<UploadOutlined />}>
              Upload Foto KTP
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item
          required
          rules={[
            () => ({
              validator(rule, value) {
                if (selfieCardImage.length > 0 && uploadedSelfieCardFilePath != null) {
                  return Promise.resolve();
                }
                return Promise.reject("File wajib diisi");
              },
            }),
          ]}
          className=""
          label="Foto Illustrator Memegang KTP"
          name="selfieCardPhoto"
          tooltip="Lampirkan foto Anda sedang memegang KTP"
        >
          <Upload className="" maxCount={1} accept=".png,.jpg,.jpeg,.zip" defaultFileList={selfieCardImage} customRequest={uploadSelfieCardImage} listType="picture" onChange={handleOnChangeSelfieCardImage}>
            <Button className="comic-shadow-btn bg-[#1D94C8] text-white rounded-full  mb-2" icon={<UploadOutlined />}>
              Upload Illustrator Memegang KTP
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item className="mt-5" rules={[{ type: "number", required: true }]} label="Nomor KTP" name="nik">
          <InputNumber placeholder="Nomor KTP sesuai dengan KTP" className="form-style-blue" style={{ width: 250 }} />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} className="" label="Provinsi" name="province">
          <Select
            loading={isGetProvincesLoading}
            onChange={(value: string) => {
              const n = value.split(",");
              onSelectedProvince(parseInt(n[0]));
            }}
            bordered={false}
            className="form-style-blue"
            style={{ width: 250 }}
          >
            {provinces.map((province) => (
              <Option value={`${province.id},${province.name}`}>{province.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item rules={[{ required: true }]} label="Kota/Kab" name="city">
          <Select loading={isGetCitiesLoading} bordered={false} className="form-style-blue w-full">
            {cities.map((city) => (
              <Option value={`${city.id},${city.name}`}>{city.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item rules={[{ required: true }]} label="Alamat Lengkap" name="address">
          <Input.TextArea autoSize={true} placeholder="Alamat sesuai dengan KTP" className="form-style-blue" />
        </Form.Item>
        <Form.Item tooltip={{ icon: <QuestionCircleOutlined />, title: "Tell Us About You!" }} rules={[{ required: true, max: 300, min: 50, type: "string" }]} label="Latar Belakang Menjadi Illustrator" name="background">
          <Input.TextArea autoSize={true} placeholder="Alasan menjadi illustrator / Ceritakan tentangmu" className="form-style-blue" />
        </Form.Item>
        <div className="mx-auto justify-center flex">
          <Form.Item className="mt-3 mb-1 text-center ">
            <SuccessButton loading={isSendVerificationLoading} htmlType="submit" title="Submit" block rounded />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default BeVerifiedIllustrator;
