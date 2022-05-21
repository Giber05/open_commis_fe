import { PlusOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Form, Input, InputNumber, Row, Select, Space, Typography } from "antd";
import { useForm } from "antd/lib/form/Form";
import { RcFile } from "antd/lib/upload";
import React, { useEffect, useRef, useState } from "react";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import ComPostModel from "../../../data/models/illustrators_composts";
import TestCropImage from "../create_compost/components/ComPostImageUploader";
import UploadWithCrop from "../create_compost/components/FormMultiImage";
import useEditComPostHandler from "./use_edit_compost_handler";

let index = 0;
const { Option } = Select;
type EditProps = {
  compost: any;
  upload_image: any;
};
function EditComPost() {
  const { isLoadingTag, isLoading, categories, getCategories, tags, getTags, createTag, editComPost, commissionPostDetail } = useEditComPostHandler();
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [name, setName] = useState("");

  const initialValues = {
    compost: {
      id: commissionPostDetail?.id,
      description: commissionPostDetail?.description,
      duration: commissionPostDetail?.durationTime,
      price: commissionPostDetail?.price,
      name: commissionPostDetail?.title,
    },
  };

  const validateMessages = {
    required: "${label} wajib diisi!",
    string: {
      range: "${label} harus berisi minimal ${min} karakter, maksimal ${max} karakter",
    },
    types: {
      email: "${label} bukan inputan yang valid!",
      number: "${label} bukan inputan yang valid!",
    },
    number: {
      range: "${label} harus >= ${min} atau <= ${max}",
    },
  };

  const handleOnChange = ({ file, fileList, event }: any) => {
    setDefaultFileList(fileList);
  };

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const addItem = (e: any) => {
    e.preventDefault();
    if (name.length > 0) {
      createTag(name);
    }
    setName("");
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  useEffect(() => {
    getTags();
  }, [tags.length]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Mengedit Commission Post</h2>
      <Form layout="vertical" name="nest-messages" validateMessages={validateMessages} onFinish={editComPost} initialValues={initialValues}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          <Col xs={24} sm={12} lg={12}>
            <Form.Item name={["compost", "name"]} label="Judul" rules={[{ required: true, type: "string", max: 50, min: 15 }]}>
              <Input className="form-style-blue" />
            </Form.Item>
            <Form.Item name={["compost", "category"]} label="Kategori" rules={[{ required: true }]}>
              <Select className="form-style-blue" bordered={false}>
                {categories.map((category) => (
                  <Option key={category.id}>{category.categoryName}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item rules={[{ required: true }]} name={["compost", "tags"]} label="Tags">
              <Select
                className="form-style-blue"
                mode="tags"
                bordered={false}
                style={{ width: 300 }}
                menuItemSelectedIcon
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <Divider style={{ margin: "8px 0" }} />
                    <Space align="center" style={{ padding: "0 8px 4px" }}>
                      <Input placeholder="Please enter item" value={name} onChange={onNameChange} />
                      <Typography.Link disabled={isLoadingTag} onClick={addItem} style={{ whiteSpace: "nowrap" }}>
                        <PlusOutlined /> Add item
                      </Typography.Link>
                    </Space>
                  </>
                )}
              >
                {tags.map((tag) => (
                  <Option key={tag.id}>{tag.tagName}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name={["compost", "duration"]} label="Estimasi Lama Pengerjaan" rules={[{ type: "number", min: 1, max: 30, required: true }]}>
              <InputNumber addonAfter="Hari" className="form-style-blue pr-2" bordered={false} />
            </Form.Item>
            <Form.Item name={["compost", "price"]} label="Harga" rules={[{ type: "number", min: 10000, max: 9999999999, required: true }]}>
              <InputNumber
                formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                prefix="Rp."
                className="rounded-2xl pr-2 bg-[#e1f4f9]"
                style={{
                  width: "100%",
                  border: "1px solid black",
                  boxShadow: "0.15rem 0.15rem 0 #222",
                }}
              />
            </Form.Item>
            <Form.Item rules={[{ required: true }]} name={["compost", "description"]} label="Deskripsi">
              <Input.TextArea autoSize={true} className="form-style-blue" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Typography.Title level={5} className="my-4">
              Contoh gambar
            </Typography.Title>
            <Card className="border-black rounded-2xl bg-white my-2">
              <Form.Item rules={[{ required: true }]} name="upload_image" label="Upload gambar" valuePropName="fileList" getValueFromEvent={normFile}>
                <UploadWithCrop onChange={handleOnChange}>{defaultFileList.length < 4 && <PlusOutlined />}</UploadWithCrop>
              </Form.Item>
            </Card>
            <Col>
              <Typography.Text italic className="text-blue-400 font-semibold">
                *Jumlah File yang dapat di unggah adalah 4 file
              </Typography.Text>
            </Col>
            <Col>
              <Typography.Text italic className="text-blue-400 font-semibold">
                *Maksimal 5mb Per gambar
              </Typography.Text>
            </Col>
          </Col>
        </Row>
        <Form.Item>
          <div className="mx-auto my-3 flex justify-center">
            <SuccessButton loading={isLoading} block width="w-40" rounded title="Simpan" htmlType="submit" />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditComPost;
