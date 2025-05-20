import Image from "next/image";
import LinkButton from "../common/parts/LinkButton";

const WhoamiCard = () => {
  return (
    <div className="w-2xs">
      <h3>WHO AM I</h3>
      <Image src="/images/whoami/xxx.png" alt="はたのアイコン" width={220} height={160} />
      <h2>HATANO</h2>
      <h3>WEB ENGINEER</h3>
      <LinkButton variant="primary" label="about me" linkUrl="/whoami" />
    </div>
  );
};

export default WhoamiCard;
