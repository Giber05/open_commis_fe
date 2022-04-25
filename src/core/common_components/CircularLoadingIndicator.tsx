import { Image } from "antd";
import React from "react";
import AssetConstants from "../constants/asset_constants";

function CircularLoadingIndicator() {
  return <div className="flex justify-center align-middle items-center min-h-screen h-full">
    <div>
    <Image preview={false} src={`${AssetConstants.iconURL}/loader/rolling.svg`}/>
    <Image preview={false} src={`${AssetConstants.iconURL}/loader/text_loading.svg`}/>

    </div>
  </div>;
}
export default CircularLoadingIndicator;
