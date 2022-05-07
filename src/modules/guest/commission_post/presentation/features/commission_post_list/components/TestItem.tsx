import { Button, Card, Image } from "antd";
import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
type TestItemProps = { itemId: string;   title: string };
export function TestItem({ itemId,title }: TestItemProps) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      style={{
        display: "inline-block",
        margin: "0 7px",
        userSelect: "none",
      }}
    >
      <div>
        <Card
          className="shadow-blue-500 font-semibold w-64"
          style={{
            backgroundColor:  "white",
            borderColor: "skyblue",
          }}
        >
          <Image src={title} />
        </Card>
      </div>
    </div>
  );
}
