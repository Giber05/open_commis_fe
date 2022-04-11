import { CloseCircleFilled, CloseCircleOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { Badge, Button, Form, Image, Input, message, Upload } from "antd";
import React from "react";
import SuccessButton from "../../../../../../../../core/common_components/buttons/SuccessButton";

const imageUrl = [
  {
    title: "Commission 1",
    price: 50000,
    rate: 3,
    src: "https://obs.line-scdn.net/0hl0gZ0aa8Mx9aIySVR3xMSGJ1P25pRSkWeEMofyx3bC0iD30bZ0VgfHZwPjN-FnQbekApfSwgaHtwFCdAbg/w644",
  },
  {
    title: "Commission 2",
    price: 60000,
    rate: 5,
    src: "https://thumb.zigi.id/frontend/thumbnail/2021/06/04/zigi-60b9e121dab72-go-yoon-jung_910_512.jpeg",
  },
  {
    title: "Commission 3",
    price: 40000,
    rate: 4,
    src: "https://pbs.twimg.com/media/FIBlp9FX0AINnsO.jpg:large",
  },
  {
    title: "Commission 4",
    price: 50000,
    rate: 2,
    src: "https://kpopping.com/documents/6c/3/211226-IVE-Leeseo-documents-2.jpeg",
  },
  {
    title: "Commission 5",
    price: 50000,
    rate: 2,
    src: "https://i.pinimg.com/originals/9a/84/80/9a8480513fca9ed7952ea4ee5724bca9.jpg",
  },
];
const onFinish = (e: any) => {
  console.log("Values Form:", e);
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const beforeUpload = (file: any) => {
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isLt2M;
};
function EditArtworks() {
  return (
    <div className="flex flex-col m-auto p-auto max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Karya Seni Ilustrator</h2>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:mx-20 md:mx-10 mx-5 ">
          {imageUrl.map((e) => (
            <div className="inline-block px-3 py-3 content-center">
              <Badge count={<CloseCircleFilled onClick={() => console.log("delete porto")} style={{ color: "red", fontSize:"20px" }} />}>
                <div className="comic-shadow-btn  max-w-56 max-h-52  flex items-center max-w-xs overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out">
                  <Image
                    src={e.src}
                    className="align-middle object-contain"
                    style={{
                      minHeight: "208px",
                      minWidth: "250px",
                    }}
                  ></Image>
                </div>
              </Badge>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-full w-11/12 sm:w-5/6 md:w-3/4 xl:w-1/2 m-auto text-center text-sm shadow-none">
        <Form layout="vertical" name="artwork_form" onFinish={onFinish}>
          <Form.Item name="profile_picture" getValueFromEvent={normFile}>
            <Upload maxCount={1} accept=".png,.jpg,.jpeg" beforeUpload={beforeUpload} listType="picture" showUploadList>
              <Button className="comic-shadow-btn bg-[#1D94C8] text-white rounded-full mt-4 mb-2" icon={<UploadOutlined />}>
                Tambah Karya Seni Sebelumnya
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item name="description" label="Deskripsi Gambar">
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
        </Form>
        <Form.Item>
          <div className="mx-auto my-3 flex justify-center">
            <SuccessButton block width="w-40" rounded title="Submit" htmlType="submit" />
          </div>
        </Form.Item>
      </div>
    </div>
  );
}

export default EditArtworks;
