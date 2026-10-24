# 프로젝트 이미지

PPT에서 추출한 화면에는 고객사 내부 관리자 화면, API 명세, 협업 대화, 회원 정보가 포함되어 있어 현재 공개용 사이트에 복사하지 않았습니다.

공개 승인을 받은 이미지가 생기면 이 폴더에 넣고 `js/portfolio-data.js`의 해당 프로젝트 `media` 항목을 아래처럼 바꿉니다.

```js
{
  kind: "image",
  src: "images/projects/approved-screen.png",
  label: "SCREEN",
  title: "공개 승인된 대표 화면",
  description: "화면이 해결하는 사용자 문제를 한 문장으로 설명합니다."
}
```

이미지 카드에는 원본 크기 확대 기능이 자동으로 연결됩니다. 승인 전에는 `kind: "restricted"`를 유지하세요.
