import React, { useState } from "react";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config/index.js";
import ProjectItem from "../components/projects/projectItem";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Projects({ projects }) {
  console.log(projects.results);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* <Layout className="px-100"> */}
      <Header />
      <div className="w-screen flex flex-col items-center justify-center min-h-screen mb-10 px-32">
        <Head>
          <title>성실버의 포트폴리오</title>
          <meta name="description" content="오늘도 리액트" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-3xl font-bold">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <ul>
          {/* <Slider {...settings}> */}
          {projects.results.reverse().map((aProject, index) => (
            <ProjectItem data={aProject} key={index} />
          ))}
          {/* </Slider> */}
        </ul>
      </div>
      {/* </Layout> */}
      <Footer />
    </div>
  );
}

//빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Work Period",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.rich_text[0]?.plain_text
  );

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
