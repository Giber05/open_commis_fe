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
function InfoButton(props: ButtonPropsType) {
  const { title, onClick, width, htmlType, additionalClass, rounded, loading, block } = props;
  return (
    <div className={`w-20 sm:${width}` }>
      <Button
        block={block}
        className={`comic-shadow-btn bg-[#1D94C8] text-white ${rounded ? "rounded-full" : "rounded"} ${additionalClass}`}
        onClick={onClick}
        htmlType={htmlType}
        loading={loading}
      >
        {title}
      </Button>
    </div>
  );
}
InfoButton.defaultProps = {
  title: undefined,
  onClick: undefined,
  size: undefined,
  htmlType: undefined,
  width: undefined,
  rounded: false,
  loading: undefined,
  block:false,
};

export default InfoButton;
