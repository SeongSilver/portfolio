import React from "react";
import Animation from "./animation";
import Link from "next/link";

function PageIntroduce() {
  return (
    <div className="h-[700px]  flex py-8 mb-4">
      <div className="lg:max-w-lg lg:w-full w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>
      <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-16 mb-16 md:mb-0 items-center text-center">
        <h1 className="pl-16 title-font sm:text-4xl text-3xl mb-16 font-medium text-gray-900 font-black dark:font-black">
          소통을 좋아하는 개발자 유성은입니다
        </h1>
        <p className=" pl-16 mb-16 leading-relaxed text-md font-semibold  dark:text-slate-50">
          ‘개발자와 소통하는 법, 개발자의 언어로 미팅하기’는 근래 다양한
          조직에서 주목하고 필요로 하는 주제입니다.
          <br />
          <br />
          저는 아직 숙련된 코딩 실력이나 실무 경험이 많은 개발자는 아닙니다.
          그러나 커뮤니케이션에 뾰족한 강점이 있는 주니어 개발자라고 자신합니다.
          <br />
          <br />
          하기에 작성한 내용을 통해 학부 시절 학생회장, 대학생 공간디자인 연합회
          학교대표로 1년 프로젝트를 리드했던 경험, 개발자 양성 부트캠프에서
          팀장으로 원활한 커뮤니케이션을 기반으로 만들어낸 과정과 결과를
          보여드리고자 합니다.
          <br />
          <br />
          근래에는 리액트, 타입스크립트 등의 학습을 통해 개발자가 가져야하는
          본질적인 실력도 함께 키워가고 있는 만큼, 점차 약점을 줄이고 강점을
          키워나가는 어엿한 개발자로 거듭날 것을 약속드립니다.
        </p>
        <div className="pl-16 flex justify-center">
          <Link href="/projects">
            <a className=" btn-project font-bold">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageIntroduce;
