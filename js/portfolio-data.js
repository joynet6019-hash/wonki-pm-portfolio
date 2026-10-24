/*
 * 공개용 포트폴리오 콘텐츠
 *
 * 문구와 프로젝트 데이터는 이 파일에서 관리합니다. 화면 구조를 수정하지
 * 않고도 경력, 프로젝트, 성과 문구를 업데이트할 수 있습니다.
 *
 * source: 포트폴리오_서비스기획, PM_차원기_26.08.22.pptx
 * 공개 원칙: 생년월일·휴대전화와 고객사 내부 화면·API·협업 대화는 포함하지 않습니다.
 */

window.PORTFOLIO = {
  meta: {
    name: "차원기",
    title: "서비스기획자 · PM",
    sourceDate: "2026.08.22",
    sourceFile: "포트폴리오_서비스기획, PM_차원기_26.08.22.pptx",
    email: "joynet82@hanmail.net"
  },

  profile: {
    eyebrow: "SERVICE PLANNER · PM",
    headline: "복잡한 교육 서비스 요구사항을 실행 가능한 정책과 화면으로 설계합니다",
    summary: "16년간 교육·HRD 도메인에서 사용자와 운영자의 문제를 구조화하고, 정책·화면·프로세스부터 개발 검수와 오픈까지 연결해왔습니다.",
    originalIntro: "웹사이트 하나가 세상과 소통하는 방식은 기획에서 시작됩니다. 사용자 중심 설계와 전략적 기획으로 다양한 프로젝트를 이끌어왔습니다.",
    tags: ["16년 경력", "HRD · LMS 전문", "국내외 개발사 협업"],
    privacyNote: "생년월일과 휴대전화는 공개 웹에서 제외했습니다."
  },

  achievements: [
    { value: "16년", label: "서비스기획 · PM 경력", detail: "2009년부터 교육·웹 서비스 기획 경험" },
    { value: "14개", label: "KB금융그룹 계열사 통합", detail: "공통 UI와 계열사별 운영을 함께 설계" },
    { value: "6만+", label: "HRD 플랫폼 이용 규모", detail: "KB금융그룹 교육 플랫폼 기준" },
    { value: "25%", label: "구축기간 단축", detail: "4개월 계획을 3개월 내 완료" },
    { value: "2배", label: "회원가입률 증가", detail: "간편로그인 도입 첫 달, 전월 대비" },
    { value: "30+", label: "연간 HRD 구축·리뉴얼", detail: "PPT 4페이지 기준" }
  ],

  capabilities: [
    { title: "서비스 정책 및 프로세스 설계", description: "비즈니스 목표와 사용자 요구를 분리해 운영 가능한 정책과 흐름으로 정리합니다." },
    { title: "LMS · HRD 플랫폼 기획", description: "교육 개설, 수강, 이력, 통계, 관리자 기능을 도메인 구조에 맞춰 설계합니다." },
    { title: "IA · 화면 · 와이어프레임 설계", description: "정보 구조와 화면의 역할을 정의하고 개발 가능한 수준의 상세 기획으로 연결합니다." },
    { title: "다중 도메인 통합 관리", description: "공통 기능과 계열사별 커스텀 기능을 분리해 하나의 운영 체계로 묶습니다." },
    { title: "API 인터페이스 기획", description: "외부 시스템의 데이터 기준과 송수신 조건을 협의하고 서비스 흐름에 반영합니다." },
    { title: "프로젝트 · 일정 · 이슈 관리", description: "WBS와 티켓을 기준으로 우선순위, 의존성, 이슈를 관리합니다." },
    { title: "QA 및 테스트 시나리오 작성", description: "요구사항이 실제 화면과 기능으로 구현되었는지 시나리오를 기준으로 검증합니다." },
    { title: "국내외 개발사 협업", description: "언어와 업무 방식이 다른 팀에도 오해 없이 전달되도록 산출물과 기준을 정리합니다." }
  ],

  tools: [
    { label: "기획 · 설계", items: ["Figma", "Axure", "PowerPoint", "Excel", "Word", "Notion"] },
    { label: "프로젝트 · 협업", items: ["Jira", "Azure", "Trello", "Slack"] },
    { label: "기술 · 데이터", items: ["SQL", "Java"] },
    { label: "AI 활용", items: ["Codex", "ChatGPT", "Claude", "Gemini", "ClovaNote"] }
  ],

  careers: [
    {
      id: "keduall",
      company: "케듀올",
      period: "2026.05–현재",
      status: "current",
      position: "기획팀 파트장",
      focus: "신규 사이트 · LMS 관리기능 · TOPIK AI · 한국어 교육",
      highlights: ["신규 사이트 기획", "LMS 관리기능과 TOPIK AI 교육", "도토리 한국어·도토리 토픽 AI"],
      detail: "한국어 교육 플랫폼의 사용자·관리자 기능을 기획하고, 외국 개발사 전달용 산출물 작성과 개발 검수·오픈 후 이슈 대응을 담당했습니다.",
      sourceSlides: "4"
    },
    {
      id: "hunet",
      company: "휴넷",
      period: "2022.08–2026.02",
      status: "past",
      position: "LABS기획팀 책임",
      focus: "커스텀 HRD 플랫폼 신규 구축 · 리뉴얼",
      highlights: ["신규 구축·리뉴얼 연 30건 이상", "기능개선 연 150건 이상", "다중 도메인 관리·모바일 수료증·추천과정 자동화"],
      detail: "고객사별 HRD 플랫폼과 LMS 관리기능을 기획하고 PM으로 일정·이슈·개발 검수까지 관리했습니다. 금융·공공·기업 고객사의 상이한 운영 정책을 하나의 플랫폼 구조에 반영했습니다.",
      sourceSlides: "4"
    },
    {
      id: "kg-2019",
      company: "KG에듀원",
      period: "2019.04–2022.08",
      status: "past",
      position: "온라인기획팀 과장",
      focus: "고객사 HRD 플랫폼 · 그룹사 사이트 · 정보보호",
      highlights: ["고객사 정보보호 업무 연 30회", "그룹사 휴대폰 판매 사이트 기획", "커스텀 HRD·LMS와 국가인증 기관평가 대응"],
      detail: "고객사 맞춤형 WEB·APP과 LMS 관리기능을 기획하고, 고객사 정보보호 업무와 정기 국가인증 기관평가를 진행했습니다.",
      sourceSlides: "5"
    },
    {
      id: "studymax",
      company: "스터디맥스",
      period: "2016.03–2019.04",
      status: "past",
      position: "기술개발연구소 과장 · 파트장",
      focus: "교육 서비스 · ERP · 업무 협업 사이트",
      highlights: ["스픽킹맥스·스픽킹덤·차이나맥스 신규 사이트·LMS", "자체 ERP와 업무 협업 사이트", "매출 통계 사이트와 2차 본인인증 프로세스"],
      detail: "유·초등 영어와 중국어 교육 서비스를 비롯해 자체 ERP, 업무 협업, 매출 통계 등 내부 시스템의 구조와 화면을 기획했습니다.",
      sourceSlides: "5"
    },
    {
      id: "kg-2015",
      company: "KG에듀원",
      period: "2015.04–2016.03",
      status: "past",
      position: "시스템지원팀 대리",
      focus: "커스텀 HRD 플랫폼 · 고객사 WEB·APP",
      highlights: ["고객사 정보보호 업무 연 10회", "신규 구축·리뉴얼 연 3건 이상", "맞춤형 WEB·APP과 기능개선 연 30건 이상"],
      detail: "고객사 신규 사이트와 LMS, 맞춤형 WEB·APP을 기획하고 PG사를 통한 결제 시스템 적용과 기능개선을 진행했습니다.",
      sourceSlides: "6"
    },
    {
      id: "doosan-donga",
      company: "두산동아",
      period: "2014.09–2015.04",
      status: "past",
      position: "시스템개발팀 대리",
      focus: "유·초등 영어 교육 · 통합 사이트",
      highlights: ["유·초등 영어 교육 서비스", "시스템 기능개선", "지역별 시연 설명회와 통합 사이트 운영"],
      detail: "유·초등 영어 교육 서비스의 시스템 기능개선과 지역별 시연 설명회를 진행하고 통합 사이트 운영을 지원했습니다.",
      sourceSlides: "6"
    },
    {
      id: "bisang",
      company: "비상교육",
      period: "2012.05–2014.05",
      status: "past",
      position: "평가연구실 CP(팀원)",
      focus: "전국단위 모의수능시험 관리 · 수능 입시정보 구축",
      highlights: ["모의평가·수능 모의지원 온라인 서비스 기획 및 운영", "모의수능시험 성적 처리", "매년 전국대학 입시 DB 구축", "입시 배치표 기획 및 배포"],
      detail: "전국단위 모의수능시험을 관리하고, 모의평가·수능 모의지원 온라인 서비스의 기획·운영과 성적 처리를 담당했습니다. 또한 매년 전국대학 입시 DB를 구축하고 입시 배치표를 기획·배포했습니다.",
      sourceSlides: "7"
    },
    {
      id: "digital-daesung",
      company: "디지털대성",
      period: "2009.03–2012.05",
      status: "past",
      position: "웹마케팅팀 사원",
      focus: "모의수능 · 입시정보 · 온라인 서비스 운영",
      highlights: ["전국단위 모의수능 운영·성적 처리", "전국 대학 입시 DB와 배치표 구축", "온라인 모의지원·통합 사이트 기획·운영"],
      detail: "전국단위 모의수능시험 운영과 성적 처리를 담당하고, 입시 DB·배치표·온라인 모의지원 서비스와 학원 통합 사이트를 기획·운영했습니다.",
      sourceSlides: "7"
    }
  ],

  projects: [
    {
      id: "kb-stadium",
      index: "01",
      priority: "primary",
      featured: true,
      category: "platform",
      type: "CUSTOM HRD PLATFORM",
      title: "KB금융그룹 통합 HRD 플랫폼",
      subtitle: "KB STADIUM 구축 프로젝트",
      owner: "휴넷 · 고객사 프로젝트",
      period: "2024.11–2025.02",
      duration: "4개월",
      team: "PM 1명 · 기획 3명 · 디자인 2명 · 퍼블리싱 2명 · 개발 4명",
      role: ["PM 100%", "기획 80%", "모니터링 100%"],
      roleNote: "역할 비율의 산정 기준은 확인 필요",
      audience: "14개 계열사 · 이용자 약 6만 명 이상",
      summary: "14개 계열사가 같은 UI 플랫폼을 사용하면서도 각자 운영할 수 있는 통합 HRD 플랫폼을 구축했습니다.",
      goal: "KB금융그룹 14개 계열사가 공통 UI를 사용하면서 계열사별 독자 운영을 이어갈 수 있는 HRD 플랫폼을 구축했습니다. 지주사는 그룹 공통 교육과 통계, 교육이력을 통합 관리하고 교육정보는 API로 연동하도록 설계했습니다.",
      problem: [
        { title: "그룹 공통 로그인", description: "도메인별로 나뉜 로그인 페이지를 하나의 흐름으로 통합해야 했습니다." },
        { title: "공통·개별 메인", description: "지주사 공통 레이아웃 안에서 계열사별 콘텐츠를 다르게 노출해야 했습니다." },
        { title: "통합 교육 개설", description: "14개 도메인을 한 번에 운영할 수 있는 교육 생성 정책이 필요했습니다." },
        { title: "자기주도학습 조건", description: "계열사마다 다른 지원 항목과 신청 조건을 공통 데이터 구조로 관리해야 했습니다." }
      ],
      roleDetail: [
        "14개 도메인의 공통·개별 요구사항 분석",
        "통합 로그인, 메인, 교육개설, 자기주도학습 정책 정의",
        "공통 기능과 커스텀 기능을 분리한 WBS 관리",
        "개발 검수, 통합 테스트, 오픈 후 이슈 관리"
      ],
      process: ["14개 도메인 요구사항", "공통·개별 제약 분석", "통합 정책·화면 설계", "병행 개발·검수", "표준화·후속 확산"],
      deliverables: [
        { title: "통합 로그인 정책", description: "계열사 선택값과 회원 DB 매칭 기준을 정의했습니다." },
        { title: "공통·개별 운영 정책", description: "지주사 설정을 상속하고 계열사 설정을 추가하는 구조를 설계했습니다." },
        { title: "교육·통계 관리 기준", description: "그룹 공통 교육과 전사 통계의 관리 범위를 정리했습니다." }
      ],
      outcomes: [
        { value: "14개", label: "계열사 통합 운영" },
        { value: "6만+", label: "플랫폼 이용 규모" },
        { value: "25%", label: "구축기간 단축" },
        { value: "후속 확산", label: "통합 로그인·통계 기준 재사용" }
      ],
      result: "공통 기능과 계열사별 커스텀 기능을 WBS 단계에서 분리해 병행 개발했고, 기존 4개월 계획을 3개월 내 전체 14개 사이트 구축으로 단축했습니다. 다중 도메인 로그인과 통계관리 기준은 후속 프로젝트에 재사용할 수 있는 구조로 정리했습니다.",
      media: [
        { kind: "restricted", label: "SCREEN", title: "그룹 공통 로그인", description: "14개 계열사를 선택해 회원 DB와 매칭하는 로그인 흐름", sourceSlide: "15", note: "실제 화면은 고객사 공개 범위 확인 후 추가" },
        { kind: "restricted", label: "ADMIN", title: "지주사 통합 관리", description: "공통 교육과 전사 통계를 관리하는 관리자 기능 구조", sourceSlide: "16", note: "내부 관리자 화면은 공개하지 않음" },
        { kind: "restricted", label: "DATA FLOW", title: "교육이력·통계 연동", description: "API와 통계관리 기준을 추상화한 산출물 영역", sourceSlide: "15–17", note: "내부 데이터·API 상세는 공개하지 않음" }
      ],
      visibility: { client: "review", screens: "restricted", note: "고객사명과 내부 화면·API는 공개 범위 확인 필요" },
      sourceSlides: "12–17"
    },
    {
      id: "dotori-korean",
      index: "02",
      priority: "primary",
      featured: false,
      category: "platform",
      type: "NEW SERVICE BUILD",
      title: "도토리 한국어 교육 플랫폼",
      subtitle: "TOPIK 실시간·VOD 학습 사이트 신규 구축",
      owner: "케듀올 · 자체 프로젝트",
      period: "2026.05–2025.08",
      duration: "4개월 표기",
      periodStatus: "종료 연도 확인 필요",
      team: "PM·기획 1명 · 디자인 3명 · 내부 개발 1명 · 베트남 개발사 TMA",
      role: ["PM 100%", "기획 80%", "모니터링 100%"],
      roleNote: "역할 비율의 산정 기준은 확인 필요",
      audience: "베트남 TOPIK 준비생 중심 · 다국어 확장 고려",
      summary: "베트남 TOPIK 준비생을 위한 실시간·VOD 한국어 교육 플랫폼을 구축했습니다. 향후 국가 확장을 고려해 다국어 구조로 설계하고, 베트남 개발사 TMA와 영어 기준으로 협업했습니다.",
      goal: "한국어능력시험(TOPIK) 준비생을 대상으로 실시간 또는 VOD 학습이 가능한 교육 플랫폼을 구축했습니다. 우선 베트남 수강생을 대상으로 하고 향후 다국어 서비스가 가능하도록 구조를 설계했습니다.",
      problem: [
        { title: "초기 사용자 범위", description: "베트남 수강생을 우선 대상으로 빠르게 서비스를 준비해야 했습니다." },
        { title: "학습 방식 확장", description: "실시간 수업과 VOD 학습을 하나의 사용자 경험 안에서 연결해야 했습니다." },
        { title: "다국어 구조", description: "초기 언어와 국가에 종속되지 않는 확장 가능한 기획 기준이 필요했습니다." },
        { title: "외국 개발사 협업", description: "영어 문서와 티켓을 기준으로 요구사항을 오해 없이 전달해야 했습니다." }
      ],
      roleDetail: [
        "서비스 목표와 초기 사용자 범위 정의",
        "영문 기준 사용자·관리자 상세기획서 작성",
        "Azure 티켓과 월 2회 정기 회의를 통한 개발 협업",
        "화면·기능 검수와 오픈 후 이슈 모니터링"
      ],
      process: ["TOPIK 학습 수요", "초기 국가·언어 범위", "사용자·관리자 설계", "TMA 개발 협업", "운영 준비"],
      deliverables: [
        { title: "WBS", description: "개발 범위와 일정, 담당 영역을 한 기준으로 관리했습니다." },
        { title: "사용자 기획서", description: "외국 개발사 전달을 위해 주요 사용자 화면을 영어 기준으로 정리했습니다." },
        { title: "관리자 기획서", description: "관리자 기능과 운영 조건을 화면 단위로 정리했습니다." },
        { title: "협업 기준", description: "Azure 티켓, 영어 커뮤니케이션, 정기 회의의 역할을 분리했습니다." }
      ],
      outcomes: [
        { value: "TMA", label: "베트남 개발사 협업" },
        { value: "실시간·VOD", label: "학습 방식 구조" },
        { value: "영문", label: "기획 기준 커뮤니케이션" },
        { value: "확장형", label: "다국어 운영 고려" }
      ],
      result: "사용자 화면과 관리자 기능을 분리해 외국 개발사 전달용 산출물로 정리하고, Azure 티켓·영문 문서·정기 회의로 협업 기준을 맞췄습니다. 공개 가능한 정량 성과는 확인 필요 상태로 남겼습니다.",
      media: [
        { kind: "restricted", label: "SCREEN", title: "한국어 교육 플랫폼 화면", description: "수강생이 레벨 테스트와 수업 안내를 확인하는 사용자 화면", sourceSlide: "9", note: "재직 중 프로젝트의 화면 공개 범위 확인 후 추가" },
        { kind: "restricted", label: "SPEC", title: "영문 사용자 기획서", description: "외국 개발사 전달용 사용자 화면·기능 기준", sourceSlide: "11", note: "원본 산출물은 공개하지 않음" },
        { kind: "restricted", label: "WBS", title: "영문 관리자 기획서·일정", description: "관리 기능과 개발 일정을 연결한 기획 산출물", sourceSlide: "11", note: "원본 산출물은 공개하지 않음" }
      ],
      visibility: { client: "review", screens: "restricted", note: "재직 중 프로젝트와 외부 개발사 산출물은 공개 범위 확인 필요" },
      sourceSlides: "9–11"
    },
    {
      id: "sgi-hrd",
      index: "03",
      priority: "primary",
      featured: false,
      category: "platform",
      type: "CUSTOM HRD PLATFORM",
      title: "SGI서울보증보험 HRD 플랫폼",
      subtitle: "직급별 필수교육·교육이력 연동 구축",
      owner: "휴넷 · 고객사 프로젝트",
      period: "2024.06–2024.11",
      duration: "5개월",
      team: "PM 1명 · 기획 1명 · 디자인 1명 · 퍼블리싱 1명 · 개발 2명",
      role: ["PM 100%", "기획 100%", "모니터링 100%"],
      roleNote: "역할 비율의 산정 기준은 확인 필요",
      audience: "7개 직급 · 3개 구분교육",
      summary: "직급과 승진일을 기준으로 필수교육을 안내하고 교육이력을 API로 동기화하는 개인화 HRD 플랫폼을 구축했습니다.",
      goal: "7개 직급과 3개 구분교육에 따라 개인별 필수교육 수료현황을 실시간으로 확인하도록 했습니다. 직급 변경 시 이력을 초기화하고, 수강신청 시 필수교육을 안내하며, 교육정보는 API로 연동하도록 설계했습니다.",
      problem: [
        { title: "개인별 기준교육", description: "직급과 구분교육에 따라 서로 다른 필수교육을 보여줘야 했습니다." },
        { title: "승진 시 이력 처리", description: "직급이 변경되면 새 기준에 맞춰 교육이력을 다시 계산해야 했습니다." },
        { title: "수강신청 안내", description: "사용자가 신청하는 과정이 필수교육인지 즉시 알 수 있어야 했습니다." },
        { title: "교육이력 API", description: "고객사 시스템과 주고받을 데이터와 인터페이스를 합의해야 했습니다." }
      ],
      roleDetail: [
        "7개 직급·3개 구분교육 기준 정책 정의",
        "승진 시 이력 초기화와 수강신청 안내 설계",
        "직급별 필수교육 DB 및 고객사 API 인터페이스 협의",
        "통계 생성, 얼럿, 교육이력 송수신 검수"
      ],
      process: ["직급·교육 기준", "이력 처리 제약 분석", "개인화 정책 설계", "API·화면 검수", "데이터 신뢰성 확보"],
      deliverables: [
        { title: "직급별 필수교육 기준", description: "별도 기준정보와 회원의 최종 진급일을 연결했습니다." },
        { title: "수료현황 정책", description: "최종 진급일 이후 이력으로 개인별 통계 기준을 정의했습니다." },
        { title: "API 인터페이스", description: "고객사가 수신할 교육이력 데이터와 송출 조건을 협의했습니다." }
      ],
      outcomes: [
        { value: "7개", label: "직급 기준교육" },
        { value: "3개", label: "구분교육 개인화" },
        { value: "API", label: "교육이력 동기화" },
        { value: "실시간", label: "필수교육 확인" }
      ],
      result: "개인별 필수교육 안내와 승진자·중도입사자 대응이 가능해졌습니다. 고객사가 별도로 보관하던 교육이력을 신규 플랫폼에서 API로 수신할 정도로 데이터 흐름의 안정성을 확보했습니다.",
      media: [
        { kind: "restricted", label: "POLICY", title: "직급별 교육 기준", description: "7개 직급과 3개 구분교육의 개인화 정책", sourceSlide: "20", note: "고객사 기준정보는 공개하지 않음" },
        { kind: "restricted", label: "API", title: "교육이력 인터페이스", description: "교육이력 송수신 조건을 추상화한 구조", sourceSlide: "20", note: "실제 API 명세는 공개하지 않음" },
        { kind: "restricted", label: "ALERT", title: "수강신청 안내", description: "필수교육 여부를 신청 단계에서 안내하는 흐름", sourceSlide: "20", note: "실제 화면은 고객사 공개 범위 확인 후 추가" }
      ],
      visibility: { client: "review", screens: "restricted", note: "고객사명과 내부 화면·API는 공개 범위 확인 필요" },
      sourceSlides: "18–21"
    },
    {
      id: "collab-tool",
      index: "04",
      priority: "additional",
      featured: false,
      category: "service",
      type: "INTERNAL TOOL",
      title: "자체 협업툴 구축",
      subtitle: "업무요청·과제관리·일일보고 통합",
      owner: "스터디맥스 · 자체 프로젝트",
      period: "2018.11–2019.04",
      duration: "6개월",
      team: "PM 1명 · 기획 1명 · 디자인 1명 · 퍼블리싱 2명 · 개발 2명",
      role: ["PM 100%", "기획 100%", "모니터링 100%"],
      roleNote: "역할 비율의 산정 기준은 확인 필요",
      audience: "사내 업무 담당자",
      summary: "보드 이동 방식의 한계를 줄이고 업무 이력과 처리 시간을 관리할 수 있는 사내 협업툴을 기획·구축했습니다.",
      goal: "기존 Trello 방식에서 업무 이동 실수로 누락이 발생하고 담당자별 업무 이력을 관리하기 어려웠습니다. 사용자의 요구사항을 취합해 회사 업무 흐름에 맞는 자체 협업툴을 구축했습니다.",
      problem: [
        { title: "업무관리 구조", description: "담당자 지정, 단계관리, 일일업무보고를 하나의 흐름 안에서 연결해야 했습니다." },
        { title: "알림 방식", description: "빠른 확인이 필요한 업무를 기존 메신저와 연결할 방법이 필요했습니다." },
        { title: "조직 변경", description: "부서와 업무 단계가 바뀌어도 운영자가 직접 대응할 수 있어야 했습니다." }
      ],
      roleDetail: [
        "프로젝트 > 업무요청 > 과제관리 > 일일보고 단계 구조 설계",
        "하이웍스 API 기반 메신저 알림 적용",
        "조직·업무 단계 변경에 유연한 관리자 정책 기획",
        "대시보드, 검색·복사, 예정·실제 시간 관리 설계"
      ],
      process: ["업무 누락·이력 단절", "업무 구조와 알림 분석", "단계·권한·대시보드 설계", "개발 검수·통합 테스트", "업무 관리 표준화"],
      deliverables: [
        { title: "프로세스 기획", description: "업무요청부터 일일보고까지 단계를 세분화했습니다." },
        { title: "업무요청 화면", description: "담당자·상태·예정시간·진행시간을 관리하도록 설계했습니다." },
        { title: "알림 연동 기준", description: "메신저 API를 활용한 업무 알림 조건을 정리했습니다." }
      ],
      outcomes: [
        { value: "통합", label: "업무요청–일일보고 흐름" },
        { value: "대시보드", label: "담당 업무 모니터링" },
        { value: "API", label: "메신저 알림 연동" },
        { value: "감소", label: "주간보고 작성 리소스" }
      ],
      result: "업무요청부터 일일보고까지 흐름을 한 구조로 통합하고, 개인별 업무 처리시간과 담당 업무를 확인할 수 있게 했습니다. 주간보고 작성 리소스를 줄이고 메신저 알림으로 확인 속도를 높였습니다.",
      media: [
        { kind: "restricted", label: "PROCESS", title: "업무 단계 구조", description: "업무요청·과제관리·일일보고를 연결한 프로세스", sourceSlide: "24", note: "사내 운영 화면은 공개하지 않음" },
        { kind: "restricted", label: "DASHBOARD", title: "개인 업무 모니터링", description: "본인 요청 업무와 담당 업무를 확인하는 구조", sourceSlide: "24–25", note: "내부 데이터는 공개하지 않음" },
        { kind: "restricted", label: "ALERT", title: "메신저 알림 연동", description: "업무 상태 변화와 확인을 연결한 운영 기준", sourceSlide: "23–24", note: "내부 연동 상세는 공개하지 않음" }
      ],
      visibility: { client: "safe", screens: "restricted", note: "내부 업무 데이터와 실제 화면은 공개하지 않음" },
      sourceSlides: "22–25"
    },
    {
      id: "speakingdom",
      index: "05",
      priority: "additional",
      featured: false,
      category: "service",
      type: "NEW SERVICE BUILD",
      title: "스픽킹덤 신규 서비스",
      subtitle: "유·초등 영어교육 사이트 신규 구축",
      owner: "스터디맥스 · 자체 프로젝트",
      period: "2016.04–2016.12",
      duration: "9개월",
      team: "PM 1명 · 기획 1명 · 디자인 2명 · 퍼블리싱 2명 · 개발 2명",
      role: ["PM 100%", "기획 100%", "모니터링 100%"],
      roleNote: "역할 비율의 산정 기준은 확인 필요",
      audience: "유·초등 영어 학습자·학부모",
      summary: "신규 영어교육 서비스의 사용자·관리자 화면과 LMS를 기획하고 로그인·결제·배송·환불 흐름을 설계했습니다.",
      goal: "신규 유·초등 영어교육 사이트 런칭을 위해 사용자 화면과 LMS를 기획했습니다. 사용자의 편의를 위해 네이버 로그인과 네이버페이 결제 프로세스를 적용했습니다.",
      problem: [
        { title: "학습·상품 운영 연결", description: "교육 서비스와 상품 판매 운영을 하나의 사이트 흐름으로 설계해야 했습니다." },
        { title: "가입 장벽", description: "신규 사용자가 빠르게 가입하고 서비스를 시작할 수 있어야 했습니다." },
        { title: "결제·배송·환불", description: "사용자 화면과 관리자 운영 기능의 상태를 일관되게 연결해야 했습니다." },
        { title: "품질 검증", description: "사용자와 관리자의 주요 흐름을 전사 통합 테스트로 확인해야 했습니다." }
      ],
      roleDetail: [
        "메인·회원가입·결제·배송 사용자 화면 기획",
        "회원·결제·배송·환불 관리자 기능 설계",
        "네이버 로그인과 네이버페이 결제 프로세스 적용",
        "WBS·플로우차트·와이어프레임·테스트 시나리오 작성"
      ],
      process: ["신규 서비스 런칭", "가입·결제 장벽 분석", "사용자·관리자 정책 설계", "통합 테스트·오픈", "전환·운영 개선"],
      deliverables: [
        { title: "사용자 플로우", description: "회원가입, 결제, 배송까지 사용자의 주요 화면을 연결했습니다." },
        { title: "관리자 플로우", description: "회원·결제·배송·환불 운영 기능을 상태 기준으로 정리했습니다." },
        { title: "WBS·테스트 시나리오", description: "개발 일정과 통합 테스트 항목을 함께 관리했습니다." },
        { title: "와이어프레임", description: "사용자·관리자 화면의 정보와 상호작용을 상세화했습니다." }
      ],
      outcomes: [
        { value: "2배", label: "회원가입 전환율 증가" },
        { value: "Naver", label: "간편로그인 도입" },
        { value: "Npay", label: "간편결제 적용" },
        { value: "통합", label: "전사 테스트 수행" }
      ],
      result: "간편로그인 기능 도입 후 회원가입 전환율이 전월 대비 약 2배 증가했습니다. 결제 수단을 다양화하고 상품별 구분코드를 정립해 결제 접근성과 정산 관리 정확도를 개선했습니다.",
      media: [
        { kind: "restricted", label: "USER FLOW", title: "가입·결제·배송 흐름", description: "사용자 화면의 주요 이동과 상태를 정리한 구조", sourceSlide: "27–29", note: "실제 사용자 화면은 개인정보 포함 여부 확인 후 추가" },
        { kind: "restricted", label: "ADMIN", title: "주문·환불 관리", description: "관리자 회원·결제·배송·환불 기능 구조", sourceSlide: "28", note: "관리자 화면은 공개하지 않음" },
        { kind: "restricted", label: "QA", title: "테스트 시나리오", description: "전사 통합 테스트를 위한 검증 항목 구조", sourceSlide: "30", note: "원본 테스트 자료는 공개하지 않음" }
      ],
      visibility: { client: "safe", screens: "restricted", note: "실제 회원·관리자 화면은 공개하지 않음" },
      sourceSlides: "26–31"
    }
  ],

  vibeCoding: [
    { index: "01", title: "재고관리", url: "https://kd-shop-plamo.joynet6019.chatgpt.site/" },
    { index: "02", title: "레벨테스트", url: "https://dotore-level-test-prototype.joynet6019.chatgpt.site/" },
    { index: "03", title: "유튜브 영상", url: "https://www.youtube.com/@BlueDragon-e7c/shorts" }
  ]
};
