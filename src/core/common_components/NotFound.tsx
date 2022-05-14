import { Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import InfoButton from "./buttons/InfoButton";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center align-middle items-center min-h-screen h-full">
      <Result
        status="404"
        title="404"
        subTitle="Maaf, Halaman yang Anda kunjungi tidak ada."
        extra={
          <div className="mx-auto text-center flex justify-center">
            <InfoButton title="Kembali" onClick={() => navigate(-1)} />
          </div>
        }
      />
    </div>
  );
}
export default NotFound;
