import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiSpring } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

type Props = {
  className?: string;
};

const Skill = (props: Props) => {
  const { className = "" } = props;

  const skillStack = [
    { Icon: FaHtml5, key: "html5", label: "HTML5", since: "2022-" },
    { Icon: FaCss3, key: "css3", label: "CSS3", since: "2022-" },
    { Icon: IoLogoJavascript, key: "javascript", label: "JavaScript", since: "2022-" },
    { Icon: TbBrandTypescript, key: "typescript", label: "TypeScript", since: "2023-" },
    { Icon: FaReact, key: "react", label: "React", since: "2022-" },
    { Icon: SiNextdotjs, key: "nextjs", label: "Next.js", since: "2023-" },
    { Icon: FaJava, key: "java", label: "Java", since: "2024-" },
    { Icon: SiSpring, key: "spring", label: "Spring", since: "2024-" },
  ];

  return (
    <div className={className}>
      <h3 className="text-secondary">Skill</h3>
      <ul className="flex gap-4 mt-4">
        {skillStack.map(({ Icon, key, label, since }) => (
          <li key={key} className="group relative flex flex-col items-center">
            <figure className="hover:text-pink-300 transition">
              <Icon size={60} />
            </figure>
            <figcaption
              className="absolute bottom-[-60px] scale-0 group-hover:scale-100 transition duration-200 bg-gray-800 px-3 py-1 rounded shadow-md text-body text-sm
            flex flex-col items-center"
            >
              <span>{label}</span>
              <span>{since}</span>
            </figcaption>
          </li>
        ))}
      </ul>

      <ul className="mt-4 ml-1 text-body">
        <li>2024-02 基本情報技術者試験合格</li>
      </ul>
    </div>
  );
};

export default Skill;
