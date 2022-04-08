import { Carousel, Image } from "antd";
import React from "react";

function FullWidthCorousel() {
  return (
    <Carousel autoplay className="text-center p-2">
      <div>
        <Image className=" object-contain max-h-60 " src="https://i.pinimg.com/originals/eb/07/e3/eb07e3c77d122a1c037f3c69a3e24383.jpg"></Image>
      </div>
      <div>
        <Image className=" object-contain max-h-60 " src="https://6.viki.io/image/fa61fe6b2cb74e428ed168c247fb28d4.jpeg?s=900x600&e=t"></Image>
      </div>
      <div>
        <Image className=" object-contain max-h-60 " src="https://cdn.mykpop.tv/videos/141359/thumbnail/wjsn-eunseo-when-did-you-come-over-to-eunseos-v-live-momomover-5fc444d98eba5.jpeg"></Image>
      </div>
    </Carousel>
  );
}

export default FullWidthCorousel;
