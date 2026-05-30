const autoAdDelay = 60000;
const autoAdClosedAtKey = "uncut_lesson_ad_closed_at";

window.addEventListener("DOMContentLoaded", () => {
  let autoAdTimer;

  const popup = document.createElement("div");
  popup.className = "auto-ad-popup";
  popup.innerHTML = `
    <div class="auto-ad-card" role="dialog" aria-modal="true" aria-label="Featured advertisement">
      <button class="auto-ad-close" type="button" aria-label="Close advertisement">&times;</button>
      <div class="auto-ad-copy">
        <p class="eyebrow">Featured Offer</p>
        <h2>New Season Offer For Smart Learners</h2>
        <p>Join our best-selling classes with guided lessons, practical training, and direct support in one place.</p>
        <div class="auto-ad-actions">
          <a class="primary-cta" href="payment.html?course=Uncut%20Lesson%20Featured%20Offer&price=Selected%20on%20confirmation">Start Learning</a>
          <a class="secondary-cta" href="courses.html">View Courses</a>
        </div>
      </div>
      <a class="auto-ad-visual" href="payment.html?course=Uncut%20Lesson%20Featured%20Offer&price=Selected%20on%20confirmation">
        <img src="assets/Offer.jpg" alt="Promotional education banner">
      </a>
    </div>
  `;

  document.body.appendChild(popup);

  const closeButton = popup.querySelector(".auto-ad-close");
  const getLastClosedAt = () => Number(localStorage.getItem(autoAdClosedAtKey) || 0);

  const schedulePopup = () => {
    clearTimeout(autoAdTimer);
    const remainingDelay = Math.max(0, autoAdDelay - (Date.now() - getLastClosedAt()));

    autoAdTimer = window.setTimeout(() => {
      popup.classList.add("is-visible");
    }, remainingDelay);
  };

  const closePopup = () => {
    popup.classList.remove("is-visible");
    localStorage.setItem(autoAdClosedAtKey, String(Date.now()));
    schedulePopup();
  };

  closeButton.addEventListener("click", closePopup);

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup();
    }
  });

  if (Date.now() - getLastClosedAt() >= autoAdDelay) {
    popup.classList.add("is-visible");
  } else {
    schedulePopup();
  }
});
