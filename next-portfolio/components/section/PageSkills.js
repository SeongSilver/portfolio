import React from "react";
import Image from "next/image";

import html from "./img/logo/html5.png";
import css from "./img/logo/css3.png";
import js from "./img/logo/js.png";
import jquery from "./img/logo/jquery.png";
import axios from "./img/logo/axios.png";
import bootstrap from "./img/logo/bootstrap.png";
import react from "./img/logo/react.png";
import redux from "./img/logo/redux.png";
import reduxsaga from "./img/logo/redux-saga.png";
import nextjs from "./img/logo/nextjs.png";
import tailwindcss from "./img/logo/tailwindcss.png";
import sass from "./img/logo/sass.png";
import styled from "./img/logo/styled-component.png";

import java from "./img/logo/java.png";
import spring from "./img/logo/spring.png";
import nodejs from "./img/logo/nodejs.png";
import mysql from "./img/logo/mysql.png";

import github from "./img/logo/github.png";
import git from "./img/logo/git.png";
import sourcetree from "./img/logo/sourcetree.png";
import photoshop from "./img/logo/photoshop.png";
import illust from "./img/logo/illust.png";

function PageSkills() {
  return (
    <div className="text-center">
      <div>
        <h1 className="text-4xl font-semibold text-gray-900">Skills</h1>
      </div>
      <div className="flex">
        <div className="w-3/5 skill-card content-center">
          <div className="mb-4 flex justify-center">
            <div className="mb-4 rounded-2xl bg-blue-500 text-white text-xl font-bold w-[150px] h-[50px] flex justify-center items-center">
              Front-End
            </div>
          </div>
          <div className="flex flex-col   items-center">
            <div className="mb-12 flex space-x-12">
              <div>
                <Image src={html} width={60} height={90} />
              </div>
              <div>
                <Image src={css} width={60} height={90} />
              </div>
              <div>
                <Image src={js} width={60} height={90} />
              </div>
              <div>
                <Image src={styled} width={90} height={90} />
              </div>
            </div>
            <div className="mb-12 flex space-x-12">
              <div>
                <Image src={jquery} width={120} height={120} />
              </div>
              <div>
                <Image src={bootstrap} width={90} height={90} />
              </div>
              <div>
                <Image src={tailwindcss} width={160} height={96} />
              </div>
              <div>
                <Image src={sass} width={150} height={100} />
              </div>
            </div>
            <div className="mb-12 flex space-x-12">
              <div>
                <Image src={axios} width={150} height={20} />
              </div>
              <div>
                <Image src={react} width={140} height={30} />
              </div>
            </div>
            <div className="mb-8 flex space-x-12">
              <div>
                <Image src={redux} width={75} height={90} />
              </div>
              <div>
                <Image src={reduxsaga} width={120} height={100} />
              </div>
              <div>
                <Image src={nextjs} width={120} height={90} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 skill-card">
          <div className="mb-4 flex justify-center">
            <div className="ml-2 rounded-2xl bg-blue-500 text-white text-xl font-bold w-[150px] h-[50px] flex justify-center items-center">
              Back-End
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-8">
              <Image src={java} width={60} height={120} />
            </div>
            <div className="mb-8">
              <Image src={spring} width={110} height={80} />
            </div>
            <div className="mb-8">
              <Image src={nodejs} width={150} height={90} />
            </div>
            <div className="mb-8">
              <Image src={mysql} width={130} height={80} />
            </div>
          </div>
        </div>
        <div className="w-1/5 skill-card">
          <div className="mb-4 flex justify-center">
            <div className="ml-2 rounded-2xl bg-blue-500 text-white text-xl font-bold w-[150px] h-[50px] flex justify-center items-center">
              ETC
            </div>
          </div>
          <div className="flex flex-col">
            <div className="my-5">
              <Image src={github} width={80} height={80} />
            </div>
            <div className="my-5">
              <Image src={git} width={120} height={60} />
            </div>
            <div className="my-5">
              <Image src={sourcetree} />
            </div>
            <div className="my-5">
              <Image src={photoshop} width={60} height={60} />
            </div>
            <div className="my-5">
              <Image src={illust} width={60} height={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSkills;
