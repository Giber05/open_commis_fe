import React from 'react';
import { ArtworkModel } from '../../../../../../../guest/illustrators_portofolio/data/models/artwork_model';
import { Image } from "antd";
type ArtworkProps = {
  artwork: ArtworkModel
}
function ArtworkItem({artwork}:ArtworkProps) {
  return <div className="inline-block px-3 content-center">
  <div className="comic-shadow-btn max-h-52  flex items-center max-w-xs overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out">
    <Image
      src={artwork.image}
      className="align-middle object-contain"
      style={{
        minHeight: "208px",
        maxWidth: "300px",
        minWidth: "300px",
      }}
    />
  </div>
</div>;
}

export default ArtworkItem;
