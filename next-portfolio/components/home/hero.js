import { useRef, useEffect, useState } from "react";
import Animation from "./animation";
import Link from "next/link";
import Dots from "../common/Dots";

const DIVDER_HEIGHT = 5;

export default function Hero() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; //스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight * 0.81; //화면 세로길이 100vh와 같다

      if (deltaY > 0) {
        //스크롤 내릴때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재페이지 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop > pageHeight * 2) {
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          //현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        //스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          //현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    //스크롤 행동 구현
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div>
      <div ref={outerDivRef} className="outer h-[81vh]">
        <Dots scrollIndex={scrollIndex} />
        <div className="inner flex flex-row h-[81vh]">
          <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-16 mb-16 md:mb-0 items-center text-center">
            <h1 className="pl-16 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-black dark:font-black">
              소통을 좋아하는 개발자 유성은입니다
            </h1>
            <p className=" pl-16 pr-16 mt-8 mb-16 leading-relaxed text-md font-semibold  dark:text-slate-50">
              ‘개발자와 소통하는 법, 개발자의 언어로 미팅하기’는 근래 다양한
              조직에서 주목하고 필요로 하는 주제입니다.
              <br />
              <br />
              저는 아직 숙련된 코딩 실력이나 실무 경험이 많은 개발자는 아닙니다.
              그러나 커뮤니케이션에 뾰족한 강점이 있는 주니어 개발자라고
              자신합니다.
              <br />
              <br />
              하기에 작성한 내용을 통해 학부 시절 학생회장, 대학생 공간디자인
              연합회 학교대표로 1년 프로젝트를 리드했던 경험, 개발자 양성
              부트캠프에서 팀장으로 원활한 커뮤니케이션을 기반으로 만들어낸
              과정과 결과를 보여드리고자 합니다.
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
          <div className="mr-32 mt-16 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
        </div>
        {/*오차 허용 범위 */}
        <div className="divider"></div>
        <div className="inner h-[81vh]">
          <div className="text-center">
            <div>
              <h1 className="text-4xl mb-4 font-lg text-gray-900">Skills</h1>
            </div>
            <div className="flex">
              <div className="grow skill-card">
                <div>하나</div>
                <div>둘</div>
                <div>셋</div>
                <div>넷</div>
                <div>다섯</div>
                <div>여섯</div>
              </div>
              <div className="grow skill-card">etc</div>
              <div className="grow skill-card">etc2</div>
              <div></div>
            </div>
          </div>
        </div>
        {/*오차 허용 범위 */}
        <div className="divider"></div>
        <div className="inner h-[81vh]">dd</div>
      </div>
    </div>
  );
}
