import { Image } from "antd";
import React from "react";
import AssetConstants from "../constants/asset_constants";

function CircularLoadingIndicator() {
  return <div className="flex justify-center align-middle">
    <Image src={`${AssetConstants.iconURL}/loader/loading.svg`}/>
  </div>;
}
export default CircularLoadingIndicator;
