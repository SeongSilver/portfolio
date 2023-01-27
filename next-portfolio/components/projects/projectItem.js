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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

  return (
    <div>
      <div className="project-card">
        <div className="w-[30%] h-full inline-block">
          <h1 className="text-2xl font-bold text-slate-800">
            <Image src={logo} alt="logo" width={30} height={30} quality={100} />
            &nbsp;{title}
          </h1>
          <div className="text-slate-800 my-3 dark:text-slate-100">
            {description}
          </div>
          <div>
            <span>개발인원 : {member}명</span>
            &emsp;&emsp;
            <span>
              {tag.map((tag) => (
                <span className="text-slate-200 mr-1 p-1 text-sm py-1 bg-slate-500 rounded-md bg-skyblue-500 dark:bg-skyblue-700 w-30">
                  {" "}
                  {tag.name}
                </span>
              ))}
            </span>
          </div>
          {link ? (
            <div className="mt-3">
              <a href={link}>배포링크</a>
            </div>
          ) : null}
          <div className="mt-3">
            <a href={githubLink} className="mb-2">
              깃허브 바로가기
            </a>
          </div>
          <br />
        </div>
        <div className="w-[68%] h-full inline-block">
          <div className="">
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
            <div className="whitespace-pre">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
