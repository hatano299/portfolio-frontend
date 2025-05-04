import Image, { ImageProps } from "next/image"

// 画像の遅延読み込み（Lazy Loading）用のぼかし用画像
// const BLUR_DATA_URL = 
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9...";

type Props = ImageProps & {
  alt: string;
  divProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
}

const CommonImage = (props : Props): React.ReactElement => {
  const { alt, divProps, ...imageProps } = props;

  return (
    <div style={{ letterSpacing: 0, wordSpacing: 0, fontSize: 0}} {...divProps}>
      <Image alt={alt} {...imageProps} />
    </div>
  )
}

export default CommonImage;