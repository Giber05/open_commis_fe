import { Col, Image, Row, Typography } from "antd";
import styles from "./RegistrationContainer.module.css";
import ConfigConstants from "../../../../../../../core/constants/config_constants";
type PropsType = {
  children: JSX.Element;
};
function RegistrationContainer(props: PropsType): JSX.Element {
  const { children } = props;
  return (
    <div className="bg-[url('/public/assets/images/background/registration-background.svg')] bg-cover bg-center w-auto h-auto relative flex flex-col justify-between ">
      {children}
      <Col className="bg-primary ">
        <Typography className="text-white font-semibold text-center">{ConfigConstants.copyright}</Typography>
      </Col>
    </div>
  );
}

export default RegistrationContainer;
