import React from "react";
import Image from "next/image";
import profileImg from "./profile.png";
import github from "./github.png";
import tistory from "./tistory.png";

function PageAboutme() {
  return (
    <div className="h-[800px] flex flex-row">
      <div className="w-1/4 mt-32 mx-32 text-center">
        <div>
          <Image
            className="rounded-full"
            width={270}
            height={360}
            src={profileImg}
            alt="프로필"
          />
        </div>
        <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
          유성은
          <br />
          Yoo Seong Eun
        </h2>
        <div class="w-100 h-1 bg-slate-400 rounded my-6"></div>
        <div>
          <span className="pt-3">
            <a
              href="https://ddvuutk.tistory.com"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank">
              <Image src={tistory} width={60} height={60} />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/SeongSilver"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank">
              <Image src={github} width={50} height={50} />
            </a>
          </span>
        </div>
      </div>
      <div className="w-[3px] bg-slate-600 opacity-70 my-8"></div>
      <div className="w-2/3 mt-16 ml-16">
        <div className="my-16">
          <h1 className="text-3xl font-semibold mb-4">Education</h1>
          <p class="leading-relaxed text-lg mb-4">
            [2013.03 - 2020.08] 가천대학교 실내건축학과
            <br />
            [2021.12 - 2022.06] 멀티캠퍼스 풀스택 개발과정 수료
          </p>
        </div>
        <div className="mb-16">
          <h1 className="text-3xl font-semibold mb-4">Education</h1>
          <p class="leading-relaxed text-lg mb-4">
            [2013.03 - 2020.08] 가천대학교 실내건축학과
            <br />
            [2021.12 - 2022.06] 멀티캠퍼스 풀스택 개발과정 수료
          </p>
        </div>
        <div className="mb-16">
          <h1 className="text-3xl font-semibold mb-4">Education</h1>
          <p class="leading-relaxed text-lg mb-4">
            [2013.03 - 2020.08] 가천대학교 실내건축학과
            <br />
            [2021.12 - 2022.06] 멀티캠퍼스 풀스택 개발과정 수료
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageAboutme;
