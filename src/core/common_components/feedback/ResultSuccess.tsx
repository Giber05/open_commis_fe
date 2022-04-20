import { Button, Result } from "antd";
import React from "react";

type ResultProps = {
  children?:JSX.Element,
  title: string,
  subTitle?: string,

}
function ResultSuccess({title,subTitle, children}:ResultProps): JSX.Element{
  return (
    <div>
      <Result
        status="success"
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

export default ResultSuccess;
