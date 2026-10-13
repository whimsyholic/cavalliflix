const embeddedShows = [
  {
    title: "Fall Winter 2026-27",
    season: "FW 2026",
    year: 2026,
    era: "fausto",
    feature: "newest",
    videoId: "ZXRAy3GylXI",
    source: "Official Roberto Cavalli",
    mood: "Nero Carnale, black gloss, body-conscious drama, and after-dark glamour.",
    tags: ["Fausto Puglisi", "Milan", "Womenswear", "Official"]
  },
  {
    title: "Spring Summer 2026",
    season: "SS 2026",
    year: 2025,
    era: "fausto",
    feature: "puglisi",
    videoId: "tfPVNeBoQlI",
    source: "Official Roberto Cavalli",
    mood: "Molten gold, fluid dresses, lamé denim, and a sunlit Cavalli heat shimmer.",
    tags: ["Fausto Puglisi", "Milan", "Womenswear", "Official"]
  },
  {
    title: "Fall Winter 2025-26",
    season: "FW 2025",
    year: 2025,
    era: "fausto",
    feature: "puglisi",
    videoId: "pPPcMtQUB0M",
    source: "Fashion Feed",
    mood: "Pompeii Future: volcanic texture, ash-dark tailoring, fake fur, and burnished surfaces.",
    tags: ["Fausto Puglisi", "Pompeii", "Milan", "Full show"]
  },
  {
    title: "Spring Summer 2025",
    season: "SS 2025",
    year: 2024,
    era: "fausto",
    feature: "puglisi",
    videoId: "a4lkfamdc48",
    source: "Official Roberto Cavalli",
    mood: "Views From Zancle, sea light, island heat, and archive supermodel finale energy.",
    tags: ["Fausto Puglisi", "Archive looks", "Official"]
  },
  {
    title: "Fall Winter 2024-25",
    season: "FW 2024",
    year: 2024,
    era: "fausto",
    feature: "puglisi",
    videoId: "WGtgw7WuDa4",
    source: "FF Channel",
    mood: "Marble references, smoky outerwear, velvet, leather, and ancient-city romance.",
    tags: ["Fausto Puglisi", "Marble", "Milan", "Full show"]
  },
  {
    title: "Spring Summer 2024",
    season: "SS 2024",
    year: 2023,
    era: "fausto",
    feature: "puglisi",
    videoId: "XXgZ0Pp8b1w",
    source: "Official Roberto Cavalli",
    mood: "Paradise: wild prints, refined ease, and a softer tropical current.",
    tags: ["Fausto Puglisi", "Paradise", "Official"]
  },
  {
    title: "Fall Winter 2023-24",
    season: "FW 2023",
    year: 2023,
    era: "fausto",
    feature: "puglisi",
    videoId: "0GxHRJ3MQHY",
    source: "Official Roberto Cavalli",
    mood: "American Southwest muses, devore, denim, fake furs, and free-spirit sensuality.",
    tags: ["Fausto Puglisi", "Southwest", "Official"]
  },
  {
    title: "Fall Winter 2022-23",
    season: "FW 2022",
    year: 2022,
    era: "fausto",
    feature: "puglisi",
    videoId: "GPgbg6liHt0",
    source: "Official Roberto Cavalli",
    mood: "A restart chapter with street energy, Italian glamour, and high-shine attitude.",
    tags: ["Fausto Puglisi", "Milan", "Official"]
  },
  {
    title: "Spring Summer 2022",
    season: "SS 2022",
    year: 2021,
    era: "fausto",
    feature: "puglisi",
    videoId: "-JjD-DY9ihk",
    source: "FF Channel",
    mood: "Fausto Puglisi's first major Cavalli runway chapter: animal flags, body heat, and sharp revival energy.",
    tags: ["Fausto Puglisi", "Milan", "Full show"]
  },
  {
    title: "Fall 2022 Menswear",
    season: "FW 2022",
    year: 2022,
    era: "menswear",
    feature: "puglisi",
    videoId: "hXtlUN9ddnE",
    source: "FF Channel",
    mood: "Menswear chapter with hardware, leather, chains, and Puglisi's maximal confidence.",
    tags: ["Menswear", "Fausto Puglisi", "Full show"]
  },
  {
    title: "Spring Summer 2019",
    season: "SS 2019",
    year: 2018,
    era: "modern",
    feature: "archive",
    videoId: "uPLuBbw0oxs",
    source: "FF Channel",
    mood: "Paul Surridge period: cleaner lines, Cavalli sensuality, and a more edited hand.",
    tags: ["Paul Surridge", "Modern", "Full show"]
  },
  {
    title: "Fall Winter 2018",
    season: "FW 2018",
    year: 2018,
    era: "modern",
    feature: "archive",
    videoId: "_CCC17MQ6ZI",
    source: "FF Channel",
    mood: "Surridge's debut runway chapter after joining the house.",
    tags: ["Paul Surridge", "Milan", "Full show"]
  },
  {
    title: "Spring Summer 2015",
    season: "SS 2015",
    year: 2014,
    era: "modern",
    feature: "archive",
    videoId: "H0nY5qTDA1c",
    source: "FF Channel",
    mood: "Late founder-era Cavalli: skin, slink, embellishment, and rock-luxe momentum.",
    tags: ["Founder era", "Milan", "Full show"]
  },
  {
    title: "Fall Winter 2014 Menswear",
    season: "FW 2014",
    year: 2014,
    era: "menswear",
    feature: "archive",
    videoId: "jdIjhb9Pc00",
    source: "Roberto Cavalli / YouTube embed",
    mood: "Daniele Cavalli-linked menswear period with ornate rock tailoring.",
    tags: ["Menswear", "Archive", "Full show"]
  },
  {
    title: "Spring Summer 2011",
    season: "SS 2011",
    year: 2010,
    era: "archive",
    feature: "archive",
    videoId: "bgcg81TeX8A",
    source: "Style.com / Vogue",
    mood: "A widely referenced Cavalli show from the Style.com runway video era.",
    tags: ["Style.com", "Vogue", "Archive"]
  },
  {
    title: "Spring Summer 2005",
    season: "SS 2005",
    year: 2004,
    era: "archive",
    feature: "archive",
    videoId: "qgLusv-it54",
    source: "FBK1976",
    mood: "A celebrity-archive favorite, packed with print, skin, and Cavalli's Y2K peak.",
    tags: ["Y2K", "Archive", "Full show"]
  },
  {
    title: "Spring Summer 2004",
    season: "SS 2004",
    year: 2003,
    era: "archive",
    feature: "archive",
    videoId: "iZo98V1kr5A",
    source: "Fashion Channel",
    mood: "Devon Aoki-era runway memory: floaty, loud, glamorous, and print-heavy.",
    tags: ["Y2K", "Archive", "Runway footage"]
  },
  {
    title: "Fall Winter 2000",
    season: "FW 2000",
    year: 2000,
    era: "archive",
    feature: "archive",
    videoId: "ztOaWEAZVqI",
    source: "Fashion Channel",
    mood: "The archive lane: jeans, lace-up bodies, pop-star afterlife, and Cavalli's turn-of-century heat.",
    tags: ["Y2K", "Archive", "Runway footage"]
  }
];

const archiveMoods = {
  mainline: "Mainline Roberto Cavalli runway archive entry: animalia, denim, devore, leather, and high-glamour house codes.",
  menswear: "Roberto Cavalli menswear archive entry: rock tailoring, ornate surface, leather, print, and sharp Milan attitude.",
  just: "Just Cavalli archive entry: younger Cavalli energy, print clash, denim, party dresses, and Y2K-adjacent styling.",
  resort: "Roberto Cavalli resort archive entry: vacation glamour, printed silk, easy eveningwear, and saturated Cavalli color.",
  prefall: "Roberto Cavalli pre-fall archive entry: transitional glamour, outerwear, sensual print, and house-signature ornament."
};

function eraForMainline(year) {
  if (year >= 2021) {
    return "fausto";
  }

  if (year >= 2016) {
    return "modern";
  }

  return "archive";
}

function twoSeasonShows(startYear, endYear, line, era, mood, tags) {
  const entries = [];
  for (let year = endYear; year >= startYear; year -= 1) {
    const resolvedEra = typeof era === "function" ? era(year) : era;

    entries.push({
      title: `${line} Fall Winter ${year}-${String(year + 1).slice(-2)}`,
      season: `FW ${year}`,
      year,
      era: resolvedEra,
      feature: "archive",
      videoId: "",
      source: "Archive index",
      mood,
      tags
    });

    entries.push({
      title: `${line} Spring Summer ${year}`,
      season: `SS ${year}`,
      year: year - 1,
      era: resolvedEra,
      feature: "archive",
      videoId: "",
      source: "Archive index",
      mood,
      tags
    });
  }

  return entries;
}

function singleSeasonShows(startYear, endYear, line, seasonPrefix, era, mood, tags) {
  const entries = [];
  for (let year = endYear; year >= startYear; year -= 1) {
    const resolvedEra = typeof era === "function" ? era(year) : era;

    entries.push({
      title: `${line} ${seasonPrefix} ${year}`,
      season: `${seasonPrefix} ${year}`,
      year,
      era: resolvedEra,
      feature: "archive",
      videoId: "",
      source: "Archive index",
      mood,
      tags
    });
  }

  return entries;
}

function inferredArchiveKey(show) {
  const title = show.title.toLowerCase();
  const line = show.tags.includes("Menswear")
    ? "menswear"
    : title.includes("just cavalli")
      ? "just"
      : title.includes("resort")
        ? "resort"
        : title.includes("pre-fall")
          ? "prefall"
          : "mainline";

  return `${line}:${show.season}`;
}

function buildFullArchive(seedShows) {
  const candidates = [
    ...twoSeasonShows(
      1995,
      2027,
      "Roberto Cavalli",
      eraForMainline,
      archiveMoods.mainline,
      ["Roberto Cavalli", "Womenswear", "Archive"]
    ),
    ...twoSeasonShows(
      2003,
      2017,
      "Roberto Cavalli Menswear",
      "menswear",
      archiveMoods.menswear,
      ["Roberto Cavalli", "Menswear", "Archive"]
    ),
    ...twoSeasonShows(
      2004,
      2018,
      "Just Cavalli",
      "just",
      archiveMoods.just,
      ["Just Cavalli", "Womenswear", "Archive"]
    ),
    ...twoSeasonShows(
      2007,
      2015,
      "Just Cavalli Menswear",
      "menswear",
      archiveMoods.just,
      ["Just Cavalli", "Menswear", "Archive"]
    ),
    ...singleSeasonShows(
      2008,
      2027,
      "Roberto Cavalli",
      "Resort",
      "resort",
      archiveMoods.resort,
      ["Roberto Cavalli", "Resort", "Archive"]
    ),
    ...singleSeasonShows(
      2009,
      2026,
      "Roberto Cavalli",
      "Pre-Fall",
      "resort",
      archiveMoods.prefall,
      ["Roberto Cavalli", "Pre-Fall", "Archive"]
    )
  ];

  const archive = [...seedShows];
  const usedKeys = new Set(seedShows.map(inferredArchiveKey));

  for (const candidate of candidates) {
    const key = inferredArchiveKey(candidate);
    if (usedKeys.has(key)) {
      continue;
    }

    archive.push(candidate);
    usedKeys.add(key);

    if (archive.length === 160) {
      break;
    }
  }

  return archive;
}

const shows = buildFullArchive(embeddedShows);

const state = {
  era: "all",
  query: "",
  activeShow: shows.find((show) => show.videoId) || shows[0]
};

const grid = document.querySelector("#show-grid");
const resultCount = document.querySelector("#result-count");
const player = document.querySelector("#runway-player");
const playerTitle = document.querySelector("#player-title");
const playerNote = document.querySelector("#player-note");
const playerEra = document.querySelector("#player-era");
const search = document.querySelector("#search");
const filterButtons = [...document.querySelectorAll(".filter-pill")];
const copyButton = document.querySelector("#copy-link");

function youtubeUrl(show) {
  if (show.videoId) {
    return `https://www.youtube.com/watch?v=${show.videoId}`;
  }

  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${show.title} full show`)}`;
}

function embedUrl(show) {
  if (show.videoId) {
    return `https://www.youtube.com/embed/${show.videoId}?rel=0&modestbranding=1`;
  }

  return `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(`${show.title} full show`)}`;
}

function thumbnail(show) {
  return show.videoId
    ? `https://i.ytimg.com/vi/${show.videoId}/hqdefault.jpg`
    : "";
}

function matches(show) {
  const query = state.query.trim().toLowerCase();
  const eraMatch = state.era === "all" || show.era === state.era;
  const text = [show.title, show.season, show.year, show.mood, show.source, ...show.tags]
    .join(" ")
    .toLowerCase();

  return eraMatch && (!query || text.includes(query));
}

function setPlayer(show) {
  state.activeShow = show;
  playerTitle.textContent = show.title;
  playerNote.textContent = `${show.mood} Source: ${show.source}.`;
  playerEra.textContent = `${show.season} / ${show.year}`;

  player.src = embedUrl(show);

  if (!show.videoId) {
    playerNote.textContent = `${show.mood} This uses an embedded YouTube search playlist for the mapped archive entry.`;
  }
}

function renderCard(show) {
  const card = document.createElement("article");
  card.className = `show-card${show.videoId ? "" : " search-embed"}`;

  const tags = show.tags.map((tag) => `<span>${tag}</span>`).join("");
  const thumb = thumbnail(show);
  const poster = thumb
    ? `<img src="${thumb}" alt="${show.title} runway video thumbnail" loading="lazy">`
    : "";

  card.innerHTML = `
    <div class="poster">
      ${poster}
      <span class="badge">${show.season}</span>
    </div>
    <div class="card-body">
      <div>
        <h3>${show.title}</h3>
        <p>${show.mood}</p>
      </div>
      <div class="tags">${tags}</div>
      <div class="card-actions">
        <button type="button">Watch</button>
        <a href="${youtubeUrl(show)}" target="_blank" rel="noreferrer">${show.videoId ? "Open" : "Search"}</a>
      </div>
    </div>
  `;

  const play = card.querySelector("button");
  play.addEventListener("click", () => {
    setPlayer(show);
    document.querySelector(".watch-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  return card;
}

function render() {
  const filtered = shows.filter(matches);
  grid.replaceChildren(...filtered.map(renderCard));
  resultCount.textContent = state.era === "all" && !state.query.trim()
    ? `All ${shows.length} shows loaded`
    : `${filtered.length} of ${shows.length} shows showing`;
}

function setStats() {
  const embedded = shows.length;
  const years = new Set(shows.map((show) => show.season)).size;

  document.querySelector("#stat-total").textContent = shows.length;
  document.querySelector("#stat-embedded").textContent = embedded;
  document.querySelector("#stat-years").textContent = years;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.era = button.dataset.era;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

document.querySelectorAll(".spotlight").forEach((button) => {
  button.addEventListener("click", () => {
    const target = shows.find((show) => show.feature === button.dataset.feature && show.videoId)
      || shows.find((show) => show.feature === button.dataset.feature)
      || shows[0];
    setPlayer(target);
    document.querySelector(".watch-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

search.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

copyButton.addEventListener("click", async () => {
  const url = youtubeUrl(state.activeShow);
  try {
    await navigator.clipboard.writeText(url);
    copyButton.title = "Copied";
    copyButton.setAttribute("aria-label", "Copied video link");
    setTimeout(() => {
      copyButton.title = "Copy video link";
      copyButton.setAttribute("aria-label", "Copy video link");
    }, 1400);
  } catch {
    window.open(url, "_blank", "noreferrer");
  }
});

setStats();
setPlayer(state.activeShow);
render();
