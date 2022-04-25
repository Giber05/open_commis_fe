import { Carousel, Image } from "antd";
import React from "react";

type CommissionImage = {
  image1?: string | null;
  image2?: string | null;
  image3?: string | null;
  image4?: string | null;
};
function FullWidthCorousel({ image1, image2, image3, image4 }: CommissionImage) {
  return (
    <Carousel  arrows touchMove autoplay className="text-center p-2 items-center ">
      {image1 == null ? null : (
        <div >
          <Image  className=" object-contain max-h-72 align-middle my-auto " src={image1}></Image>
        </div>
      )}
      {image2 == null ? null : (
        <div>
          <Image className=" object-contain max-h-72 align-middle items-center my-auto" src={image2}></Image>
        </div>
      )}
      {image3 == null ? null : (
        <div>
          <Image className="w-full max-h-72 align-middle my-auto" src={image3}></Image>
        </div>
      )}
      {image4 == null ? null : (
        <div>
          <Image className=" object-contain max-h-72  my-auto" src={image4}></Image>
        </div>
      )}
    </Carousel>
  );
}

export default FullWidthCorousel;
