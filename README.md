<div align="center">
로고 들어갈 자리
</div>


# 유성은의 포트폴리오  
### 프로젝트와 간단한 개인정보를 확인 할 수 있는 웹사이트
  



---
  
## :pushpin: 프로젝트 설명
 
:computer: 개발환경  

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white"/> 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/>


---
  
## :pushpin: 목차  
[1. 개발 로그](#개발-로그)  
[2. 프로젝트 사용 방법](#프로젝트-사용-방법)  
[3. 참고 자료](#참고-자료)

---
  
## 개발 로그
* 노션 API Retrieve a database를 통해 기록된 프로젝트 정보를 데이터로 받아 사용
* JSX, tailwindCSS, JavaScript를 활용하여 페이지 구성
* Next.js 프로젝트 생성
* tailwind CSS를 사용한 다크모드 지원
* fetch API를 활용한 비동기 데이터 전송방식 사용
* react-full-page를 사용해 메인페이지 전체화면 넘기기 스크롤링 구현
* react-slick으로 프로젝트 소개 시 구현된 화면 슬라이드 구현


## dependencies  
```
"dependencies": {
    "@fullpage/react-fullpage": "^0.1.31",
    "classnames": "^2.3.2",
    "dotenv": "^16.0.3",
    "next": "12.3.1",
    "next-theme": "^0.1.5",
    "next-themes": "^0.2.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-full-page": "^0.1.12",
    "react-icons": "^4.6.0",
    "react-lottie-player": "^1.4.3",
    "react-slick": "^0.29.0",
    "slick-carousel": "^1.8.1",
    "tailwind-scrollbar-hide": "^1.1.7",
    "typed.js": "^2.0.12"
  }
```

---


## 프로젝트 사용 방법
### 설치
package.json에 있는 라이브러리 설치
```
npm install
```
프로젝트 시작 시
```
npm run dev
```

### 메인페이지 
* react-full-page 라이브러리를 사용 전체페이지 스크롤단위 넘기기 구현
* 다크모드 지원, 간단한 자기소개와, 타이핑 효과로 구현한 슬로건, 깃허브, 블로그, SNS등으로 이동할 수 있는 버튼 배치 
* 간단한 자기소개서
* 사용가능한 스킬 나열


![1](https://user-images.githubusercontent.com/95121282/216220045-4f8e07b7-d8f6-4c31-9a4c-e8e43ba713d7.PNG)
![2](https://user-images.githubusercontent.com/95121282/216220048-98f2e082-02c3-4a1a-a6aa-43552db8653c.PNG)
![3](https://user-images.githubusercontent.com/95121282/216220049-6d181a49-ad30-4d2f-b407-b081382ebdb6.PNG)


### 프로젝트 
* 개인 및 팀 프로젝트를 카드 형식으로 나열
* 다크모드 지원, react-slick을 사용한 슬라이드로 프로젝트 설명 카드 내에 이미지 슬라이드 기능 구현



![4](https://user-images.githubusercontent.com/95121282/216220051-86d8b19e-e4d4-4be2-b4d7-0927217f420c.PNG)
![5](https://user-images.githubusercontent.com/95121282/216220040-1db02518-7d3e-4c89-a6f8-dcb29469d1a1.PNG)

---
## 참고 자료


* 개발하는 정대리 깃허브 : [https://github.com/TuenTuenna/next-portfolio-tutorial](https://github.com/TuenTuenna/next-portfolio-tutorial)
* 노션 API Retrieve a database : [https://developers.notion.com/reference/retrieve-a-database](https://developers.notion.com/reference/retrieve-a-database)
* react-full-page : [https://www.npmjs.com/package/react-full-page](https://www.npmjs.com/package/react-full-page)
* react-slick : [https://react-slick.neostack.com/](https://react-slick.neostack.com/)
