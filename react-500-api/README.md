# 공공DB API 프로젝트

- data.go.kr 의 기상청 기상특보서비스를 활용한 App 제작

## React API를 사용하기 위하여

- data.go.kr : 대한민국 공공 DB서비스 회원가입
- 기상청 기상특보 활용신청
- Service 키받기

## react CORS 문제 해결하기

- http-proxy-middleware 설치하기 : yarn add http-proxy-middleware
- 현재 react 에서 가장 보편적으로 많이 사용하는 중간자 컴포넌트
- 실제 localhost:3000 에서 apis.data.go.kr 로 요청을 보내면 CORS 오류가 나면서 요청이 거부된다
- 이때 http-proxy-middleware가 중간에서 마치 localhost:3000 주소를 api.data.go.kr에서 요청하는것처럼
  변경하여 상대방의 CORS 문제를 우회하여 요청한다
