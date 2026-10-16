// Portfolio interactions
document.addEventListener("DOMContentLoaded", () => {
  // Current year in footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Close mobile navigation after selecting a section
  document.querySelectorAll("#navLinks .nav-link, #navLinks .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("navLinks");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Demo contact form: validates fields, then prepares an email in the user's email app.
  const form = document.getElementById("contactForm");
  const notice = document.getElementById("formNotice");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = data.get("name").toString().trim();
      const email = data.get("email").toString().trim();
      const subject = data.get("subject").toString().trim();
      const message = data.get("message").toString().trim();

      // IMPORTANT: replace this address with your own email before submitting the project.
      const recipient = "your.email@example.com";
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

      if (notice) notice.textContent = "Opening your email app. Replace the demo email address in script.js with your own address.";
      window.location.href = mailto;
    });
  }
});
