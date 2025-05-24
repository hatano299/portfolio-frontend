import Link from "next/link";
import { IconType } from "react-icons";

/** Props について
 * @param variant   - [必須] リンクボタンのスタイル
 * @param label     - [必須] リンクボタンのラベル
 * @param Icon      - React Icon のアイコン
 * @param linkUrl   - [必須] 遷移先のURL
 */

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: "primary" | "secondary" | "error" | "error_secondary" | "text";
  label: string;
  Icon?: IconType;
  linkUrl: string;
};

const LinkButton = (props: Props): React.ReactElement => {
  const { variant, label, Icon, linkUrl, className = "", ...anchorHTMLAttributes } = props;
  const isExternal = linkUrl.startsWith("http");
  const content = (
    <>
      {Icon && (
        <span>
          <Icon size={18} />
        </span>
      )}
      <span>{label}</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        {...anchorHTMLAttributes}
        className={`${BASE_CLASS} ${LINK_COLOR[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={linkUrl}
      {...anchorHTMLAttributes}
      className={`${BASE_CLASS} ${LINK_COLOR[variant]} ${className}`}
    >
      {content}
    </Link>
  );
};

export default LinkButton;

const BASE_CLASS =
  "relative flex items-center justify-center gap-1 rounded-md border py-2 px-4 text-center text-btn transition-all duration-200 ease-linear hover:opacity-70 disabled:opacity-100";
// variant でリンクボタンの色を分岐
const LINK_COLOR: Record<Props["variant"], string> = {
  primary:
    "border-primary bg-primary text-white disabled:border-theme-medium disabled:bg-theme-medium",
  secondary:
    "border-primary bg-white text-primary disabled:border-theme-medium disabled:text-theme-medium",
  error: "border-error bg-error text-white disabled:border-theme-medium disabled:bg-theme-medium",
  error_secondary:
    "border-error bg-white text-error disabled:border-theme-medium disabled:text-theme-medium",
  text: "border-transparent bg-transparent text-primary hover:border-theme-light hover:bg-theme-light disabled:border-transparent disabled:bg-transparent disabled:text-theme-medium",
};
