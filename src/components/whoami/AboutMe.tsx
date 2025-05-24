type Props = {
  className?: string;
};

const AboutMe = (props: Props) => {
  const { className = "" } = props;

  return (
    <div className={className}>
      <h3 className="text-secondary">About me</h3>
      <div className="mt-4">
        <p className="text-body">
          山口県に生まれ北海道の人参農家を目指し九州大学へ。
          ハッカーに憧れ独りプログラミングを始める。
          株式会社UnReactで画像素材管理サービスのフロントエンド開発に約6ヶ月従事(インターン)。
          新卒で某ロボアド株式会社に入社。
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
