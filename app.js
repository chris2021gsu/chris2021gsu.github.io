// Renders the pages from SITE (data.js). You normally don't need to edit this.
const $ = (id) => document.getElementById(id);
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const slug = (s) => s.toLowerCase().replace(/\s+/g, "-");
const linkList = (links = {}) =>
  Object.entries(links)
    .filter(([, url]) => url)
    .map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`)
    .join("");

// ---- Theme toggle (remembered per visitor) -----------------------------
(function theme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.dataset.theme = saved;
  } catch {}
  $("themeToggle").addEventListener("click", () => {
    const dark =
      document.documentElement.dataset.theme === "dark" ||
      (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  });
})();

// ---- Shared -----------------------------------------------------------
$("brand").textContent = SITE.name;
$("footer").innerHTML = `© ${new Date().getFullYear()} ${esc(SITE.name)} · Built with plain HTML, hosted free on GitHub Pages`;

if (document.body.dataset.page === "profile") renderProfile();
else renderResearch();

// ---- Profile page -----------------------------------------------------
function renderProfile() {
  document.title = `${SITE.name} — ${SITE.role}`;
  $("name").textContent = SITE.name;
  $("role").textContent = SITE.role + (SITE.location ? ` · ${SITE.location}` : "");
  $("tagline").textContent = SITE.tagline;

  const initials = SITE.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  $("avatar").innerHTML = SITE.avatar ? `<img src="${esc(SITE.avatar)}" alt="${esc(SITE.name)}">` : initials;

  const labels = { github: "GitHub", linkedin: "LinkedIn", scholar: "Google Scholar", huggingface: "Hugging Face", kaggle: "Kaggle", x: "X" };
  let links = SITE.email ? `<a class="btn primary" href="mailto:${esc(SITE.email)}">Contact me</a>` : "";
  if (SITE.resume) links += `<a class="btn" href="${esc(SITE.resume)}" target="_blank">Résumé</a>`;
  for (const [k, url] of Object.entries(SITE.links)) {
    if (url) links += `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">${labels[k] || k}</a>`;
  }
  $("links").innerHTML = links;

  $("stats").innerHTML = SITE.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
  $("about").innerHTML = SITE.about.map((p) => `<p>${esc(p)}</p>`).join("");

  $("skills").innerHTML = Object.entries(SITE.skills)
    .map(([group, items]) => `<div class="skill-group"><h3>${esc(group)}</h3><div class="chips">${items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`)
    .join("");

  $("experience").innerHTML = SITE.experience
    .map((e) => `<div class="tl-item">
      <div class="tl-head"><h3>${esc(e.title)} <span class="tl-org">· ${esc(e.org)}</span></h3><span class="tl-period">${esc(e.period)}</span></div>
      <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>`)
    .join("");

  $("education").innerHTML = SITE.education
    .map((e) => `<div class="tl-item">
      <div class="tl-head"><h3>${esc(e.degree)}</h3><span class="tl-period">${esc(e.period)}</span></div>
      <div class="tl-org">${esc(e.school)}</div>${e.note ? `<p class="muted small">${esc(e.note)}</p>` : ""}</div>`)
    .join("");

  $("achievements").innerHTML = SITE.achievements
    .map((a) => {
      const tag = a.link ? "a" : "div";
      const href = a.link ? ` href="${esc(a.link)}" target="_blank" rel="noopener"` : "";
      return `<${tag} class="card"${href}><span class="year">${esc(a.year)}</span><h3>${esc(a.title)}</h3><p>${esc(a.detail)}</p></${tag}>`;
    })
    .join("");

  loadRepos();
}

async function loadRepos() {
  const user = SITE.github;
  if (!user) {
    $("allRepos").hidden = true;
    $("repos").innerHTML = `<p class="muted">Repositories will appear here once a GitHub username is set in data.js.</p>`;
    return;
  }
  $("allRepos").href = `https://github.com/${user}?tab=repositories`;
  const cacheKey = `repos:${user}`;
  let repos;
  try {
    const cached = JSON.parse(sessionStorage.getItem(cacheKey) || "null");
    if (cached) repos = cached;
  } catch {}
  if (!repos) {
    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=100&sort=updated`);
      if (!res.ok) throw new Error(res.status);
      repos = (await res.json()).filter((r) => !r.fork);
      try { sessionStorage.setItem(cacheKey, JSON.stringify(repos)); } catch {}
    } catch {
      $("repos").innerHTML = `<p class="muted">Couldn't load repositories right now. <a href="https://github.com/${esc(user)}" target="_blank" rel="noopener">See them on GitHub →</a></p>`;
      return;
    }
  }
  const pinned = SITE.pinnedRepos || [];
  repos.sort((a, b) => {
    const pa = pinned.indexOf(a.name), pb = pinned.indexOf(b.name);
    if (pa !== -1 || pb !== -1) return (pa === -1 ? 999 : pa) - (pb === -1 ? 999 : pb);
    return b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at);
  });
  $("repos").innerHTML = repos.slice(0, 9)
    .map((r) => `<a class="card" href="${esc(r.html_url)}" target="_blank" rel="noopener">
      <h3>${esc(r.name)}</h3><p>${esc(r.description || "No description")}</p>
      <div class="meta">${r.language ? `<span>● ${esc(r.language)}</span>` : ""}<span>★ ${r.stargazers_count}</span><span>Updated ${new Date(r.pushed_at).toLocaleDateString(undefined, { month: "short", year: "numeric" })}</span></div></a>`)
    .join("") || `<p class="muted">No public repositories yet.</p>`;
}

// ---- Research page ----------------------------------------------------
function renderResearch() {
  document.title = `Research — ${SITE.name}`;
  $("researchIntro").textContent = SITE.researchIntro;
  $("interests").innerHTML = SITE.researchInterests.map((i) => `<span class="chip">${esc(i)}</span>`).join("");

  // Papers with status filter
  const statuses = ["All", ...new Set(SITE.papers.map((p) => p.status))];
  let paperFilter = "All";
  const drawPapers = () => {
    $("paperFilters").innerHTML = statuses
      .map((s) => `<button class="filter ${s === paperFilter ? "on" : ""}" data-s="${esc(s)}">${esc(s)}</button>`).join("");
    const list = SITE.papers.filter((p) => paperFilter === "All" || p.status === paperFilter);
    $("papers").innerHTML = list
      .map((p) => `<div class="row"><span class="year">${esc(p.year)}${p.venue ? " · " + esc(p.venue) : ""}</span>
        <h3>${esc(p.title)}<span class="badge b-${slug(p.status)}">${esc(p.status)}</span></h3>
        <div class="muted small">${esc(p.authors)}</div><p>${esc(p.abstract)}</p>
        <div class="row-links">${linkList(p.links)}</div></div>`).join("");
  };
  $("paperFilters").addEventListener("click", (e) => {
    if (e.target.dataset.s) { paperFilter = e.target.dataset.s; drawPapers(); }
  });
  drawPapers();

  $("libraries").innerHTML = SITE.libraries
    .map((l) => `<div class="card"><h3>${esc(l.name)}</h3><p>${esc(l.description)}</p>
      ${l.install ? `<div class="install">${esc(l.install)}</div>` : ""}
      <div class="chips">${(l.tags || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      <div class="row-links">${linkList(l.links)}</div></div>`).join("");

  renderRadar();

  // Reading log with search
  const drawReading = (q = "") => {
    q = q.toLowerCase();
    const list = SITE.reading.filter((r) => [r.title, r.authors, r.takeaway].join(" ").toLowerCase().includes(q));
    $("reading").innerHTML = list
      .map((r) => `<div class="row"><span class="year">${esc(r.year)}</span>
        <h3>${r.link ? `<a href="${esc(r.link)}" target="_blank" rel="noopener">${esc(r.title)}</a>` : esc(r.title)}</h3>
        <div class="muted small">${esc(r.authors)}</div><p>${esc(r.takeaway)}</p></div>`).join("")
      || `<p class="muted">No matches.</p>`;
  };
  $("readingSearch").addEventListener("input", (e) => drawReading(e.target.value));
  drawReading();
}

function renderRadar() {
  const rings = ["Adopt", "Trial", "Assess", "Watch"];
  const color = (r) => `var(--${r.toLowerCase()})`;
  let active = "All";

  // Rings (innermost = Adopt)
  let html = rings
    .map((r, i) => {
      const size = ((i + 1) / rings.length) * 100;
      return `<div class="ring" style="width:${size}%;height:${size}%"></div>
        <span class="ring-label" style="top:${50 - size / 2 + 1.5}%">${r}</span>`;
    }).join("");

  // Place blips: radius within their ring band, angle spread by index
  SITE.radar.forEach((t, idx) => {
    const ri = Math.max(0, rings.indexOf(t.ring));
    const inner = (ri / rings.length) * 50, outer = ((ri + 1) / rings.length) * 50;
    const radius = inner + (outer - inner) * (0.35 + 0.4 * ((idx * 37) % 10) / 10);
    const angle = (idx * 137.5 + 20) * (Math.PI / 180);
    const x = 50 + radius * Math.cos(angle), y = 50 + radius * Math.sin(angle);
    html += `<span class="blip" data-i="${idx}" title="${esc(t.name)}" style="left:${x}%;top:${y}%;background:${color(t.ring)}"></span>`;
  });
  $("radar").innerHTML = html;

  const draw = () => {
    $("radarLegend").innerHTML = ["All", ...rings]
      .map((r) => `<button class="filter ${r === active ? "on" : ""}" data-r="${r}">${r !== "All" ? `<span class="dot" style="background:${color(r)}"></span>` : ""}${r}</button>`).join("");
    const sorted = SITE.radar
      .map((t, i) => ({ ...t, i }))
      .filter((t) => active === "All" || t.ring === active)
      .sort((a, b) => rings.indexOf(a.ring) - rings.indexOf(b.ring) || b.date.localeCompare(a.date));
    $("radarList").innerHTML = sorted
      .map((t) => `<div class="row" data-i="${t.i}"><h3><span class="dot" style="background:${color(t.ring)}"></span>${t.link ? `<a href="${esc(t.link)}" target="_blank" rel="noopener">${esc(t.name)}</a>` : esc(t.name)}
        <span class="ring-tag" style="color:${color(t.ring)}">${esc(t.ring)}</span></h3>
        <span class="area">${esc(t.area)} · added ${esc(t.date)}</span><p>${esc(t.note)}</p></div>`).join("");
    document.querySelectorAll(".blip").forEach((b) => {
      b.classList.toggle("dim", active !== "All" && SITE.radar[b.dataset.i].ring !== active);
    });
  };
  $("radarLegend").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-r]");
    if (btn) { active = btn.dataset.r; draw(); }
  });

  // Hovering a blip or row highlights its partner
  const highlight = (i, on) => {
    document.querySelectorAll(`[data-i="${i}"]`).forEach((el) => el.classList.toggle("hl", on));
  };
  for (const root of [$("radar"), $("radarList")]) {
    root.addEventListener("mouseover", (e) => { const el = e.target.closest("[data-i]"); if (el) highlight(el.dataset.i, true); });
    root.addEventListener("mouseout", (e) => { const el = e.target.closest("[data-i]"); if (el) highlight(el.dataset.i, false); });
  }
  $("radar").addEventListener("click", (e) => {
    const el = e.target.closest(".blip");
    const row = el && $("radarList").querySelector(`[data-i="${el.dataset.i}"]`);
    if (row) row.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  draw();
}
