import { PlusOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Form, Input, InputNumber, Row, Select, Space, Typography } from "antd";
import { useForm } from "antd/lib/form/Form";
import { RcFile } from "antd/lib/upload";
import React, { useEffect, useRef, useState } from "react";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import ComPostModel from "../../../data/models/illustrators_composts";
import UploadWithCrop from "../create_compost/components/FormMultiImage";

let index = 0;
const { Option } = Select;
type EditProps = {
  compost:any,
  upload_image:any,
}
function EditComPost() {
  const [initialValues, setInitialValues] = useState<EditProps>({
    compost:{
      id:"compost-1",
      category:"anime",
      imageSrc:"sad",
      description:"Pembuatan commission Baru\nAnime style\npengerjaan cepat",
      duration: 3,
      price: 50000,
      tags:["Chibi","naruto"],
      name:"Commission Post 1",
    },
    upload_image:[{
      uid: '-1',
      name: 'image.png',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },]
  });

  
  const [items, setItems] = useState(["Naruto", "Chibi"]);
  const [name, setName] = useState("");

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const addItem = (e: any) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
  };
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
  return (
    <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Mengedit Commission Post</h2>
      <Form layout="vertical" name="nest-messages" validateMessages={validateMessages} onFinish={onFinish} initialValues={initialValues}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          <Col xs={24} sm={12} lg={12}>
            <Form.Item name={["compost", "name"]} label="Judul" rules={[{ required: true }]}>
              <Input className="form-style-blue" />
            </Form.Item>
            <Form.Item name={["compost", "category"]} label="Kategory" rules={[{ required: true }]}>
              <Select className="form-style-blue" bordered={false}>
                <Option value="vector">Vektor</Option>
                <Option value="anime">Anime</Option>
                <Option value="realis">Realis</Option>
              </Select>
            </Form.Item>
            <Form.Item name={["compost", "tags"]} label="Tags">
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
                      <Typography.Link onClick={addItem} style={{ whiteSpace: "nowrap" }}>
                        <PlusOutlined /> Add item
                      </Typography.Link>
                    </Space>
                  </>
                )}
              >
                {items.map((item) => (
                  <Option key={item}>{item}</Option>
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
            <Form.Item name={["compost", "description"]} label="Description">
              <Input.TextArea autoSize={true} className="form-style-blue" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Typography.Title level={5} className="my-4">
              Contoh gambar
            </Typography.Title>
            <Card className="border-black rounded-2xl bg-white my-2">
              <Form.Item rules={[{ required: true }]} name="upload_image" label="Upload gambar" valuePropName="fileList" getValueFromEvent={normFile}>
                <UploadWithCrop children={<PlusOutlined />} />
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
            <SuccessButton block width="w-40" rounded title="Submit" htmlType="submit" />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditComPost;
