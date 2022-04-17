import { Button } from 'antd';
import React from 'react';
type ButtonPropsType = {
  title: string;
  size?: "large" | "middle" | "small";
  rounded?:boolean;
};
function DisabledButton({title,size,rounded}:ButtonPropsType) {
  return (
    <Button size={size} type="default" disabled className={`comic-shadow-btn ${rounded ? "rounded-full" : "rounded"} font-bold`}> {title}</Button>
  );
}

export default DisabledButton;
