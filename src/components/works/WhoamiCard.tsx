import Image from "next/image";
import LinkButton from "../common/parts/LinkButton";

const WhoamiCard = () => {
  return (
    <div className="w-2xs rounded-2xl border-2 border-double border-[#AAAAAA] p-6 shadow-lg shadow-gray-500/30">
      <h3 className="text-secondary">WHO AM I</h3>
      <Image
        src="/images/whoami/hatano.jpg"
        alt="はたのアイコン"
        width={288}
        height={160}
        className="rounded-2xl"
      />
      <h2 className="text-card-primary">HATANO</h2>
      <h3 className="text-secondary">WEB ENGINEER</h3>
      <div className="flex justify-end">
        <LinkButton
          variant="primary"
          label="about me"
          linkUrl="/whoami"
          className="mt-2 w-30 border-[#AAAAAA]"
        />
      </div>
    </div>
  );
};

export default WhoamiCard;
