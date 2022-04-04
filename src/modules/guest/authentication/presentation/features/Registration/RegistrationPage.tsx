// import PrimaryButton from '@root/core/common_components/buttons/PrimaryButton';
import { Button } from "antd";
import React from "react";
import PrimaryButton from "../../../../../../core/common_components/buttons/PrimaryButton";

function RegistrationPage() {
  return (
    <div className="ant-col ">
      <h1 className="mx-5 my-5 text-5xl font-extrabold">HelloWOTRFAD</h1>;<p className="text-blue-500 align-middle flex">sadadasdasdsa dasdasfaisij wsaidf fslakjlf ipsusalkdja saflkalsij</p>
      <Button type="primary" className="ant-btn-primary">
        Submit
      </Button>
      <PrimaryButton title="Test Button" />
    </div>
  );
}

export default RegistrationPage;
