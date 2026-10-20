const bannerData = [
  {
    number: "01",
    key: "project",
    icon: "folder",
    title: "PROJECT",
    subtitle: "주요 프로젝트",
    description: "KB금융그룹·SGI·도토리·협업툴 구축 사례를 확인할 수 있습니다.",
    link: "projects.html",
    linkLabel: "VIEW PROJECT",
  },
  {
    number: "02",
    key: "career",
    icon: "timeline",
    title: "CAREER",
    subtitle: "경력 및 업무",
    description: "2009년부터 이어온 웹 서비스·HRD/LMS 기획 경력을 정리했습니다.",
    link: "career.html",
    linkLabel: "VIEW CAREER",
  },
  {
    number: "03",
    key: "skills",
    icon: "chart",
    title: "SKILLS",
    subtitle: "핵심 역량",
    description: "와이어프레임·IA·API·PM·AI 활용 역량과 도구를 살펴보세요.",
    link: "skills.html",
    linkLabel: "VIEW SKILLS",
  },
];

const icons = {
  folder: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h6l1.8 2h9.2v9.8a1.7 1.7 0 0 1-1.7 1.7H5.2a1.7 1.7 0 0 1-1.7-1.7V6.5Z"/><path d="M3.5 9h17"/></svg>',
  timeline: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v16M18 4v16M6 7h12M6 17h12"/><circle cx="6" cy="7" r="1.8"/><circle cx="18" cy="17" r="1.8"/></svg>',
  chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5V4.5M4 19.5h16"/><path d="m7 15 3.3-3.6 2.7 2 4.2-6"/><path d="M16 7.4h1.8v1.8"/></svg>',
  inventory: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5v-9Z"/><path d="m4 7.5 8 3.5 8-3.5M12 11v9M8 5.7v3.7M16 5.7v3.7"/></svg>',
  level: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="m8.2 12.2 2.4 2.4 5.3-5.3"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="6.5" width="17" height="11" rx="3"/><path d="m10 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none"/></svg>',
};

const grid = document.querySelector("#banner-grid");

function enablePointerArrow(card) {
  const pointerArrow = document.createElement("span");
  pointerArrow.className = "pointer-arrow";
  pointerArrow.setAttribute("aria-hidden", "true");
  pointerArrow.innerHTML = '<svg viewBox="0 0 24 24" focusable="false"><path d="M4.8 3.5 18.7 12l-5.5 1.4-2.7 5.7L4.8 3.5Z" /></svg>';
  card.appendChild(pointerArrow);

  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    card.classList.add("pointer-active");
  });

  card.addEventListener("pointerleave", () => {
    card.classList.remove("pointer-active");
  });
}

if (grid) {
  bannerData.forEach((item, index) => {
    const card = document.createElement("a");
    card.className = `banner-card ${item.key}`;
    card.href = item.link;
    card.style.transitionDelay = `${index * 120}ms`;
    card.setAttribute("aria-label", `${item.title} 상세 페이지로 이동`);
    card.innerHTML = `
      <div class="card-top">
        <span class="card-index">${item.number}</span>
        <span class="card-icon">${icons[item.icon]}</span>
      </div>
      <div class="card-body">
        <h2 class="card-title">${item.title}</h2>
        <p class="card-subtitle">${item.subtitle}</p>
        <p class="card-description">${item.description}</p>
      </div>
      <div class="card-bottom">
        <span class="card-link">${item.linkLabel}<span class="arrow" aria-hidden="true">→</span></span>
      </div>
    `;
    grid.appendChild(card);
    enablePointerArrow(card);
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add("is-visible")));
  });
}

const vibeBannerData = [
  {
    key: "vibe-inventory",
    icon: "inventory",
    number: "01",
    title: "재고관리",
    description: "상품과 재고 흐름을 빠르게 확인하고 관리하는 프로토타입",
    link: "https://kd-shop-plamo.joynet6019.chatgpt.site/",
  },
  {
    key: "vibe-level",
    icon: "level",
    number: "02",
    title: "레벨테스트",
    description: "학습자의 현재 수준을 진단하고 다음 학습으로 연결하는 서비스",
    link: "https://dotore-level-test-prototype.joynet6019.chatgpt.site/",
  },
  {
    key: "vibe-youtube",
    icon: "youtube",
    number: "03",
    title: "유튜브 영상",
    description: "서비스 기획과 제작 과정에서 만든 영상 콘텐츠 채널",
    link: "https://www.youtube.com/@BlueDragon-e7c/shorts",
  },
];

const vibeGrid = document.querySelector("#vibe-grid");

if (vibeGrid) {
  vibeBannerData.forEach((item, index) => {
    const card = document.createElement("a");
    card.className = `banner-card vibe-card ${item.key}`;
    card.href = item.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.style.transitionDelay = `${index * 120}ms`;
    card.setAttribute("aria-label", `${item.title} 외부 페이지 열기`);
    card.innerHTML = `
      <div class="card-top">
        <span class="card-index">${item.number}</span>
        <span class="card-icon">${icons[item.icon]}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-description">${item.description}</p>
      </div>
      <div class="card-bottom">
        <span class="card-link">OPEN LINK<span class="arrow" aria-hidden="true">↗</span></span>
      </div>
    `;
    vibeGrid.appendChild(card);
    enablePointerArrow(card);
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add("is-visible")));
  });
}

const projectModal = document.querySelector("#project-modal");
const projectCards = [...document.querySelectorAll(".case-card[role='button']")];
const projectPopupData = [
  {
    summary: "지주사 중심의 14개 도메인 통합 관리 구조를 만들고, 공통 HRD 기능과 계열사별 운영 정책을 함께 제공했습니다.",
    images: [
      ["assets/projects/2/slide-16-03.png", "지주사 메인 관리자"],
      ["assets/projects/2/slide-16-04.png", "공통 교육 관리자"],
      ["assets/projects/2/slide-16-05.png", "통계정보 관리자"],
      ["assets/projects/2/slide-16-06.png", "통합 운영 화면"],
    ],
    outcomes: [
      "지주사 메인 페이지 관리자 화면 구축",
      "전사 공통 교육 관리자 화면 구축",
      "전사 통계정보 관리자 화면 구축",
      "14개 계열사 · 6만+ 이용자 · 구축기간 25% 단축",
    ],
  },
  {
    summary: "외국 개발사와 협업해 도토리 한국어 교육 사이트의 신규 구축 기획을 완성했습니다.",
    images: [
      ["assets/projects/1/slide-11-06.png", "사용자 기획서"],
      ["assets/projects/1/slide-11-07.png", "관리자 기획서"],
      ["assets/projects/1/slide-11-08.png", "구축 결과물"],
    ],
    outcomes: [
      "WBS 기반 프로젝트 진행 구조 설계",
      "외국 개발사 전달용 사용자 Figma 기획서 작성",
      "외국 개발사 전달용 관리자 Figma 기획서 작성",
      "4개월 내 신규 사이트 구축 기획 및 개발 협업 완료",
    ],
  },
  {
    summary: "개인별 직급 기준교육을 안내하고 교육 이력을 연동하는 맞춤형 HRD 서비스를 구축했습니다.",
    images: [
      ["assets/projects/3/slide-20-05.png", "직급 기준교육 설정"],
      ["assets/projects/3/slide-20-06.png", "교육 신청 안내"],
      ["assets/projects/3/slide-20-07.png", "교육이력 API"],
      ["assets/projects/3/slide-20-08.png", "개인별 교육 화면"],
    ],
    outcomes: [
      "개인별 직급 기준교육 세팅 프로세스 설계",
      "교육이력 API 인터페이스 설계",
      "수강 신청 시 개인별 안내 프로세스 구축",
      "7개 직급 · 3개 교육 유형에 대응하는 교육 운영 구조 마련",
    ],
  },
  {
    summary: "업무 요청부터 일일보고까지의 흐름을 하나로 연결해 업무 가시성과 반복 업무 효율을 높였습니다.",
    images: [
      ["assets/projects/4/slide-24-06.png", "프로세스 기획"],
      ["assets/projects/4/slide-24-07.png", "업무요청 화면"],
      ["assets/projects/4/slide-25-05.png", "성과 이력"],
      ["assets/projects/4/slide-25-06.png", "업무 이력 화면"],
      ["assets/projects/4/slide-25-10.png", "결과 화면"],
    ],
    outcomes: [
      "본인 요청 업무와 담당 업무를 대시보드로 모니터링",
      "검색으로 유사 업무를 확인하고 복사해 신규 업무 생성",
      "예정시간·진행시간 등록으로 개인별 업무 처리시간 관리",
      "일일업무 기반 주간보고 작성 리소스 최소화",
      "메신저 알림으로 업무 진행 효율성 향상",
    ],
  },
  {
    summary: "신규 유·초등 영어교육 사이트와 LMS를 사용자·관리자 흐름까지 연결해 런칭 가능한 서비스 구조로 설계했습니다.",
    images: [
      ["assets/projects/5/slide-27-13.png", "사용자 모바일 화면"],
      ["assets/projects/5/slide-27-14.png", "회원가입 화면"],
      ["assets/projects/5/slide-27-15.png", "결제 화면"],
      ["assets/projects/5/slide-27-16.png", "배송 화면"],
      ["assets/projects/5/slide-28-10.png", "회원관리"],
      ["assets/projects/5/slide-28-11.png", "결제관리"],
      ["assets/projects/5/slide-28-12.png", "배송관리"],
      ["assets/projects/5/slide-28-13.png", "환불관리"],
      ["assets/projects/5/slide-29-10.png", "주문 프로세스"],
      ["assets/projects/5/slide-29-11.png", "결제 프로세스"],
      ["assets/projects/5/slide-29-12.png", "배송 프로세스"],
      ["assets/projects/5/slide-29-13.png", "환불 프로세스"],
      ["assets/projects/5/slide-30-10.png", "플로우 차트"],
      ["assets/projects/5/slide-30-11.png", "WBS"],
      ["assets/projects/5/slide-30-12.png", "테스트 시나리오"],
      ["assets/projects/5/slide-30-16.png", "와이어프레임"],
    ],
    outcomes: [
      "사용자 영역의 메인·회원가입·결제·배송 프로세스 설계",
      "관리자 영역의 회원·결제·배송·환불 관리 기능 설계",
      "주문·결제·배송·환불 프로세스 플로우차트 작성",
      "WBS·테스트 시나리오·와이어프레임으로 구축 기준 정리",
      "네이버 로그인과 네이버페이 결제 프로세스 적용",
    ],
  },
];

if (projectModal && projectCards.length) {
  const modalKicker = projectModal.querySelector("#project-modal-kicker");
  const modalTitle = projectModal.querySelector("#project-modal-title");
  const modalDescription = projectModal.querySelector("#project-modal-description");
  const modalResults = projectModal.querySelector("#project-modal-results");
  const modalGallery = projectModal.querySelector("#project-modal-gallery");
  const modalMetrics = projectModal.querySelector("#project-modal-metrics");
  const modalCloseButtons = projectModal.querySelectorAll("[data-modal-close]");
  const closeButton = projectModal.querySelector(".project-modal-close");
  let lastTrigger = null;

  const openProjectModal = (card) => {
    lastTrigger = card;
    const project = projectPopupData[projectCards.indexOf(card)];
    modalKicker.textContent = card.querySelector(".case-index")?.textContent ?? "SELECTED PROJECT";
    modalTitle.innerHTML = card.querySelector("h2")?.innerHTML ?? "";
    modalDescription.textContent = project?.summary ?? card.querySelector("p")?.textContent ?? "";
    modalResults.innerHTML = (project?.outcomes ?? []).map((outcome) => `<li>${outcome}</li>`).join("");
    modalGallery.innerHTML = (project?.images ?? []).map(([src, caption]) => `<figure><img src="${src}" alt="${caption}" /><figcaption>${caption}</figcaption></figure>`).join("");
    modalMetrics.innerHTML = card.querySelector(".case-metrics")?.innerHTML ?? "";
    projectModal.hidden = false;
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => closeButton?.focus());
  };

  const closeProjectModal = () => {
    projectModal.hidden = true;
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    lastTrigger?.focus();
  };

  projectCards.forEach((card) => {
    card.addEventListener("click", () => openProjectModal(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectModal(card);
      }
    });
  });

  modalCloseButtons.forEach((button) => button.addEventListener("click", closeProjectModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !projectModal.hidden) closeProjectModal();
  });
}
