import { Carousel } from "antd";
import React from "react";

function FullWidthCorousel() {
  return (
    <Carousel autoplay>
      <div>
        <h3
          style={{
            maxHeight: "240px",
            color: "#101750",
            lineHeight: "240px",
            textAlign: "center",
            background: "#F6F5FF",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Beranda
        </h3>
      </div>
      <div>
        <h3
          style={{
            maxHeight: "240px",
            color: "#101750",
            lineHeight: "240px",
            textAlign: "center",
            background: "#F6F5FF",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Pesanan
        </h3>
      </div>
      <div>
        <h3
          style={{
            maxHeight: "240px",
            color: "#101750",
            lineHeight: "240px",
            textAlign: "center",
            background: "#F6F5FF",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Pendapatan
        </h3>
      </div>
      <div>
        <h3
          style={{
            maxHeight: "240px",
            color: "#101750",
            lineHeight: "240px",
            textAlign: "center",
            background: "#F6F5FF",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Profile
        </h3>
      </div>
    </Carousel>
  );
}

export default FullWidthCorousel;
