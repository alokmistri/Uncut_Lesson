const getPaymentDetails = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    course: params.get("course") || "Uncut Lesson Enrollment",
    price: params.get("price") || "To be confirmed",
  };
};

window.addEventListener("DOMContentLoaded", () => {
  const courseFields = document.querySelectorAll("[data-course-name]");
  const priceFields = document.querySelectorAll("[data-course-price]");
  const whatsappLinks = document.querySelectorAll("[data-payment-whatsapp]");
  const upiField = document.querySelector("[data-upi-id]");
  const copyUpiButton = document.querySelector("[data-copy-upi]");
  const qrDownloadLink = document.querySelector(".download-qr-button");

  if (!courseFields.length && !priceFields.length && !whatsappLinks.length && !copyUpiButton) return;

  const { course, price } = getPaymentDetails();
  const message = `Hello, I paid for ${course} - ${price}. I am sharing my payment screenshot.`;
  const whatsappUrl = `https://wa.me/917439034248?text=${encodeURIComponent(message)}`;

  courseFields.forEach((field) => {
    field.textContent = course;
  });

  priceFields.forEach((field) => {
    field.textContent = price;
  });

  whatsappLinks.forEach((link) => {
    link.setAttribute("href", whatsappUrl);
  });

  if (qrDownloadLink) {
    const safeCourseName = course.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
    qrDownloadLink.setAttribute("download", `${safeCourseName || "Uncut-Lesson"}-payment-qr.jpeg`);
  }

  if (upiField && copyUpiButton) {
    const defaultLabel = copyUpiButton.textContent;

    copyUpiButton.addEventListener("click", async () => {
      const upiId = upiField.textContent.trim();

      try {
        await navigator.clipboard.writeText(upiId);
        copyUpiButton.textContent = "Copied";
      } catch (error) {
        const range = document.createRange();
        range.selectNodeContents(upiField);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        copyUpiButton.textContent = "Selected";
      }

      window.setTimeout(() => {
        copyUpiButton.textContent = defaultLabel;
      }, 1800);
    });
  }
});
