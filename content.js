// FDT -> OLT list (edit here). Keys ending in * match any number after the prefix.
//
// Simple:            "JWN1": "OLT 6"
// Two possible OLTs: "RHM11": ["OLT 1", "OLT 2"]       (shown in orange)
// Any number after a city prefix:  "JWN*": "OLT 6"
// Decided by FAT:    "RHM19": { "1-36": "OLT 2", "rest": "OLT 3" }
//     - "1-36" means FAT 1 to 36, "rest" means every other FAT
//     - a single FAT can be written as "50"
//     - if the page shows no FAT, both OLTs are shown in orange
const RAW_MAPPING = {
  "ASK1": "OLT C",
  "ASK2": "OLT C",
  "ASK3": "OLT C",
  "ASK4": "OLT C",
  "ASK5": "OLT C",
  "ASK6": "OLT C",
  "ASK7": "OLT C",
  "ASK8": "OLT C",
  "ASK9": "OLT B",
  "ASK10": "OLT B",
  "ASK11": "OLT B",
  "ASK12": "OLT B",
  "ASK13": "OLT B",
  "ASK14": "OLT B",
  "ASK15": "OLT B",
  "ASK16": "OLT B",
  "ASK17": "OLT A",
  "ASK18": "OLT A",
  "ASK19": "OLT A",
  "ASK20": "OLT A",
  "ASK21": "OLT A",
  "ASK22": "OLT A",
  "HMZ1": "OLT 32",
  "HMZ2": "OLT 31",
  "HMZ3": "OLT 31",
  "HMZ4": "OLT 31",
  "HMZ5": "OLT 31",
  "TSN1": "OLT 32",
  "TSN2": "OLT 32",
  "RHM11": { "1-60": "OLT 1", "rest": "OLT 2" },
  "RHM12": "OLT 1",
  "RHM13": "OLT 3",
  "RHM14": { "1-60": "OLT 3", "rest": "OLT 4" },
  "RHM15": "OLT 3",
  "RHM16": "OLT 2",
  "RHM17": "OLT 3",
  "RHM18": "OLT 3",
  "RHM19": { "1-36": "OLT 2", "rest": "OLT 3" },
  "RHM20": "OLT 2",
  "SHJ1": "OLT 4",
  "SHJ2": "OLT 4",
  "SHJ3": { "1-96": "OLT 4", "rest": "OLT 5" },
  "SHJ4": "OLT 4",
  "ISK6": "OLT 6",
  "ISK7": { "1-4": "OLT 6", "rest": "OLT 2" },
  "ISK8": "OLT 2",
  "DRZ1": "OLT 12",
  "DRZ2": "OLT 12",
  "DRZ3": "OLT 12",
  "DRZ4": "OLT 11",
  "BAG1": { "1-76": "OLT 7", "rest": "OLT 8" },
  "BAG2": "OLT 7",
  "QSB4": "OLT 5",
  "SHT1": "OLT 7",
  "MAM1": "OLT 10",
  "MAM2": "OLT 10",
  "HRY40": "OLT 24",
  "HRY41": "OLT 24",
  "HRY42": "OLT 24",
  "JNG43": "OLT 24",
  "JNG44": "OLT 25",
  "SHO1": { "1-116": "OLT 8", "rest": "OLT 6" },
  "SHO2": "OLT 6",
  "SHO3": "OLT 8",
  "SHO4": "OLT 6",
  "SHO5": { "1-88": "OLT 9", "rest": "OLT 10" },
  "SHO6": "OLT 9",
  "SHO7": "OLT 9",
  "SHO8": { "1-88": "OLT 8", "rest": "OLT 9" },
  "SHO9": "OLT 9",
  "SHO10": "OLT 9",
  "KHS1": "OLT 8",
  "TLM1": "OLT 13",
  "SNG1": { "1-63": "OLT 5", "rest": "OLT 6" },
  "SNG2": "OLT 7",
  "SNG3": { "1-32": "OLT 3", "rest": "OLT 4" },
  "AZD1": { "1-36": "OLT 10", "rest": "OLT 11" },
  "AZD2": "OLT 1",
  "GRG1": "OLT 1",
  "PRY13": "OLT 13",
  "PAN53": { "1-136": "OLT 26", "rest": "OLT 27" },
  "PAN54": { "1-124": "OLT 26", "rest": "OLT 27" },
  "PAN55": "OLT 26",
  "PAN56": { "1-88": "OLT 26", "rest": "OLT 27" },
  "PAN57": "OLT 27",
  "PAN58": "OLT 27",
  "SKN1": "OLT 10",
  "SKN2": "OLT 10",
  "AZT1": "OLT 11",
  "AZT2": "OLT 11",
  "AZT3": "OLT 11",
  "AZT4": { "1-96": "OLT 12", "rest": "OLT 13" },
  "AZT5": "OLT 12",
  "AZT6": { "1-24": "OLT 11", "rest": "OLT 12" },
  "AZT7": "OLT 11",
  "SRI1": "OLT 10",
  "SRI2": { "1-4": "OLT 6", "rest": "OLT 1" },
  "SRI3": "OLT 1",
  "SRI4": { "1-8": "OLT 5", "rest": "OLT 6" },
  "MUS5": "OLT 5",
  "MUS9": "OLT 5",
  "MUS10": "OLT 5",
  "ALM1": "OLT 7",
  "ALM2": "OLT 7",
  "GRD*": "OLT 6",
  "FML*": "OLT 6",
  "KRK*": "OLT 1",
  "BRY*": "OLT 2",
  "NOR*": "OLT 1",
  "CRY*": "OLT 6",
  "MRJ*": "OLT 6",
  "AVN*": "OLT 3",
  "JWN*": "OLT 6",
  "SKY*": "OLT 10",
  "SOM*": "OLT 8",
  "RWN*": "OLT 13",
  "ARM*": "OLT 8",
  "LUA*": "OLT 24",
  "EMR*": "OLT 13",
  "SHS*": "OLT 13",
  "MDC*": "OLT 31",
  "QRH*": "OLT QRH",
  "TAZ*": "OLT TAZZA",
  "GRD2": "OLT 13",
  "BDR1": "OLT 32",
  "BDR2": "OLT 31",
  "BDR3": "OLT 31",

};

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT"]);
let exactMap = {};
let wildcards = [];   // [{ prefix, value }]  from keys ending in *
let fdtRegex = null;
let observer;

const stripPrefix = (k) => k.trim().replace(/^FDT\s*[-:]\s*/i, "").toUpperCase();
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

async function loadMapping() {
  const raw = RAW_MAPPING;

  exactMap = {};
  wildcards = [];
  for (const [key, value] of Object.entries(raw)) {
    const k = stripPrefix(key);
    if (k.endsWith("*")) wildcards.push({ prefix: k.slice(0, -1), value });
    else exactMap[k] = value;
  }
  wildcards.sort((a, b) => b.prefix.length - a.prefix.length);

  const pieces = [
    ...Object.keys(exactMap).map(escapeRe),
    ...wildcards.map((w) => escapeRe(w.prefix) + "[A-Z0-9]*"),
  ].sort((a, b) => b.length - a.length);

  if (pieces.length) {
    fdtRegex = new RegExp(
      `(?<![A-Z0-9])FDT\\s*[-:]\\s*(${pieces.join("|")})(?![A-Z0-9])`,
      "gi"
    );
  }
}

// ---- FAT support ----------------------------------------------------------

// "FAT:14", "FAT 14", "fat-14"  ->  14   (undefined if there is no FAT)
function parseFat(text) {
  const m = text.match(/FAT\s*[-:]?\s*(\d+)/i);
  return m ? parseInt(m[1], 10) : undefined;
}

function parseRange(key) {
  const m = key.trim().match(/^(\d+)\s*(?:-\s*(\d+))?$/);
  if (!m) return null;
  const from = parseInt(m[1], 10);
  const to = m[2] !== undefined ? parseInt(m[2], 10) : from;
  return { from, to };
}

// value can be: "OLT 6" | ["OLT 1","OLT 2"] | { "1-36": "OLT 2", "rest": "OLT 3" }
function pickOlt(value, fat) {
  if (value === undefined) return undefined;
  if (typeof value !== "object" || Array.isArray(value)) return value;

  const all = [];
  let rest;
  for (const [key, olt] of Object.entries(value)) {
    if (!all.includes(olt)) all.push(olt);
    if (key.trim().toLowerCase() === "rest") { rest = olt; continue; }
    const r = parseRange(key);
    if (r && fat !== undefined && fat >= r.from && fat <= r.to) return olt;
  }
  if (fat !== undefined && rest !== undefined) return rest;
  return all.length === 1 ? all[0] : all;   // no FAT known -> show every possibility
}

// exact match first (e.g. GRD2), then the longest matching wildcard (e.g. GRD*)
function resolve(code, fat) {
  if (exactMap[code] !== undefined) return pickOlt(exactMap[code], fat);
  for (const w of wildcards) {
    if (code.startsWith(w.prefix)) return pickOlt(w.value, fat);
  }
  return undefined;
}

function makeBadge(oltCode) {
  const isMulti = Array.isArray(oltCode);
  const text = isMulti ? oltCode.join(" / ") : oltCode;

  const badge = document.createElement("span");
  badge.dataset.oltBadge = "true";
  badge.textContent = text;
  badge.style.cssText = `
    background-color: ${isMulti ? "#fd7e14" : "#0d6efd"};
    color: white; font-weight: bold; font-size: 0.85em;
    padding: 2px 6px; margin-right: 5px; border-radius: 4px;
    display: inline-block; white-space: nowrap;
  `;
  return badge;
}

// FAT that belongs to the FDT at matches[i]
function fatFor(text, matches, i, node) {
  const end = matches[i].index + matches[i][0].length;
  const next = i + 1 < matches.length ? matches[i + 1].index : text.length;
  let fat = parseFat(text.slice(end, next));
  if (fat === undefined && matches.length === 1) {
    // FAT may be in another piece of the same cell (e.g. after a line break)
    const holder = node.parentElement.closest("td") || node.parentElement;
    fat = parseFat(holder.textContent);
  }
  return fat;
}

function processTextNode(node) {
  if (!fdtRegex) return;
  const parent = node.parentElement;
  if (!parent || SKIP_TAGS.has(parent.tagName) || parent.isContentEditable ||
      parent.closest("[data-olt-badge]")) return;

  const text = node.nodeValue;
  const matches = [...text.matchAll(fdtRegex)];
  if (!matches.length) return;

  // work out every OLT first, before the text node gets split
  const items = matches.map((m, i) => ({
    start: m.index,
    olt: resolve(m[1].toUpperCase(), fatFor(text, matches, i, node)),
  }));

  for (const { start, olt } of items.reverse()) {
    if (olt === undefined) continue;

    // already badged on an earlier scan? then skip (prevents duplicates)
    const prev = node.previousSibling;
    if (start === 0 && prev && prev.dataset && prev.dataset.oltBadge) continue;

    node.splitText(start);       // cut the text right before "FDT"
    node.after(makeBadge(olt));  // put the badge in the gap
  }
}

function scan(root) {
  if (root.nodeType === Node.TEXT_NODE) {
    processTextNode(root);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(processTextNode);
}

function startObserving() {
  const opts = { childList: true, subtree: true, characterData: true };
  observer = new MutationObserver((mutations) => {
    observer.disconnect();               // ignore our own badge edits
    for (const mutation of mutations) {
      if (mutation.type === "characterData") scan(mutation.target);
      mutation.addedNodes.forEach(scan);
    }
    observer.observe(document.body, opts);
  });
  observer.observe(document.body, opts);
}

(async () => {
  await loadMapping();
  scan(document.body);
  startObserving();
})();
