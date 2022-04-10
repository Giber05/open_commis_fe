import { Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import InfoButton from "./buttons/InfoButton";

function NotFound() {
  const navigate = useNavigate()
  return (
    <Result
    status="404"
    title="404"
    subTitle="Maaf, Halaman yang Anda kunjungi tidak ada."
    extra={
      <InfoButton
       title="Kembali"
      onClick={
        () => navigate(-1)
      }
      />
    }
  />
  );
}
export default NotFound;
