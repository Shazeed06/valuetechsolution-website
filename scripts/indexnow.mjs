#!/usr/bin/env node
/**
 * IndexNow batch submitter.
 *
 * Pings IndexNow (Bing + Yandex + Seznam + Naver) with every URL in the
 * site's sitemap.xml. Use after a deploy that affects page content / new
 * pages — it tells search engines to recrawl immediately instead of
 * waiting for their natural cycle.
 *
 * Usage:
 *   node scripts/indexnow.mjs
 *
 * IndexNow key + key-file must already be live at:
 *   https://valuetechsolution.com/<KEY>.txt
 * If you ever rotate the key, update BOTH the key constant here AND
 * rename the file in /public to match.
 */

const KEY = "f7a9c2b1e4d8456abc3def0987654321";
const HOST = "valuetechsolution.com";
const SITEMAP = "https://valuetechsolution.com/sitemap.xml";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const ENDPOINTS = [
  "https://api.indexnow.org/IndexNow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

async function getSitemapUrls() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
  return matches.map((m) => m.replace(/<\/?loc>/g, "").trim());
}

async function submit(endpoint, urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  return { endpoint, status: res.status, text: await res.text() };
}

(async () => {
  const urls = await getSitemapUrls();
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  for (const endpoint of ENDPOINTS) {
    try {
      const r = await submit(endpoint, urls);
      console.log(`✓ ${r.endpoint} → ${r.status} ${r.text.slice(0, 120)}`);
    } catch (err) {
      console.error(`✗ ${endpoint} → ${err.message}`);
    }
  }
})();
