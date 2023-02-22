import React from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.rich_text[0].plain_text;
  const githubLink = data.properties.github.url;
  const tag = data.properties.Tag.multi_select;
  const logo = data.properties.logo.files[0]?.file.url;
  const link = data.properties.link?.url || data.properties.link.url;
  const description = data.properties.description.rich_text[0].plain_text;
  const content = data.properties.content.rich_text[0]?.plain_text;
  const member = data.properties.member.rich_text[0]?.plain_text;

  let imageArr = [];
  imageArr.push(data.cover.file?.url || data.cover.external.url);
  for (let i = 0; i < data.properties.siteImage.files.length; i++) {
    if (data.properties.siteImage.files[i] !== undefined) {
      imageArr.push(data.properties.siteImage?.files[i].file.url);
    } else {
      return;
    }
  }
  console.log(imageArr);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "-1px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

  return (
    <div>
      <div className="project-card dark:text-slate-200">
        <div className="w-[35%] h-[70vh] inline-block align-middle p-8 text-center">
          <div className="h-1/2 align-center pt-24">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              quality={100}
            />
            <br />
            <br />
            <h1 className="text-[1.4em] font-bold text-slate-800">
              &nbsp;{title}
            </h1>
          </div>
          <div className="h-1/2 align-middle">
            <div className="text-slate-800 my-3 dark:text-slate-100">
              {description}
            </div>
            <div>
              <span className="text-[0.8em]">개발인원 : {member}명</span>
              <br />
              <br />
              <span>
                {tag.map((tag) => (
                  <span className="text-slate-200 mr-1 p-1 text-sm  bg-slate-500 rounded-md bg-skyblue-500 dark:bg-skyblue-700 whitespace-pre">
                    {" "}
                    {tag.name}
                  </span>
                ))}
              </span>
            </div>
            <br />
            {link ? (
              <div className="mt-[0.5%]">
                <a href={link}>배포링크 바로가기</a>
              </div>
            ) : null}
            <br />
            <div className="mt-[0.5%]">
              <a href={githubLink} className="mb-2">
                깃허브 바로가기
              </a>
            </div>
          </div>
          <br />
        </div>
        <div className="w-[65%] h-[70vh] inline-block align-middle py-8 ">
          <div className="h-full flex flex-col justify-around justify-items-center">
            <div className="h-1/2 relative block">
              <Slider {...slickSettings}>
                {imageArr.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt="img"
                      width={600}
                      height={300}
                      objectFit="contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className=" text-[0.8em] h-1/2 whitespace-pre h-auto relative block flex items-center ">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
