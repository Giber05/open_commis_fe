import React from "react";
import { ArtworkModel } from "../../../../../../../guest/illustrators_portofolio/data/models/artwork_model";
import { Image } from "antd";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "./hideScrollbar.css";

type ArtworkProps = {
  itemId: string;
  artwork: ArtworkModel;
};
function ArtworkItem({ artwork, itemId }: ArtworkProps) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);
  return (
    <div className="inline-block mx-2 select-none">
      <div className="comic-shadow-btn  max-w-56 max-h-52 bg-white  max-w-xs  rounded-lg ">
        <Image
          src={artwork.image}
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

export default ArtworkItem;
