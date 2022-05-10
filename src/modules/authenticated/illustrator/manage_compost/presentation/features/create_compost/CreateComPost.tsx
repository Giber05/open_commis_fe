import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Form, Input, InputNumber, Row, Select, Space, Typography, Upload } from "antd";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../../../../../../../core/common_components/buttons/PrimaryButton";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import ImageUploader from "../../../../../../../core/common_components/image_uploader/ImageUploader";
import UploadWithCrop from "./components/FormMultiImage";
import useCreateComPostHandler from "./use_create_compost_handler";

const { Option } = Select;
let index = 0;
function CreateComPost() {
  const { isLoadingTag, isLoading, categories, getCategories, tags, getTags, createTag, createComPost } = useCreateComPostHandler();
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [name, setName] = useState("");

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

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  useEffect(() => {
    getTags();
    window.scroll(0, 0);
  }, [tags.length]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Membuat Commission Post</h2>
      <Form layout="vertical" name="nest-messages" validateMessages={validateMessages} onFinish={createComPost}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          <Col xs={24} sm={12} lg={12}>
            <Form.Item name={["compost", "title"]} label="Judul" rules={[{ required: true, type: "string", max: 80, min: 15 }]}>
              <Input className="form-style-blue" />
            </Form.Item>
            <Form.Item name={["compost", "category"]} label="Kategory" rules={[{ required: true }]}>
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
            <Form.Item name={["compost", "duration"]} label="Duration" rules={[{ type: "number", min: 1, max: 30, required: true }]}>
              <InputNumber addonAfter="Hari" className="form-style-blue pr-2" bordered={false} />
            </Form.Item>
            <Form.Item name={["compost", "price"]} label="Harga" rules={[{ type: "number", min: 10000, max: 9999999999, required: true }]}>
              <InputNumber
                prefix="Rp."
                className="rounded-2xl pr-2 bg-[#e1f4f9]"
                style={{
                  width: "100%",
                  border: "1px solid black",
                  boxShadow: "0.15rem 0.15rem 0 #222",
                }}
              />
            </Form.Item>
            <Form.Item rules={[{ required: true }]} name={["compost", "description"]} label="Description">
              <Input.TextArea autoSize={true} className="form-style-blue" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Typography.Title level={5} className="my-4">
              Contoh gambar
            </Typography.Title>
            <Card className="border-black rounded-2xl bg-white my-2">
              <Form.Item rules={[{ required: true }]} name="upload_image" label="Upload gambar" valuePropName="fileList" getValueFromEvent={normFile}>
                <UploadWithCrop>{defaultFileList.length < 4 && <PlusOutlined />}</UploadWithCrop>
              </Form.Item>
            </Card>
            <Col>
              <Typography.Text italic className="text-blue-400 font-semibold">
                *Jumlah File yang dapat di unggah adalah 5 file
              </Typography.Text>
            </Col>
            <Col>
              <Typography.Text italic className="text-blue-400 font-semibold">
                *Maksimal 2mb Per gambar
              </Typography.Text>
            </Col>
          </Col>
        </Row>
        <Form.Item>
          <div className="mx-auto my-3 flex justify-center">
            <SuccessButton loading={isLoading} block width="w-40" rounded title="Submit" htmlType="submit" />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateComPost;
