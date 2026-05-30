document.addEventListener("DOMContentLoaded", () => {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.prepend(progress);

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progressValue = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, progressValue))}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  const helpBubble = document.createElement("a");
  helpBubble.className = "floating-help-bubble";
  helpBubble.href = "https://wa.me/917439034248";
  helpBubble.target = "_blank";
  helpBubble.rel = "noopener noreferrer";
  helpBubble.setAttribute("aria-label", "Need help on WhatsApp");
  helpBubble.innerHTML = '<span>Need Help?</span><strong>WhatsApp</strong>';
  document.body.appendChild(helpBubble);

  window.setTimeout(() => {
    helpBubble.classList.add("is-visible");
  }, 10000);

  const quizWalker = document.createElement("a");
  quizWalker.className = "quiz-walker";
  quizWalker.href = "course-quiz.html";
  quizWalker.setAttribute("aria-label", "Play quiz for discount");
  quizWalker.innerHTML = `
    <span class="quiz-walker-card">Play Quiz For Discount</span>
    <span class="quiz-walker-boy" aria-hidden="true">
      <span class="quiz-walker-head"></span>
      <span class="quiz-walker-body"></span>
      <span class="quiz-walker-arm quiz-walker-arm-left"></span>
      <span class="quiz-walker-arm quiz-walker-arm-right"></span>
      <span class="quiz-walker-leg quiz-walker-leg-left"></span>
      <span class="quiz-walker-leg quiz-walker-leg-right"></span>
    </span>
  `;
  document.body.appendChild(quizWalker);

  window.setTimeout(() => {
    quizWalker.classList.add("is-visible");
  }, 60000);

  const revealItems = document.querySelectorAll(
    ".hero-card, .ad-section, .courses-hero, .about-hero, .support-hero, .payment-hero, .course-topics-hero, .info-card, .course-card, .about-card, .value-card, .support-card, .payment-card, .course-topic-card, .quiz-card, .quiz-result, .review-card, .values-section, .site-footer"
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 360)}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));

  document.querySelectorAll(".stat-pill strong").forEach((stat) => {
    const text = stat.textContent.trim();
    const match = text.match(/^([\d,]+)(.*)$/);

    if (!match) {
      return;
    }

    const target = Number(match[1].replace(/,/g, ""));
    const suffix = match[2];
    let started = false;

    const runCounter = () => {
      const start = performance.now();
      const duration = 1200;

      const tick = (now) => {
        const progressValue = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progressValue, 3);
        stat.textContent = `${Math.round(target * eased).toLocaleString("en-US")}${suffix}`;

        if (progressValue < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            runCounter();
            statObserver.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    statObserver.observe(stat);
  });
});
