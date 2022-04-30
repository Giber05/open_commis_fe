import { Button, Result } from "antd";
import React from "react";

type ResultProps = {
  children?:JSX.Element,
  title: string,
  subTitle?: string,

}
function ResultError({title,subTitle, children}:ResultProps): JSX.Element{
  return (
    <div>
      <Result
        status="warning"
        title={title}
        subTitle={subTitle}
        extra={
          <div>
            {children}
          </div>
        }
      />
    </div>
  );
}

export default ResultError;
