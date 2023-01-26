import React from "react";
import PageIntroduce from "../section/PageIntroduce";
import PageSkills from "../section/PageSkills";
import PageAboutMe from "../section/PageAboutMe";
import { FullPage, Slide } from "react-full-page";

export default function Hero() {
  return (
    <div className="scrollbar-hide">
      <FullPage controls>
        <Slide>
          <PageAboutMe />
        </Slide>
        <Slide>
          <PageIntroduce />
        </Slide>
        <Slide className="!h-[92vh]">
          <PageSkills />
        </Slide>
      </FullPage>
    </div>
  );
}
