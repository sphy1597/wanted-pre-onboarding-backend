# Wanted-pre-onboarding-backend

### 🎬 실행 방법
```bash
node index.js
npm run start:prod
```


## 목차
<ul>
  <li>
    <a href='#1-프로젝트-소개-'>1. 프로젝트 소개😎</a>
  </li>
  <li>
    <a href='#2-기술-스택-'>2. 기술 스택📊</a>
  </li>
  <li>
    <a href='#3-팀원-소개-'>3. 팀원 소개👨‍👩‍👦‍👦</a>
  </li>
  <li>
    <a href='#4-기획-단계-'>4. 기획 단계📋</a>
  </li>
  <li>
    <a href='#5-기능-소개-'>5. 기능 소개✨</a>
  </li>
</ul>
<br/>

## 1. 프로젝트 소개 😎

 - 기업의 채용관리 및 서비스를 위한 웹 서비스 백엔드 API <br/>

---


## 2. 주요 기능 
</br>

### 1. 사용자 등록
[post] http://localhost:8000/user </br>
        {
            "name" : "sim"
        }

### 2. 회사 등록
[post] http://localhost:8000/company </br>
        {
            "name": "삼성",
            "country": "한국",
            "area": "서울시시"
        }


### 3. 채용공고 등록
[post] http://localhost:8000/company </br>
        {
            "company_id": "1",
            "position": "백엔드 주니어 개발자",
            "compensation": 1000000,
            "content": "원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
            "skill": "Python"
        }
