import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../header";

import profileImg from "./img/profile.png";
import github from "./img/github.png";
import tistory from "./img/tistory.png";
import notion from "./img/notion.png";
import instagram from "./img/instagram.png";
import bg from "./img/uyuni.JPEG";

function PageAboutme() {
  return (
    <div>
      <div className="relative top-0 z-10">
        <Header />
      </div>
      <div className=" flex flex-row mt-4 z-1">
        {/* <Header /> */}
        <div>
          <Image
            src={bg}
            alt="메인 배경 이미지"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute "
          />
        </div>
        <div className="w-1/4 mt-8 mx-24 text-center z-10">
          <Link href="https://open.kakao.com/o/sNL9y8He">
            <a className="headerTag mr-20 hover:text-gray-900" title="연락하기">
              <div>
                <Image
                  className="rounded-full"
                  width={200}
                  height={240}
                  src={profileImg}
                  alt="프로필"
                />
              </div>
            </a>
          </Link>
          <h2 class="font-medium title-font mt-4 text-lg">
            <p className="text-slate-200 text-4xl font-bold dark:text-slate-50">
              유성은
            </p>
            <br />
            <p className="text-slate-200 text-2xl font-bold dark:text-slate-50">
              Yoo Seong Eun
            </p>
          </h2>
          <div className="w-100 h-1 bg-slate-300 rounded my-6"></div>
          <p className="text-slate-200">Tel&emsp;010 . 4370 . 0743</p>
          <p className="text-slate-200">E-mail&emsp;yooseongeun@naver.com</p>
          <div className="flex items-center justify-around mt-4">
            <span>
              <a
                href="https://www.instagram.com/tjd_silver/"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank">
                <Image src={instagram} width={40} height={40} />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/SeongSilver"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank">
                <Image src={github} width={60} height={60} />
              </a>
            </span>
            <span>
              <a
                href="https://puzzled-wire-53e.notion.site/12875172d98f4d95a99ed03c21b58972"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank">
                <Image src={notion} width={60} height={60} />
              </a>
            </span>
            <span>
              <a
                href="https://ddvuutk.tistory.com"
                rel="noopener noreferrer"
                className="text-gray-600 "
                target="_blank">
                <Image src={tistory} width={60} height={60} />
              </a>
            </span>
          </div>
        </div>
        <div className="w-2/3 mt-16 ml-16 z-10">
          <div className="my-16">
            <div className="flex flex-row">
              <div className="w-[30px] h-[10px] bg-slate-500 mt-4 mr-4"></div>
              <h1 className="text-3xl font-semibold mb-4 text-slate-100">
                Education
              </h1>
            </div>
            <br />
            <p class="leading-relaxed text-lg mb-4 text-slate-200">
              [2013.03 - 2020.08] 가천대학교 실내건축학과 졸업
              <br />
              <br />
              [2021.12 - 2022.06] 멀티캠퍼스 풀스택 개발과정 수료
            </p>
          </div>
          {/* <div className="mb-16">
          <div className="flex flex-row">
            <div className="w-[30px] h-[10px] bg-slate-700 mt-4 mr-4"></div>
            <h1 className="text-3xl font-semibold mb-4">Certificate</h1>
          </div>
          <br />
          <p class="leading-relaxed text-lg mb-4">
            [2022 / 한국산업인력공단] 정보처리기사(필기 합)
            <br />
            <br />
            [2021 / 한국생산성본부] GTQI 1급
            <br />
            <br />
            [2020 / 한국산업인력공단] 컬러리스트기사
            <br />
            <br />
            [2019 / 한국생산성본부] GTQ 1급
          </p>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default PageAboutme;
