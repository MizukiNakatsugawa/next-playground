import { NextPage } from "next";
import BibleImage from "../../public/images/profile.png";
import Image from "next/image";

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src="/images/profile.png" />
      <p>Imageコンポーネントを使用して表示</p>
      <Image
        src={BibleImage}
        alt=""
        placeholder="blur"
        layout="responsive"
      ></Image>
      <p>Imageで描画した場合事前に描画エリアが確保されます</p>
    </div>
  );
};

export default ImageSample;
