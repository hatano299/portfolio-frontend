import LinkButton from "@/components/common/parts/LinkButton";
import type { Work } from "@/lib/common/work";
import Image from "next/image";

type Props = {
  work: Work;
};

const WorkCard = ({ work }: Props): React.ReactElement => {
  return (
    <div className="w-2xs">
      <h3>{work.title}</h3>
      <Image src={work.imageUrl} alt={`${work.title}のイメージ`} width={220} height={160} />
      <p>{work.createdAt}</p>
      <p>{work.description}</p>
      <LinkButton variant="primary" label="view app" linkUrl={work.linkUrl} />
    </div>
  );
};

export default WorkCard;
