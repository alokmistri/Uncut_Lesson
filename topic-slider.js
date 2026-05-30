document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".course-topic-card .topic-list").forEach((list) => {
    const items = Array.from(list.children);

    if (items.length < 2 || list.dataset.sliderReady === "true") {
      return;
    }

    list.dataset.sliderReady = "true";
    list.classList.add("topic-slider");
    list.setAttribute("aria-label", "Auto sliding course topics");
    list.style.setProperty("--topic-slide-duration", `${Math.max(24, items.length * 3.2)}s`);

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      list.appendChild(clone);
    });
  });
});
