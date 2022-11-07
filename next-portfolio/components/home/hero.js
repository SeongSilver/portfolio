import { useRef, useEffect, useState } from "react";
import Dots from "../common/Dots";
import PageIntroduce from "../section/PageIntroduce";
import PageSkills from "../section/PageSkills";
import PageEtc from "../section/PageEtc";

const DIVIDER_HEIGHT = 5;

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
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          //현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
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
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          //현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: "60vh",
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
      <div ref={outerDivRef} className="outer h-[63vh]">
        <Dots scrollIndex={scrollIndex} />
        <div className="inner h-[63vh]">
          <h1 className="text-4xl">어바웃미</h1>
        </div>
        {/*오차 허용 범위 */}
        <PageSkills className="inner h-[63vh]" />
        {/*오차 허용 범위 */}
        <PageIntroduce className="inner flex flex-row h-[63vh]" />
      </div>
    </div>
  );
}
