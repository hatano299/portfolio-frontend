import Layout from "@/components/common/Layout";
import Container from "@/components/common/parts/Container";
import { ROUTES } from "@/lib/data/routes";
import { NextPage } from "next";

const Whoami: NextPage = () => {

  return (
    <Layout path={ROUTES.WHOAMI} title="WHO AM I">
      <Container maxWidth="max-w-4xl">
        <div></div>
      </Container>
    </Layout>
  )
}

export default Whoami;