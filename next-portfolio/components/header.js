import Link from "next/link";
import Image from "next/image";
import DarkModeToggleButton from "./dark-mode-toggle-button";

import logo from "./section/img/logo1.png";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src={logo} width={50} height={50} />
              <span className="ml-3 text-2xl font-bold dark:text-slate-50 ">
                성실버의 개발노트
              </span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold text-lg">
            <Link href="/">
              <a className="headerTag mr-20 hover:text-gray-900">홈</a>
            </Link>
            <Link href="/projects">
              <a className="headerTag mr-20 hover:text-gray-900">프로젝트</a>
            </Link>
            <Link href="https://open.kakao.com/o/sNL9y8He">
              <a className="headerTag mr-20 hover:text-gray-900">연락하기</a>
            </Link>
          </nav>
          {/**다크모드 토글 버튼 작업 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
