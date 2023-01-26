import React, { useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config/index.js";
import ProjectItem from "../components/projects/projectItem";
import Modal from "../components/common/Modal";
import Footer from "../components/footer";

export default function Projects({ projects }) {
  const [modal, setModal] = useState("");
  const [modalCheck, setModalCheck] = useState(false);

  const openModalHandler = (id) => {
    setModal(id);
    console.log("ddd");
  };

  console.log(projects.result);
  return (
    <>
      <Layout className="px-100">
        <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-32">
          <Head>
            <title>윈스턴's 포트폴리오</title>
            <meta name="description" content="오늘도 리액트" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className="text-3xl font-bold">
            총 프로젝트 :
            <span className="pl-4 text-blue-500">
              {projects.results.length}
            </span>
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 m-6 gap-8">
            {projects.results.map((aProject) => (
              <li key={aProject.id} className="z-0">
                <ProjectItem
                  key={aProject.id}
                  id={aProject.id}
                  data={aProject}
                  openModalHandler={openModalHandler}
                />
                <Modal
                  id={aProject.id}
                  modal={modal}
                  setModal={setModal}
                  data={aProject}
                  className="!z-99"
                />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
      <Footer />
    </>
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
    (aProject) => aProject.properties.Name.rich_text[0].plain_text
  );

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
