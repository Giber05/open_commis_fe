import React from "react";
import { Image } from "antd";
import { ArtworkModel } from "../../../../data/models/artwork_model";

type ArtworkProps = {
  artwork: ArtworkModel;
};
function IllustratorsArtworksSection({ artwork }: ArtworkProps) {
  return (
    <div className="inline-block px-3 content-center">
      <div className="comic-shadow-btn bg-white  max-w-56 max-h-52  flex items-center max-w-xs overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out">
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
