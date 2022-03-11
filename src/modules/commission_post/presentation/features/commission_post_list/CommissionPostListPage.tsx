import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import React from "react";

const { Text, Title } = Typography;
const { Option } = Select;

type commisisonType = {
  name:string,
  price: number,
  image: string,
}
function CommissionPostListPage():JSX.Element {
  const commissions:commisisonType[]=[
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },
    {
      name:"Anime",
      price:20000,
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suara.com%2Fentertainment%2F2021%2F11%2F29%2F171928%2F6-situs-live-streaming-anime-terbaik-dari-iqiyi-hingga-animeindo&psig=AOvVaw0PCsur7i9BRWty4eJAxluz&ust=1647100525781000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiU4OC1vvYCFQAAAAAdAAAAABAD",
    },

  ]

  return (
    <>
      <div className="search-crypto">
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto News"
            optionFilterProp="children"
            onChange={()=>{}}
            filterOption={true}
          >
            <Option value="Cryptocurrency">ssa</Option>
            <Option value="Cryptocurrency">ssa</Option>
            <Option value="Cryptocurrency">ssa</Option>
            
          </Select>
        </Col>
      </div>

      <Row gutter={[24, 24]}>
        {commissions.map((comm, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
             <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Card.Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CommissionPostListPage;
