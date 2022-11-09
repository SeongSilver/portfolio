import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-50 body-font">
        <div className="py-4 bg-gray-700">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                <span className="ml-3 text-xl text-slate-50 font-black">
                  성실버의 개발노트
                </span>
              </a>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2022 SEONGSILVER -
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank">
                @knyttneve
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
