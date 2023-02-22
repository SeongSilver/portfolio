import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>성실버의 포트폴리오</title>
        <meta name="description" content="오늘도 리액트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center justify-centertext-gray-600 body-font">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </>
  );
}
