import LinkButton from "@/components/common/parts/LinkButton";
import type { Work } from "@/lib/common/work";
import Image from "next/image";

type Props = {
  work: Work;
};

const WorkCard = ({ work }: Props): React.ReactElement => {
  return (
    <div className="w-2xs rounded-2xl border-2 border-double border-[#AAAAAA] p-6 shadow-lg shadow-gray-500/30">
      <h3 className="text-secondary">WORK</h3>
      <Image
        src={work.imageUrl}
        alt={`${work.title}のイメージ`}
        width={288}
        height={160}
        className="rounded-2xl"
      />
      <h3 className="text-card-primary">{work.title}</h3>
      <p className="text-card-body">{work.createdAt}</p>
      <p className="text-card-body">{work.description}</p>
      <div className="flex justify-end">
        <LinkButton
          variant="primary"
          label="view app"
          linkUrl={work.linkUrl}
          className="mt-2 w-30 border-[#AAAAAA]"
        />
      </div>
    </div>
  );
};

export default WorkCard;
