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
      <Container maxWidth="max-w-6xl" className="flex mt-8">
        <div>
          <Image
            src={"/images/whoami/hatano.jpg"}
            alt="ハタノのイメージ"
            width={360}
            height={360}
          />
          <h2 className="text-primary">HATANO</h2>
          <Links className="mt-8" />
        </div>
        <div className="ml-10 w-[60%]">
          <Career />
          <Skill className="mt-8" />
          <AboutMe className="mt-8" />
        </div>
      </Container>
    </Layout>
  );
};

export default Whoami;
