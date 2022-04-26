import { Image } from "antd";
import React from "react";
import AssetConstants from "../constants/asset_constants";

function CircularLoadingIndicator() {
  return (
    <div
      style={{
        display: "table",
          margin: "0 auto",
          height: "70vh",
      }}
    >
      <div
        style={{
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <Image className="w-16 sm:w-24 md:w-32 lg:w-40" preview={false} src={`${AssetConstants.iconURL}/loader/rolling.svg`} />
        <Image className="w-16 sm:w-24 md:w-32 lg:w-40" preview={false} src={`${AssetConstants.iconURL}/loader/text_loading.svg`} />
      </div>
    </div>
  );
}
export default CircularLoadingIndicator;
