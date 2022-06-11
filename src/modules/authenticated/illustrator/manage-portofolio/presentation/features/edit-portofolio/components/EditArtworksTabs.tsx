import { CloseCircleFilled, CloseCircleOutlined, DeleteOutlined, ExclamationCircleOutlined, UploadOutlined } from "@ant-design/icons";
import { Badge, Button, Form, Image, Input, message, Modal, Upload } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import DisabledButton from "../../../../../../../../core/common_components/buttons/DisabledButton";
import SuccessButton from "../../../../../../../../core/common_components/buttons/SuccessButton";
import ImageWithCrop from "../../../../../../../../core/common_components/image_uploader/ImageWithCrop";
import UploadWithCrop from "../../../../../manage_compost/presentation/features/create_compost/components/FormMultiImage";
import usePortofolioHandler from "../../portofolio/use_portofolio_handler";
import useEditPortofolioHandler from "./use_edit_portofolio_handler";

const { confirm } = Modal;
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

function EditArtworks() {
  const { illustratorProfile } = usePortofolioHandler();
  const { addArtwork, deleteArtwork, isUploadable, uploadFile } = useEditPortofolioHandler();
  const [defaultFileList, setDefaultFileList] = useState([]);
  const handleOnChange = ({ file, fileList, event }: any) => {
    setDefaultFileList(fileList);
  };

  const onFinish = useCallback(
    (e) => {
      addArtwork(e);
    },
    [illustratorProfile?.artworks?.length]
  );
  const showDeleteConfirmation = (artworkId: number) => {
    confirm({
      title: "Apakah Anda yakin akan menghapus karya ini?",
      icon: <ExclamationCircleOutlined />,
      content: "Ketika klik tombol OK, maka karya tersebut akan terhapus",
      onOk() {
        deleteArtwork(artworkId);
      },
      onCancel() {},
    });
  };

  return (
    <div className="flex flex-col m-auto p-auto max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Karya Seni Ilustrator</h2>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:mx-20 md:mx-10 mx-5 ">
          {illustratorProfile?.artworks?.map((artwork, index) => (
            <div className="inline-block px-3 py-3 content-center">
              <Badge
                count={
                  <CloseCircleFilled
                    onClick={() => {
                      showDeleteConfirmation(artwork.id);
                    }}
                    style={{ color: "red", fontSize: "20px" }}
                  />
                }
              >
                <div className="comic-shadow-btn  max-w-56 max-h-52  flex items-center max-w-xs overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out">
                  <Image
                    src={artwork.image}
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
        <Form layout="vertical" name="artwork_form" onFinish={addArtwork}>
          <Form.Item rules={[{ required: true, message:"Karya Seni Wajib Diisi!" }]} name="artwork_picture" getValueFromEvent={normFile}>
            <ImageWithCrop maxCount={1} accept=".png,.jpg,.jpeg,.pdf" defaultFileList={defaultFileList} customRequest={uploadFile} listType="picture" onChange={handleOnChange}>
              <Button className="comic-shadow-btn bg-[#1D94C8] text-white rounded-full mt-4 mb-2" icon={<UploadOutlined />}>
                Tambah Karya Seni Sebelumnya
              </Button>
            </ImageWithCrop>
          </Form.Item>
          <Form.Item name="description" label="Deskripsi Gambar" rules={[{ max: 255, message: "Maksimal berjumlah 255 karakter" }]}>
            <Input.TextArea autoSize={true} className="form-style-blue" />
          </Form.Item>
          <Form.Item>
            <div className="mx-auto my-3 flex justify-center">{isUploadable ? <SuccessButton block width="w-40" rounded title="Submit" htmlType="submit" /> : <DisabledButton title="Submit" rounded />}</div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default EditArtworks;
