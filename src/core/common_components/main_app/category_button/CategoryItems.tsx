import { Button } from "antd";
import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "./hideScrollbar.css";

export function CategoryItem({ itemId, selected, onClick, title }: { itemId: string; selected: boolean; onClick: Function; title: string }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      onClick={() => onClick()}
      style={{
        display: "inline-block",
        margin: "0 7px",
        userSelect: "none",
      }}
    >
      <div>
        <Button
          className="shadow-blue-500 font-semibold"
          style={{
            backgroundColor: selected ? "#dbeafe" : "white",
            borderRadius:"50%",
            borderColor:"skyblue",
            color: selected?"#3b82f6" :"black"
          }}
        >
          {title}
        </Button>
      </div>
    </div>
  );
}
