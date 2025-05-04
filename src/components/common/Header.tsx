import Container from "@/components/common/parts/Container";

type Props = {
  title: string
}

const Header = (props: Props): React.ReactElement => {
  const { title } = props;

  return (
    <header className="relative py-4">
      <Container className="flex items-center">
        <h3>{title}</h3>
      </Container>
    </header>
  );
}

export default Header;