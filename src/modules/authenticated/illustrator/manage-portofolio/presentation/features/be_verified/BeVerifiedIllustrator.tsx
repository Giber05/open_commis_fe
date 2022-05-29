import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Form, Typography, Input, Upload, Button, InputNumber, Select } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useEffect, useState } from "react";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import useBeVerifiedIllustratorHandler from "./use_be_verified_illustrator_handler";

const { Option } = Select;
function BeVerifiedIllustrator() {
  const [defaultFileList, setDefaultFileList] = useState([]);
  const { cities, getCities, getProvinces, isGetCitiesLoading, isGetProvincesLoading, onSelectedProvince, provinces, selectedProvince } = useBeVerifiedIllustratorHandler();
  const handleOnChange = ({ file, fileList, event }: any) => {
    setDefaultFileList(fileList);
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
      <Form validateMessages={validateMessages} layout="vertical" onFinish={(values) => console.log(values)} name="normal_login" className="max-w-md m-auto font-semibold">
        <Form.Item
          required
          rules={[
            () => ({
              validator(rule, value) {
                if (defaultFileList.length > 0 && uploadedFilePath != null) {
                  return Promise.resolve();
                }
                return Promise.reject("File wajib diisi");
              },
            }),
          ]}
          className=""
          label="Foto KTP"
          name="file"
        >
          <Upload className="mt-3" maxCount={1} accept=".png,.jpg,.jpeg,.zip" defaultFileList={defaultFileList} customRequest={(e) => console.log(e)} listType="picture" onChange={handleOnChange}>
            <Button className="comic-shadow-btn bg-[#1D94C8] text-white rounded-full mt-4 mb-2" icon={<UploadOutlined />}>
              Upload Foto KTP
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item rules={[{ type: "number", required: true }]} label="Nomor KTP" name="ktp_number">
          <InputNumber className="form-style-blue" style={{ width: 250 }} />
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
        <Form.Item rules={[{ required: true }]} label="Alamat Lengkap" name="full_address">
          <Input.TextArea autoSize={true} placeholder="Alamat sesuai dengan KTP" className="form-style-blue" />
        </Form.Item>
        <Form.Item rules={[{ required: true, max: 300, min: 50, type: "string" }]} label="Latar Belakang Menjadi Illustrator" name="background">
          <Input.TextArea autoSize={true} placeholder="Alasan menjadi illustrator / Ceritakan tentangmu" className="form-style-blue" />
        </Form.Item>
        <div className="mx-auto justify-center flex">
          <Form.Item name="submissionFile" hidden className="mt-3 mb-1 text-center ">
            <Input className="form-style-blue" value={uploadedFilePath?.path} />
          </Form.Item>
          <Form.Item className="mt-3 mb-1 text-center ">
            <SuccessButton loading={false} htmlType="submit" title="Submit" block rounded />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default BeVerifiedIllustrator;
