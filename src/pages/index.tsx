import Layout from "@/components/common/Layout";
import Container from "@/components/common/parts/Container";
import WhoamiCard from "@/components/works/WhoamiCard";
import WorkCard from "@/components/works/WorkCard";
import { useWorks } from "@/hooks/works/useWorks";
import { ROUTES } from "@/lib/data/routes";
import { NextPage } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const TopPage: NextPage = () => {
  const { works } = useWorks();

  return (
    <Layout path={ROUTES.WORKS} title="WORKS">
      <Container maxWidth="max-w-4xl">
        <div className="mt-8">
          <WhoamiCard />
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default TopPage;
