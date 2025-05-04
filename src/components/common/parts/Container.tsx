/** Container について
 * max-width を左右の余白を設定した共通コンポーネント。
 * コンポーネントを作るときは、基本的に Container で囲む。
 * [注意] Container の中で、Container を使うと余白がずれる。
 */

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  maxWidth?: `max-w-${string}`;
  children: React.ReactNode;
}

const Container = (props : Props): React.ReactElement => {
  const { maxWidth, children, className, ...divHTMLAttributes } = props;

  return (
    <div 
    {...divHTMLAttributes}
    className={`px-4 md:px-8 ${maxWidth ? `mx-auto ${maxWidth}` : 'w-full'} ${className}` }>
      {children}
    </div>
  );
}

export default Container;