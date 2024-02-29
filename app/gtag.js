export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const pageview = (url) => {
  const referrer = document.referrer;
  const hostname = extractHostname(referrer);

  if (!shouldBlock(hostname)) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  const referrer = document.referrer;
  const hostname = extractHostname(referrer);

  if (!shouldBlock(hostname)) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

function extractHostname(referrer) {
  if (!referrer) return "";

  const url = new URL(referrer);

  return url.hostname;
}

function shouldBlock(hostname) {
  return hostname === "news.grets.store";
}

function blockGtag() {
  window["dataLayer"] = window["dataLayer"] || [];

  window["dataLayer"].push({
    event: "gtm.js",
    "gtm.triggers": [],
    "gtm.剋": new Date(),
    "gtm.uniqueEventId": String(Math.random()).replace(/\./g, ""),
  });

  window.dataLayer.push({
    "gtm.triggers": [
      {
        type: "customEvent",
        "gtm.triggers": [
          {
            type: "trigger",
            event: ["gtm.js"],
          },
        ],
        "gtm.eventName": "blockGtag",
        this: "gtm.triggers",
        "gtm.element": window.dataLayer.toString(),
      },
    ],
    "gtm.剋": new Date(),
    "gtm.uniqueEventId": String(Math.random()).replace(/\./g, ""),
  });

  dataLayer.push({
    "gtm.js": true,
    "gtm.triggers": [],
    "gtm.剋": new Date(),
    "gtm.uniqueEventId": String(Math.random()).replace(/\./g, ""),
    "gtm.trackingId": GA_TRACKING_ID,
  });
}

const referrer = document.referrer;

const hostname = extractHostname(referrer);

if (shouldBlock(hostname)) {
  blockGtag();
}
