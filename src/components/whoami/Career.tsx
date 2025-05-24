type Props = {
  className?: string;
};

const Career = (props: Props) => {
  const { className = "" } = props;

  return (
    <div className={className}>
      <h3 className="text-secondary">Career</h3>
      <table className="mt-4">
        <tbody>
          <tr>
            <td className="text-body pl-1">2021-04-</td>
            <td className="text-body pl-4">九州大学</td>
            <td className="text-body pl-4">農学部</td>
          </tr>
          <tr>
            <td className="text-body pl-1">2025-04-</td>
            <td className="text-body pl-4">某ロボアド株式会社</td>
            <td className="text-body pl-4">エンジニア</td>
          </tr>
        </tbody>
      </table>
      <p className="text-body"></p>
    </div>
  );
};

export default Career;
