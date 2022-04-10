import { Col, Image } from "antd";
import styles from "../../../../../../../guest/authentication/presentation/features/Login/components/LoginContainer.module.css";
type PropsType = {
  children: JSX.Element;
};
function Portofolio(props: PropsType): JSX.Element {
  const { children } = props;
  return (
    <div className={styles.login_container}>
      <Col className={styles.absolutes_1}>
        <Image preview={false} src="/assets/images/background/login/absolute_1.png" alt="" />
      </Col>
      {children}
      <Col className={styles.absolutes_2} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_2.png" alt="" />
      </Col>
      <Col className={styles.absolutes_3} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_3.png" alt="" />
      </Col>
      <Col className={styles.absolutes_4} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_4.png" alt="" />
      </Col>
      <Col className={styles.absolutes_5} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_5.png" alt="" />
      </Col>
      <Col className={styles.absolutes_6} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_6.png" alt="" />
      </Col>
      <Col className={styles.absolutes_7} sm={8} xs={12} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_7.png" alt="" />
      </Col>
      <Col className={styles.absolutes_8} sm={0} xs={0} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_8.png" alt="" />
      </Col>
      <Col className={styles.absolutes_9} sm={0} xs={0} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_9.png" alt="" />
      </Col>
      <Col className={styles.absolutes_10} sm={0} xs={0} md={24}>
        <Image preview={false} src="/assets/images/background/login/absolute_10.png" alt="" />
      </Col>
    </div>
  );
}

export default Portofolio;
