import { PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Divider, Image, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Second Teed ad asdasd assad as  dasd as ",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Third Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Forth Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Forth Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];
function HomePage() {
  const contentStyle = {
    height: "160px",
    color: "#101750",
    lineHeight: "160px",
    textAlign: "center",
    background: "#F6F5FF",
    fontSize: 15,
    fontWeight: "bold",
  };
  return (
    <div className="bg-white">
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
      <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Commission Post Anda</h2>
        <div className=" flex justify-center sm:justify-end py-4">
          <Link to="asd" type="default" className="hover:bg-[#F6F5FF] border-black py-2 border border-r-8 border-b-2 px-2 font-bold">
            New Commission <PlusCircleOutlined />
          </Link>
        </div>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {products.map((product) => (
            <Col className="" span={12}>
              <Card bordered className="rounded-xl border-black my-4 border-r-8 border-b-4">
                <Row justify="start">
                  <div className="px-3">
                    <Image src={product.imageSrc} alt={product.imageAlt} className="max-h-40" />
                  </div>
                  <div>
                    <Col>
                      <Typography.Title level={5}>{product.name.length > 22 ? `${product.name.substring(0, 21)}...` : product.name}</Typography.Title>
                    </Col>
                    <Col>
                      <span>
                        Status : <Typography.Text className=" text-green-500">Tersedia</Typography.Text>{" "}
                      </span>
                    </Col>
                    <Col>
                      <Typography.Text>Jumlah Pesanan: 10</Typography.Text>
                    </Col>
                    <Col>
                      <span>
                        Harga : <Typography.Text className=" font-bold">{product.price}</Typography.Text>{" "}
                      </span>
                    </Col>
                  </div>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
