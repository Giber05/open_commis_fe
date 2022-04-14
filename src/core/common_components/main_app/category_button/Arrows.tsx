import { LeftCircleFilled, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({ children, disabled, onClick }: { children: React.ReactNode; disabled: boolean; onClick: VoidFunction }) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        right: "",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
      className="drop-shadow-md"
      icon={children}
      shape="circle"
      size="large"
    />
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators, initComplete } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(!initComplete || (initComplete && isFirstItemVisible));
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <LeftCircleOutlined />
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(!visibleItemsWithoutSeparators.length && isLastItemVisible);
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <RightCircleOutlined height={100} />
    </Arrow>
  );
}
