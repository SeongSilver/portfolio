import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../header";
import Typed from "typed.js";
import DarkModeToggleButton from "../dark-mode-toggle-button";

import github from "./img/github.png";
import tistory from "./img/tistory.png";
import notion from "./img/notion.png";
import instagram from "./img/instagram.png";
import bg from "./img/uyuni.JPEG";

function PageAboutme() {
  const introduce =
    "하고싶은 건 꼭 해봐야 하는데 이번에는 개발자가 되고 싶습니다";
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + introduce[count]
          : introduce[0];
        setCount(count + 1);

        if (count >= introduce.length) {
          setCount(0);
          setBlogTitle("");
        }

        return result;
      });
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  });

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "하고 싶고 되고 싶은 것은 무조건 도전하는 성격인데",
        "프론트엔드 개발자가 되고 싶습니다!",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 150,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-full">
      <div className="fixed top-[50px] right-[100px] body-font">
        <DarkModeToggleButton />
      </div>
      <div className="h-full">
        <div className="w-[85vw] h-1/3 flex justify-center">
          <div className="w-full mt-64 mr-36 text-center text-slate-100 z-10 text-[2.2em]">
            <span ref={el}></span>
          </div>
        </div>
        <div className="w-[85vw] h-1/3 flex justify-center mt-24">
          <div className="flex flex-row mt-16 z-1">
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
            <div className="w-1/2 mt-8 mr-64 text-center z-10">
              <h2 class="font-medium title-font mt-4 text-lg">
                <Link href="https://open.kakao.com/o/sNL9y8He">
                  <a
                    className="headerTag mr-20 hover:text-gray-900"
                    title="연락하기">
                    <p className="text-slate-200 text-4xl font-bold">유성은</p>
                    <br />
                    <p className="text-slate-200 text-2xl font-bold">
                      Yoo Seong Eun
                    </p>
                    <br />
                  </a>
                </Link>
              </h2>
              <p className="text-slate-200">Tel&emsp;010 . 4370 . 0743</p>
              <br />
              <p className="text-slate-200">
                E-mail&emsp;yooseongeun@naver.com
              </p>
              <br />
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
            <div className="w-[40vw] mt-24 my-16 z-10">
              <div className="flex flex-row">
                <h1 className="text-2xl font-semibold mb-4 text-slate-200 dark:text-slate-400">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageAboutme;
