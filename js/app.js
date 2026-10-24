const portfolio = window.PORTFOLIO;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const state = {
  filter: "all",
  lastFocus: null,
  modalOpen: false,
  lightboxOpen: false
};

const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
}[character]));

const tagList = (items = [], className = "") => items.map((item) => `<span class="${className}">${escapeHtml(item)}</span>`).join("");
const listItems = (items = []) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

function renderProfile() {
  const target = $("#profile-tags");
  target.innerHTML = tagList(portfolio.profile.tags, "hero-tag");
}

function renderAchievements() {
  const target = $("#achievement-list");
  target.innerHTML = portfolio.achievements.map((item, index) => `
    <article class="achievement reveal reveal-delay-${Math.min(index, 4)}">
      <strong>${escapeHtml(item.value)}</strong>
      <h3>${escapeHtml(item.label)}</h3>
      <p>${escapeHtml(item.detail)}</p>
    </article>
  `).join("");
}

function renderCapabilities() {
  const target = $("#capability-list");
  target.innerHTML = portfolio.capabilities.map((item, index) => `
    <article class="capability reveal">
      <span class="capability-number">${String(index + 1).padStart(2, "0")}</span>
      <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div>
    </article>
  `).join("");
}

function renderTools() {
  const target = $("#tool-list");
  target.innerHTML = portfolio.tools.map((group) => `
    <div class="tool-group">
      <span>${escapeHtml(group.label)}</span>
      <div>${tagList(group.items, "tool-chip")}</div>
    </div>
  `).join("");
}

function renderCareers() {
  const target = $("#career-list");
  target.innerHTML = portfolio.careers.map((career, index) => `
    <details class="career-item ${career.status === "current" ? "is-current" : ""} reveal" ${index === 0 ? "open" : ""}>
      <summary class="career-summary">
        <span class="career-period">${escapeHtml(career.period)}</span>
        <span class="career-marker" aria-hidden="true"></span>
        <span class="career-main">
          <span class="career-topline"><span class="career-company">${escapeHtml(career.company)}</span>${career.status === "current" ? '<span class="current-badge">CURRENT</span>' : ""}</span>
          <strong>${escapeHtml(career.position)}</strong>
          <span class="career-focus">${escapeHtml(career.focus)}</span>
          <span class="career-highlights">${tagList(career.highlights, "career-highlight")}</span>
        </span>
        <span class="career-expand" aria-hidden="true">+</span>
      </summary>
      <div class="career-detail">
        <p>${escapeHtml(career.detail)}</p>
        ${career.note ? `<p class="review-inline"><span>확인 필요</span>${escapeHtml(career.note)}</p>` : ""}
      </div>
    </details>
  `).join("");
}

const filterDefinitions = [
  { id: "all", label: "전체" },
  { id: "primary", label: "주요 프로젝트" },
  { id: "platform", label: "HRD · 플랫폼" },
  { id: "service", label: "서비스 구축" }
];

function getFilteredProjects() {
  if (state.filter === "all") return portfolio.projects;
  if (state.filter === "primary") return portfolio.projects.filter((project) => project.priority === "primary");
  return portfolio.projects.filter((project) => project.category === state.filter);
}

function renderFilters() {
  const target = $("#project-filters");
  target.innerHTML = filterDefinitions.map((filter) => {
    const count = filter.id === "all"
      ? portfolio.projects.length
      : filter.id === "primary"
        ? portfolio.projects.filter((project) => project.priority === "primary").length
        : portfolio.projects.filter((project) => project.category === filter.id).length;
    return `<button class="filter-button ${state.filter === filter.id ? "is-active" : ""}" type="button" data-filter="${escapeHtml(filter.id)}" aria-pressed="${state.filter === filter.id}">${escapeHtml(filter.label)} <span>${String(count).padStart(2, "0")}</span></button>`;
  }).join("");
}

function projectReviewBadges(project) {
  const badges = [];
  if (project.visibility?.client === "review") badges.push("공개 범위 확인 필요");
  if (project.periodStatus) badges.push(project.periodStatus);
  if (project.priority === "additional" && project.type === "PROJECT OVERVIEW") badges.push("상세 자료 확인 필요");
  return badges.map((badge) => `<span class="review-badge">${escapeHtml(badge)}</span>`).join("");
}

function renderProjectCard(project) {
  const visibleOutcomes = project.outcomes.slice(0, project.featured ? 3 : 2);
  return `
    <article class="project-card ${project.featured ? "is-featured" : ""} ${project.priority === "primary" ? "is-primary" : ""} reveal is-visible" data-project-id="${escapeHtml(project.id)}" tabindex="0" role="button" aria-label="${escapeHtml(project.title)} 상세 내용 열기">
      <div class="project-card-header"><span class="project-index">PROJECT ${escapeHtml(project.index)}</span><span class="project-type">${escapeHtml(project.type)}</span></div>
      <div class="project-card-badges">${projectReviewBadges(project)}</div>
      <h3>${escapeHtml(project.title)}</h3>
      <p class="project-subtitle">${escapeHtml(project.subtitle)}</p>
      <p class="project-owner">${escapeHtml(project.owner)} · ${escapeHtml(project.period)}</p>
      <p class="project-summary">${escapeHtml(project.summary)}</p>
      <div class="project-role-row">${tagList(project.role, "role-chip")}</div>
      <div class="project-results">${visibleOutcomes.map((outcome) => `<div><strong>${escapeHtml(outcome.value)}</strong><span>${escapeHtml(outcome.label)}</span></div>`).join("")}</div>
      <span class="project-open" aria-hidden="true">자세히 보기 <span>↗</span></span>
    </article>
  `;
}

function renderProjects() {
  const target = $("#project-list");
  const projects = getFilteredProjects();
  target.innerHTML = projects.length
    ? projects.map(renderProjectCard).join("")
    : '<p class="empty-state">해당 유형의 프로젝트가 없습니다.</p>';
}

function renderVibeCoding() {
  const target = $("#vibe-coding-list");
  target.innerHTML = portfolio.vibeCoding.map((item) => `
    <a class="vibe-banner reveal" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(item.title)} 새 탭에서 열기">
      <span class="vibe-banner-top"><span class="vibe-banner-index">${escapeHtml(item.index)}</span><span class="vibe-banner-label">VIBE CODING</span></span>
      <span class="vibe-banner-title">${escapeHtml(item.title)}</span>
      <span class="vibe-banner-link">사이트 열기 <span aria-hidden="true">↗</span></span>
    </a>
  `).join("");
}

function renderProblemCards(items = []) {
  return items.map((item, index) => `
    <article class="problem-card"><span>0${index + 1}</span><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.description)}</p></article>
  `).join("");
}

function renderDeliverables(items = []) {
  return items.map((item) => `<article class="deliverable"><span class="deliverable-mark" aria-hidden="true">↗</span><div><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.description)}</p></div></article>`).join("");
}

function renderMediaCard(media, index) {
  if (media.kind === "image" && media.src) {
    return `<button class="media-card media-image" type="button" data-lightbox-open data-image-src="${escapeHtml(media.src)}" data-image-title="${escapeHtml(media.title)}" data-image-description="${escapeHtml(media.description)}"><img src="${escapeHtml(media.src)}" alt="${escapeHtml(media.description)}" loading="lazy" /><span class="media-label">${escapeHtml(media.label)}</span><strong>${escapeHtml(media.title)}</strong><small>클릭하여 확대</small></button>`;
  }
  return `
    <article class="media-card media-restricted">
      <div class="media-abstract abstract-${(index % 3) + 1}" aria-hidden="true"><span></span><span></span><span></span></div>
      <span class="media-label">${escapeHtml(media.label)} · PPT p.${escapeHtml(media.sourceSlide)}</span>
      <strong>${escapeHtml(media.title)}</strong>
      <p>${escapeHtml(media.description)}</p>
      <small><span class="lock-mark" aria-hidden="true">▣</span>${escapeHtml(media.note || "공개 범위 확인 후 이미지 추가")}</small>
    </article>
  `;
}

function renderProjectDetail(project) {
  const reviewBadges = projectReviewBadges(project);
  const roleBadges = tagList(project.role, "role-chip role-chip-dark");
  return `
    <div class="detail-heading">
      <div><p class="detail-kicker">PROJECT ${escapeHtml(project.index)} · ${escapeHtml(project.type)}</p><div class="detail-badges">${reviewBadges}</div></div>
      <h2 id="modal-title">${escapeHtml(project.title)}</h2>
      <p class="detail-subtitle">${escapeHtml(project.subtitle)} · ${escapeHtml(project.owner)}</p>
      <p class="detail-summary">${escapeHtml(project.summary)}</p>
    </div>

    <dl class="detail-meta">
      <div><dt>기간</dt><dd>${escapeHtml(project.period)}${project.periodStatus ? `<span class="meta-review">${escapeHtml(project.periodStatus)}</span>` : ""}</dd></div>
      <div><dt>투입인력</dt><dd>${escapeHtml(project.team)}</dd></div>
      <div><dt>담당 역할</dt><dd><span class="role-chips">${roleBadges}</span>${project.roleNote ? `<small class="meta-review">${escapeHtml(project.roleNote)}</small>` : ""}</dd></div>
      <div><dt>서비스 대상</dt><dd>${escapeHtml(project.audience)}</dd></div>
    </dl>

    <section class="detail-section"><div class="detail-section-number">01</div><div><h3>배경과 목표</h3><p>${escapeHtml(project.goal)}</p></div></section>
    <section class="detail-section detail-section-block"><div class="detail-section-number">02</div><div><h3>해결해야 했던 문제</h3><div class="problem-grid">${renderProblemCards(project.problem)}</div></div></section>
    <section class="detail-section detail-section-block"><div class="detail-section-number">03</div><div><h3>나의 판단과 역할</h3><ul class="detail-list">${listItems(project.roleDetail)}</ul></div></section>
    <section class="detail-section detail-section-block"><div class="detail-section-number">04</div><div><h3>설계 및 협업 과정</h3><div class="detail-flow">${project.process.map((step, index) => `<div class="${index === project.process.length - 1 ? "is-result" : ""}"><span>0${index + 1}</span><strong>${escapeHtml(step)}</strong></div>`).join("")}</div></div></section>
    <section class="detail-section detail-section-block"><div class="detail-section-number">05</div><div><h3>기획 산출물</h3><div class="deliverable-grid">${renderDeliverables(project.deliverables)}</div></div></section>
    <section class="detail-section detail-section-block"><div class="detail-section-number">06</div><div><h3>대표 자료</h3><p class="detail-muted">내부 화면·API·개인정보가 포함된 원본은 공개하지 않고, 구조를 설명하는 카드로 대체했습니다.</p><div class="media-grid">${project.media.map(renderMediaCard).join("")}</div></div></section>
    <section class="detail-outcome"><div class="detail-section-number">07</div><div><h3>결과와 성과</h3><div class="outcome-list">${project.outcomes.map((outcome) => `<div><strong>${escapeHtml(outcome.value)}</strong><span>${escapeHtml(outcome.label)}</span></div>`).join("")}</div><p>${escapeHtml(project.result)}</p></div></section>
  `;
}

function openProject(projectId, trigger) {
  const project = portfolio.projects.find((item) => item.id === projectId);
  if (!project) return;
  const modal = $("[data-project-modal]");
  $("#modal-content").innerHTML = renderProjectDetail(project);
  state.lastFocus = trigger || document.activeElement;
  state.modalOpen = true;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-modal-open");
  $(".modal-close", modal).focus();
}

function closeProject() {
  const modal = $("[data-project-modal]");
  state.modalOpen = false;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-modal-open");
  if (state.lastFocus && typeof state.lastFocus.focus === "function") state.lastFocus.focus();
}

function openLightbox(button) {
  const lightbox = $("[data-lightbox]");
  const image = $("[data-lightbox-image]");
  image.src = button.dataset.imageSrc;
  image.alt = button.dataset.imageDescription || button.dataset.imageTitle || "프로젝트 이미지";
  $("[data-lightbox-title]").textContent = button.dataset.imageTitle || "";
  $("[data-lightbox-description]").textContent = button.dataset.imageDescription || "";
  state.lightboxOpen = true;
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-modal-open");
  $("[data-lightbox-close]", lightbox).focus();
}

function closeLightbox() {
  const lightbox = $("[data-lightbox]");
  state.lightboxOpen = false;
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  if (!state.modalOpen) document.body.classList.remove("is-modal-open");
}

function showToast(message) {
  const toast = $("[data-toast]");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function setupInteractions() {
  document.addEventListener("click", (event) => {
    const projectTrigger = event.target.closest("[data-project-id]");
    if (projectTrigger) openProject(projectTrigger.dataset.projectId, projectTrigger);

    const filter = event.target.closest("[data-filter]");
    if (filter) {
      state.filter = filter.dataset.filter;
      renderFilters();
      renderProjects();
      $("#project-list").focus?.();
    }

    if (event.target.closest("[data-modal-close]")) closeProject();

    const mediaTrigger = event.target.closest("[data-lightbox-open]");
    if (mediaTrigger) openLightbox(mediaTrigger);
    if (event.target.closest("[data-lightbox-close]")) closeLightbox();

    const printTrigger = event.target.closest("[data-print]");
    if (printTrigger) window.print();

    const emailTrigger = event.target.closest("[data-copy-email]");
    if (emailTrigger) {
      const copyResult = navigator.clipboard?.writeText(portfolio.meta.email);
      if (copyResult) copyResult.then(() => showToast("이메일 주소를 복사했습니다.")).catch(() => showToast(portfolio.meta.email));
      else showToast(portfolio.meta.email);
    }

    const navLink = event.target.closest(".mobile-menu a");
    if (navLink) closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    const projectCard = event.target.closest(".project-card[data-project-id]");
    if (projectCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openProject(projectCard.dataset.projectId, projectCard);
      return;
    }

    if (event.key !== "Escape") return;
    if (state.lightboxOpen) closeLightbox();
    else if (state.modalOpen) closeProject();
  });

  const menuToggle = $(".menu-toggle");
  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    $("#mobile-menu").classList.toggle("is-open", !isOpen);
  });

  const header = $("[data-header]");
  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 8), { passive: true });
}

function closeMobileMenu() {
  const toggle = $(".menu-toggle");
  toggle?.setAttribute("aria-expanded", "false");
  $("#mobile-menu")?.classList.remove("is-open");
}

function setupReveal() {
  const elements = $$(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  elements.forEach((element) => observer.observe(element));
}

function setupActiveNav() {
  const header = $("[data-header]");
  const sections = $$("main section[id]").filter((section) => section.id !== "top" && section.id !== "impact" && section.id !== "review");
  const navLinks = $$(".desktop-nav a");
  const update = () => {
    const marker = window.scrollY + header.offsetHeight + 100;
    const current = sections.reduce((selected, section) => section.offsetTop <= marker ? section : selected, sections[0]);
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${current?.id}`));
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function init() {
  $("[data-email-link]").href = `mailto:${portfolio.meta.email}`;
  $("[data-copy-email]").innerHTML = `${escapeHtml(portfolio.meta.email)} <span>주소 복사</span>`;
  renderProfile();
  renderAchievements();
  renderCapabilities();
  renderTools();
  renderCareers();
  renderFilters();
  renderProjects();
  renderVibeCoding();
  setupInteractions();
  setupReveal();
  setupActiveNav();
}

init();
