import PageIntroduce from "../section/PageIntroduce";
import PageSkills from "../section/PageSkills";
import PageAboutMe from "../section/PageAboutMe";

export default function Hero() {
  return (
    <div>
      <div>
        <PageAboutMe />
        <PageSkills />
        <PageIntroduce />
      </div>
    </div>
  );
}
