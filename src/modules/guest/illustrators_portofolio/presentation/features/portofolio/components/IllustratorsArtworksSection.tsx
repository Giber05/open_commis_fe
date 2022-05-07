import React from "react";
import { Image } from "antd";
import { ArtworkModel } from "../../../../data/models/artwork_model";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "./hideScrollbar.css";

type ArtworkProps = {
  itemId:string;
  artwork: ArtworkModel;
};
function IllustratorsArtworksSection({ artwork ,itemId}: ArtworkProps) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);
  return (
    <div className="inline-block mx-2 select-none">
      <div className="comic-shadow-btn bg-white  max-w-56 max-h-52 rounded-lg ">
        <Image
          src={artwork?.image == undefined?"https://thumb.zigi.id/frontend/thumbnail/2021/06/04/zigi-60b9e121dab72-go-yoon-jung_910_512.jpeg":artwork.image}
          className="align-middle max-h-40 w-56 object-contain"
          style={{
            minHeight: "208px",
            maxWidth: "300px",
          }}
        />
      </div>
    </div>
  );
}

export default IllustratorsArtworksSection;
