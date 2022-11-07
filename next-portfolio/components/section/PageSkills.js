import React from "react";

function PageSkills() {
  return (
    <div className="text-center ">
      <div>
        <h1 className="text-4xl mb-4 font-lg text-gray-900">Skills</h1>
      </div>
      <div className="flex">
        <div className="w-2/3 skill-card">
          <h1>FRONT-END</h1>
          <div>하나</div>
          <div>둘</div>
          <div>셋</div>
          <div>넷</div>
          <div>다섯</div>
          <div>여섯</div>
        </div>
        <div className="w-1/3 skill-card">
          <h1>etc</h1>
          <div>하나</div>
          <div>둘</div>
          <div>셋</div>
          <div>넷</div>
          <div>다섯</div>
          <div>여섯</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default PageSkills;
