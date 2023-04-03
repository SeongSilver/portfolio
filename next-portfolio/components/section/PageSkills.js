import React from "react";
import Image from "next/image";

import js from "./img/logo/JavaScript.png";
import ts from "./img/logo/TypeScript.png";
import axios from "./img/logo/axios.png";
import react from "./img/logo/react.png";
import css from "./img/logo/css3.png";
import styled from "./img/logo/styled-component.png";
import photoshop from "./img/logo/photoshop.png";
import illust from "./img/logo/illust.png";
import github from "./img/logo/github.png";
import slack from "./img/logo/slack.png";
import notion from "./img/logo/Notion.png";

function PageSkills() {
  return (
    <div className="flex h-[75vh] items-center">
      <div className="text-4xl font-black">
        <h1>Skill</h1><br/>
        &<br/><br/>
        <h1>Competencies</h1>
      </div>
      <div className="w-[40vw] h-full ml-16">
        <div className="skill-card">
        <h1 className="skill-Type">JavaScrip & TypeScript</h1>
          <Image src={js} width={80} height={80} />&emsp;&emsp;
          <Image src={ts} width={80} height={80} />
          <p className="skill-text">
            - ES6 표준 스펙을 사용, 함수형 프로그래밍 방식 개발 지향<br/>
            - TypeScript을 활용해 컴포넌트 구성 및 활용 가능<br/>
            - SPA, MPA에 대한 이해를 바탕으로 React, Next.js 개발 경험<br/>
            - 프론트 엔드 개발, 빌드  환경 구성 가능<br/>
          </p>
        </div>
        <div className="skill-card">
          <h1 className="skill-Type">React</h1>
          <Image src={react} width={240} height={50} />
          <p className="skill-text">
            - hook에 대한 이해를 바탕으로 컴포넌트 구성<br/>
            - TypeScript를 활용한 카카오맵 API 프로젝트 경험<br/>
            - Flux 패턴을 이해, Redux로 상태관리 경험
          </p>
        </div>
        <div className="skill-card">
          <h1 className="skill-Type">Axios & fetch</h1>
          <Image src={axios} width={240} height={30} />
          <p className="skill-text">
            - 5번의 팀프로젝트로 axios와 fetch API를 사용한 서버와 데이터 송수신 경험<br/>
            - Rest API에 대한 이해를 바탕으로 비동기 통신으로 api 데이터 핸들링
          </p>
        </div>
        
      </div>
      <div className="w-1/2 h-full">
        <div className="skill-card">
          <h1 className="skill-Type">Design</h1>
          <Image src={css} width={60} height={80} />&emsp;&emsp;
          <Image src={styled} width={80} height={80} />&emsp;&emsp;
          <Image src={photoshop} width={80} height={80} />&emsp;&emsp;
          <Image src={illust} width={80} height={80} />
          <p className="skill-text">
            - CSS, SCSS, Styled Components을 활용해 레이아웃 배치 및 UI 구현<br/>
            - Adobe Photoshop, Illust를 사용한 컨텐츠 디자인<br/>
            - 반응형 디자인, 웹접근성을 고려한 UI디자인 경험 
          </p>
        </div>
        <div className="skill-card">
          <h1 className="skill-Type">Cooperation</h1>
          <Image src={github} width={80} height={80} />&emsp;&emsp;
          <Image src={notion} width={80} height={80} />&emsp;&emsp;
          <Image src={slack} width={200} height={60} />&emsp;
          <p className="skill-text">
            - Git-hub의 Git Flow 방식을 이해, 프로젝트 시 사용 가능<br/>
            - Notion, Slack, Trello 등 다양한 협업 툴 사용 경험
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default PageSkills;
