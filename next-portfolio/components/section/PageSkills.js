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

import java from "./img/logo/java.png";
import spring from "./img/logo/spring.png";
import nodejs from "./img/logo/nodejs.png";
import mysql from "./img/logo/mysql.png";

import github from "./img/logo/github.png";
import git from "./img/logo/git.png";
import sourcetree from "./img/logo/sourcetree.png";

function PageSkills() {
  return (
    <div className="text-center my-32">
      <div>
        <h1 className="text-4xl mb-4 font-black text-gray-900">Skills</h1>
      </div>
      <div className="flex">
        <div className="w-3/5 skill-card ">
          <div className="flex flex-col flex-wrap flex-around">
            <div className="mb-12 flex justify-around">
              <Image src={html} width={100} height={150} />
              <Image src={css} width={100} height={150} />
              <Image src={js} width={100} height={150} />
            </div>
            <div className="mb-12 flex justify-around">
              <Image src={jquery} width={120} height={150} />
              <Image src={bootstrap} width={150} height={150} />
              <Image src={tailwindcss} width={220} height={80} />
            </div>
            <div className="mb-12 flex justify-around">
              <Image src={axios} width={200} height={30} />
              <Image src={react} width={200} height={50} />
            </div>
            <div className="mb-12 flex justify-around">
              <Image src={redux} width={100} height={150} />
              <Image src={reduxsaga} width={150} height={150} />
              <Image src={nextjs} width={150} height={150} />
            </div>
          </div>
        </div>
        <div className="w-1/5 skill-card">
          <div className="flex flex-col">
            <div className="mb-4">
              <Image src={java} width={100} height={200} />
            </div>
            <div className="mb-8">
              <Image src={spring} />
            </div>
            <div className="mb-8">
              <Image src={nodejs} />
            </div>
            <div className="mb-8">
              <Image src={mysql} />
            </div>
          </div>
        </div>
        <div className="w-1/5 skill-card items-center">
          <div className="flex flex-col justify-around items-center">
            <div className="my-16">
              <Image src={github} width={100} height={100} />
            </div>
            <div className="my-16">
              <Image src={git} />
            </div>
            <div className="my-16">
              <Image src={sourcetree} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default PageSkills;
