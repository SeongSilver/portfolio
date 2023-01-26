import React from "react";
import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.rich_text[0].plain_text;
  const githubLink = data.properties.github.url;
  const tag = data.properties.Tag.multi_select;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const logo = data.properties.logo.files[0]?.file.url;
  const link = data.properties.link?.url || data.properties.link.url;
  const description = data.properties.description.rich_text[0].plain_text;
  const content = data.properties.content.rich_text[0]?.plain_text;
  const member = data.properties.member.rich_text[0]?.plain_text;
  return (
    <div>
      <div className="project-card !z-1 float-left">
        <div>
          <Image
            className="rounded-t-xl"
            src={imgSrc}
            alt="cover image"
            width="40%"
            height="20%"
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="p-4 flex flex-col">
          <h1 className="text-2xl font-bold text-slate-800">
            <Image src={logo} alt="logo" width={30} height={30} quality={100} />
            &nbsp;{title}
          </h1>

          <div className="text-slate-800 my-3 dark:text-slate-100">
            {description}
          </div>
          <div>
            <span>개발인원 : {member}</span>
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
          <div className="whitespace-pre">{content}</div>
        </div>
      </div>
    </div>
  );
}
