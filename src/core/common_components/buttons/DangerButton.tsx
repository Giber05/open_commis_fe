import { Button } from "antd";

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  width?: string;
  htmlType?: "reset" | "submit" | "button";
  additionalClass?: string;
  rounded?: boolean;
  loading?: boolean;
  block?: boolean;
};
function DangerButton(props: ButtonPropsType):JSX.Element {
  const { title, onClick, width, htmlType, additionalClass, rounded, loading, block } = props;
  return (
    <div className={`w-20 sm:${width}`}>
      <Button danger className={`comic-shadow-btn bg-[#E41F2D] text-white ${rounded ? "rounded-full" : "rounded"} ${additionalClass}`} onClick={onClick} htmlType={htmlType} loading={loading} block={block}>
        {title}
      </Button>
    </div>
  );
}
DangerButton.defaultProps = {
  title: undefined,
  onClick: undefined,
  size: undefined,
  htmlType: undefined,
  width: undefined,
  rounded: false,
  loading: undefined,
  block: false,
};

export default DangerButton;
