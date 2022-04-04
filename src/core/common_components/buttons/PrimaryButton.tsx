import { Button } from "antd";

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  size?: "large" | "middle" | "small";
  htmlType?: "reset" | "submit" | "button";
  additionalClass?: string;
  rounded?:boolean;
  loading?:boolean
};
function PrimaryButton(props: ButtonPropsType) {
  const { title, onClick,size, htmlType, additionalClass ,rounded, loading } = props;
  return (
    <Button 
      type="primary"
      size={size}
      className={`bg-[#40a9ff] ${rounded?"rounded-full":"rounded"} ${additionalClass}`} 
      onClick={onClick}
      htmlType={htmlType}
      loading = {loading}
    >
      {title}
    </Button>
  );
}
PrimaryButton.defaultProps = {
  title: undefined,
  onClick: undefined,
  size: "middle",
  htmlType: undefined,
  width:undefined,
  rounded:false,
  loading:undefined,
};

export default PrimaryButton;
