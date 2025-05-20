import Layout from "@/components/common/Layout";
import Container from "@/components/common/parts/Container";
import AboutMe from "@/components/whoami/AboutMe";
import Career from "@/components/whoami/Career";
import Links from "@/components/whoami/Links";
import Skill from "@/components/whoami/Skill";
import { ROUTES } from "@/lib/data/routes";
import { NextPage } from "next";
import Image from "next/image";

const Whoami: NextPage = () => {
  return (
    <Layout path={ROUTES.WHOAMI} title="WHO AM I">
      <Container maxWidth="max-w-4xl">
        <div>
          <Image src={"/images/whoami/aaaa.png"} alt="" width={340} height={340} />
          <h1>HATANO</h1>
          <Links />
        </div>
        <div>
          <Career />
          <Skill />
          <AboutMe />
        </div>
      </Container>
    </Layout>
  );
};

export default Whoami;
