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
    <a href='#2-주요-기능-'>2. 기술 스택📊</a>
  </li>
  <li>
    <a href='#3-기술-스택-'>3. 팀원 소개👨‍👩‍👦‍👦</a>
  </li>
  <li>
    <a href='#4-커밋-컨벤션-'>4. 기획 단계📋</a>
  </li>
  <li>
    <a href='#5-기능-소개-'>5. 기능 소개✨</a>
  </li>
</ul>
<br/>

## 1. 프로젝트 소개 😎

 - 기업의 채용관리 및 서비스를 위한 웹 서비스 백엔드 API 

</br>

## 2. 주요 기능 
### 1. 사용자 등록
[post] http://localhost:8000/user 
```bash
body :
    {
        "name" : "sim"
    }
```

Response
```bash
    {
        "data": {
            "done": 0,
            "id": 1,
            "user_name": "sim",
            "updatedAt": "2023-10-18T13:03:12.874Z",
            "createdAt": "2023-10-18T13:03:12.874Z"
        }
    }
```
</br>

### 2. 회사 등록
[post] http://localhost:8000/company 
```bash
body :
    {
        "name": "삼성",
        "country": "한국",
        "area": "서울시시"
    }
```
Response
```bash
    {
        "data": {
            "done": 0,
            "company_id": 1,
            "company_name": "삼성",
            "company_country": "한국",
            "company_area": "서울시시",
            "updatedAt": "2023-10-18T13:04:01.886Z",
            "createdAt": "2023-10-18T13:04:01.886Z"
        }
    }
```

</br>

### 3. 채용공고 등록
[post] http://localhost:8000/job 
```bash
body :
    {
        "company_id": "1",
        "position": "백엔드 주니어 개발자",
        "compensation": 1000000,
        "content": "원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
        "skill": "Python"
    }


```
Response
```bash
body :
    {
        "data": {
            "done": 0,
            "Job_id": 4,
            "position": "백엔드 주니어 개발자",
            "compensation": 1000000,
            "content": "원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
            "skill": "Python",
            "company_id": "1",
            "updatedAt": "2023-10-18T13:08:44.959Z",
            "createdAt": "2023-10-18T13:08:44.959Z"
        }
    }


```
</br>

### 4. 채용공고 수정
[patch]http://localhost:8000/job/1
```bash
    {
        "job_id": "1",
        "position": "백엔드 주니어 개발자",
        "compensation": 1000000,
        "content": "원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
        "skill": "Python, nodejs(수정됨)"
    }
```
Response
```bash
    {
        "result": true
    }
```

<br>

### 5. 채용공고 삭제
[delete]http://localhost:8000/job/1
```bash
    {
        
    }
```
Response
```bash
    {
        "result": true
    }
```
</br>

### 6. 채용공고 리스트 확인
[get]http://localhost:8000/job
```bash
    {
        
    }
```
Response
```bash
    {
        "data": [
            {
                "Job_id": 2,
                "position": "프론트 주니어 개발자",
                "compensation": 1000000,
                "skill": "React",
                "Company.company_name": "삼성",
                "Company.company_country": "한국",
                "Company.company_area": "서울시시"
            },
            {
                "Job_id": 4,
                "position": "백엔드 주니어 개발자",
                "compensation": 1000000,
                "skill": "Python",
                "Company.company_name": "삼성",
                "Company.company_country": "한국",
                "Company.company_area": "서울시시"
            }
        ]
    }
```
</br>

### 7. 채용공고 검색
[get]http://localhost:8000/search/한국
```bash
    {
        
    }
```
Reponse
```bash
    {
        "data": [
            {
                "Job_id": 2,
                "position": "프론트 주니어 개발자",
                "compensation": 1000000,
                "content": "원티드랩에서 프론트 주니어 개발자를 채용합니다. 자격요건은..",
                "skill": "React",
                "Company.company_name": "삼성",
                "Company.company_country": "한국",
                "Company.company_area": "서울시시"
            },
            {
                "Job_id": 4,
                "position": "백엔드 주니어 개발자",
                "compensation": 1000000,
                "content": "원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
                "skill": "Python",
                "Company.company_name": "삼성",
                "Company.company_country": "한국",
                "Company.company_area": "서울시시"
            }
        ]
    }
```
</br>

### 8. 채용공고 상세 정보 
[get]http://localhost:8000/job/1
```bash
    {

    }
```
Response
```bash

없을 경우
    {
        "error": "해당 작업을 찾을 수 없음"
    }

있을 경우
    {
        "data": {
            "Job_id": 2,
            "position": "프론트 주니어 개발자",
            "compensation": 1000000,
            "content": "원티드랩에서 프론트 주니어 개발자를 채용합니다. 자격요건은..",
            "skill": "React",
            "Company": {
                "company_id": 1,
                "company_name": "삼성",
                "company_country": "한국",
                "company_area": "서울시시"
            },
            "otherJobs": [
                4
            ]
        }
    }
```
</br>

### 9. 공고 지원
[post]http://localhost:8000/apply
```bash
    {
        "id" : 1,
        "Job_id" : 2
    }
```
Response
```bash
    {
        "data": {
            "done": 0,
            "apply_id": 1,
            "id": 1,
            "Job_id": 2,
            "updatedAt": "2023-10-18T13:17:18.006Z",
            "createdAt": "2023-10-18T13:17:18.006Z"
        }
    }

    이미 지원한 경우
    {
        "result": false,
        "message": "이미 지원한 공고입니다."
    }
```

</br>

## 3. 기술 스택 📊

+ ![mysql](https://img.shields.io/badge/mysql-4479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white)
+ ![sequelize](https://img.shields.io/badge/sequelize-52B0E7.svg?&style=for-the-badge&logo=sequelize&logoColor=white)

+ ![node.js](https://img.shields.io/badge/node.js-339933.svg?&style=for-the-badge&logo=node.js&logoColor=white)

+ ![notion](https://img.shields.io/badge/notion-000000.svg?&style=for-the-badge&logo=notion&logoColor=white)
+ ![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)
+ ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br/>

## 4. 커밋 컨벤션

+ feat : 새로운 기능 추가
+ fix : 버그 수정
+ docs : 문서수정
+ Style : 코드 포맷, 세미콜론 누락, 코드 변경이 없는 경우
+ test : 테스트 코드

## 5. API명세서

https://www.notion.so/user-0a56d465ce534ab99f0e180144770f5b?pvs=4

https://www.notion.so/company-404ca420d96d4a3cb020105125f5e377?pvs=4

https://www.notion.so/job-85d7b9f5548c4df198ad5b17f86d23aa?pvs=4

https://www.notion.so/job-147dbc6a2cff46ea910250261aff0740?pvs=4

https://www.notion.so/job-job_id-c3db2a4f5ae6401097ed9eaf71941037?pvs=4

https://www.notion.so/job-job_id-b26a7ca7448648d9b30f21784c7c604c?pvs=4

https://www.notion.so/search-keyword-d1705151b84e424b9151c638fc343d37?pvs=4

https://www.notion.so/job-job_id-04b4d275f2c84d2eab051905a9ed6ca1?pvs=4

https://www.notion.so/apply-bc36e5141eaf45bcb26b3d3ddb9217c9?pvs=4

https://www.notion.so/63a77835d32e4e75964aeff9a37d1ccc?pvs=4

