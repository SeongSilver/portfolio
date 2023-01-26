import React from "react";
import Image from "next/image";

function Modal({ id, modal, setModal, data }) {
  const title = data.properties.Name.rich_text[0].plain_text;
  const githubLink = data.properties.github.url;
  const tag = data.properties.Tag.multi_select;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const logo = data.properties.logo.files[0]?.file.url;
  const link = data.properties.link?.url || data.properties.link.url;
  const description = data.properties.description.rich_text[0].plain_text;
  const closeModalHandler = () => {
    setModal("");
  };

  console.log(data);

  return (
    <div className={modal === id ? "block" : "hidden"}>
      <div className="modalContainer w-screen h-screen bg-neutral-900/30 flex justify-center items-center fixed top-0 left-0">
        <div className="modalDiv w-2/3 h-3/4 bg-white rounded-3xl">
          <div className="modalHeader h-1/6 flex items-center justify-center text-center text-2xl font-bold">
            {title}
          </div>
          <hr className="border-2 border-slate-300" />

          <div className="modalBody h-4/6 p-16 flex">
            <div className="w-1/3">
              {data.logo ? (
                <Image
                  src={logo}
                  alt="logo image"
                  width="100%"
                  height="50%"
                  layout="responsive"
                  objectFit="cover"
                  quality={100}
                />
              ) : (
                data.title
              )}
            </div>
            <div className="w-2/3">{description}</div>
          </div>
          <hr className="border-2 border-slate-300" />
          <div className="modalFooter h-1/6 flex items-center justify-center text-center ">
            <span
              className="btn-project p-2  rounded-xl font-black cursor-pointer duration-200 hover:bg-slate-800/50 hover:ease-in-out hover:text-white"
              onClick={closeModalHandler}>
              닫기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
