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
        <h1 className="text-4xl mb-4 font-semibold text-gray-900">Skills</h1>
      </div>
      <div className="flex">
        <div className="w-3/5 skill-card ">
          <div className="flex flex-col   items-center">
            <div className="mb-12 flex space-x-12">
              <div>
                <Image src={html} width={80} height={120} />
              </div>
              <div>
                <Image src={css} width={80} height={120} />
              </div>
              <div>
                <Image src={js} width={80} height={120} />
              </div>
            </div>
            <div className="mb-12 flex space-x-12">
              <div>
                <Image src={jquery} width={100} height={120} />
              </div>
              <div>
                <Image src={bootstrap} width={120} height={120} />
              </div>
              <div>
                <Image src={tailwindcss} width={220} height={120} />
              </div>
            </div>
            <div className="mb-12 flex space-x-12">
              <div>
                <Image src={axios} width={200} height={30} />
              </div>
              <div>
                <Image src={react} width={200} height={50} />
              </div>
            </div>
            <div className="mb-8 flex space-x-12">
              <div>
                <Image src={redux} width={100} height={120} />
              </div>
              <div>
                <Image src={reduxsaga} width={120} height={130} />
              </div>
              <div>
                <Image src={nextjs} width={200} height={150} />
              </div>
            </div>
            <div className="text-center rounded-2xl bg-blue-500 text-white text-xl font-bold w-[150px] h-[50px] flex justify-center items-center">
              Front-End
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
            <div className="ml-2 text-center rounded-2xl bg-blue-500 text-white text-xl font-bold w-[150px] h-[50px] flex justify-center items-center">
              Back-End
            </div>
          </div>
        </div>
        <div className="w-1/5 skill-card">
          <div className="flex flex-col ">
            <div className="my-16">
              <Image src={github} width={100} height={100} />
            </div>
            <div className="my-16">
              <Image src={git} />
            </div>
            <div className="my-16">
              <Image src={sourcetree} />
            </div>
            <div className="ml-2 mt-8 text-center rounded-2xl bg-blue-500 text-white text-xl font-bold w-[150px] h-[50px] flex justify-center items-center">
              ETC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSkills;
