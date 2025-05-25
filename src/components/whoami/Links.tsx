import { FaGithub, FaInstagram } from "react-icons/fa";

type Props = {
  className?: string;
};

const Links = (props: Props) => {
  const { className = "" } = props;

  return (
    <div className={className}>
      <h3 className="text-secondary">Link</h3>
      <ul className="mt-2 text-body">
        <li className="flex items-center gap-2 hover:text-pink-300 transition">
          <FaGithub />
          <a href="https://github.com/hatano299" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li className="flex items-center gap-2 mt-1 hover:text-pink-300 transition">
          <FaInstagram />
          <a href="https://www.instagram.com/hatano.299/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
