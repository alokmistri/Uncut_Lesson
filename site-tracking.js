(function () {
  const config = window.UNCUT_TRACKING_CONFIG || {};
  const measurementId = (config.googleAnalyticsId || "").trim();

  const getPageName = () => window.location.pathname.split("/").pop() || "index.html";

  const getClickLabel = (target) => {
    const customLabel = target.getAttribute("data-track-label");
    if (customLabel) return customLabel.trim();

    const text = target.textContent.replace(/\s+/g, " ").trim();
    const href = target.getAttribute("href");
    return text || href || target.getAttribute("aria-label") || "Unknown Click";
  };

  const sendEvent = (eventName, details) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        page_name: getPageName(),
        ...details,
      });
    }
  };

  if (measurementId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      page_title: document.title,
      page_path: window.location.pathname,
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    sendEvent("page_ready", {
      page_title: document.title,
    });

    document.addEventListener("click", (event) => {
      const target = event.target.closest("a, button");
      if (!target) return;

      sendEvent("site_click", {
        click_label: getClickLabel(target),
        click_url: target.href || "",
        click_class: target.className || "",
      });
    });
  });
})();
