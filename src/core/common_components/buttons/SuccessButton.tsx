import { Button } from "antd";

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  width?: string;
  htmlType?: "reset" | "submit" | "button";
  additionalClass?: string;
  rounded?: boolean;
  loading?: boolean;
  block?:boolean;
};
function SuccessButton(props: ButtonPropsType):JSX.Element {
  const { title, onClick, width, htmlType, additionalClass, rounded, loading, block } = props;
  return (
    <div className={`w-32 sm:w-80` }>
      <Button
        block={block}
        className={`comic-shadow-btn bg-[#00782C] text-white hover:text-white hover:bg-[#00782C] hover:opacity-75 hover:border-green-600 ${rounded ? "rounded-full" : "rounded"} ${additionalClass}`}
        onClick={onClick}
        htmlType={htmlType}
        loading={loading}
      >
        {title}
      </Button>
    </div>
  );
}
SuccessButton.defaultProps = {
  title: undefined,
  onClick: undefined,
  size: undefined,
  htmlType: undefined,
  width: undefined,
  rounded: false,
  loading: undefined,
  block:false,
};

export default SuccessButton;
