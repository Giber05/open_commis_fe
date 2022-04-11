import { Col, Image, Row, Typography } from "antd";
import styles from "./RegistrationContainer.module.css";
import ConfigConstants from "../../../../../../../core/constants/config_constants";
type PropsType = {
  children: JSX.Element;
};
function RegistrationContainer(props: PropsType): JSX.Element {
  const { children } = props;
  return (
    <div className={styles.registration_container}>
      <Col className={styles.absolute_1}>
        <Image preview={false} src="/assets/images/background/login/absolute_1.png" alt="" />
      </Col>
      {children}
      <Col className={styles.absolute_2} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_2.png" alt="" />
      </Col>
      <Col className={styles.absolute_3} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_3.png" alt="" />
      </Col>
      <Col className={styles.absolute_4} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_4.png" alt="" />
      </Col>
      <Col className={styles.absolute_5} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_5.png" alt="" />
      </Col>
      <Col className={styles.absolute_6} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_6.png" alt="" />
      </Col>
      <Col className={styles.absolute_7} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_7.png" alt="" />
      </Col>
      <Col className={styles.absolute_8} sm={0} xs={0} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_8.png" alt="" />
      </Col>
      <Col className={styles.absolute_9} sm={0} xs={0} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_9.png" alt="" />
      </Col>
      <Col className={styles.absolute_10} sm={0} xs={0} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_10.png" alt="" />
      </Col>
    </div>
  );
}

export default RegistrationContainer;
