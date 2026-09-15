document.addEventListener("DOMContentLoaded", () => {
  const data = portfolioData;

  /* =========================
     PROFILE
  ========================= */

  const heroHeadline = document.getElementById("heroHeadline");
  const heroIntro = document.getElementById("heroIntro");
  const emailLink = document.getElementById("emailLink");

  if (heroHeadline) {
    heroHeadline.textContent = data.profile.tagline;
  }

  if (heroIntro) {
    heroIntro.textContent =
      `B.Tech Information Technology student at ${data.profile.college}, ` +
      `focused on development, DSA, AI and practical software projects.`;
  }

  if (emailLink) {
    emailLink.href = `mailto:${data.profile.email}`;
    emailLink.textContent = data.profile.email + " ↗";
  }


  /* =========================
     SOCIAL LINKS
  ========================= */

  const socialRow = document.getElementById("socialRow");

  if (socialRow) {
    socialRow.innerHTML = `
      <a href="${data.profile.links.github}"
         target="_blank"
         rel="noopener noreferrer">
        GitHub
      </a>

      <a href="${data.profile.links.linkedin}"
         target="_blank"
         rel="noopener noreferrer">
        LinkedIn
      </a>

      <a href="${data.profile.links.leetcode}"
         target="_blank"
         rel="noopener noreferrer">
        LeetCode
      </a>
    `;
  }


  /* =========================
     PROJECTS
  ========================= */

  const featuredProjects =
    document.getElementById("featuredProjects");

  const otherProjects =
    document.getElementById("otherProjects");

  function projectCard(project, featured = false) {
    return `
      <article class="project-card ${featured ? "featured" : ""} reveal">

        <div class="project-top">

          <span class="project-category">
            ${project.category}
          </span>

          <span class="project-arrow">
            ↗
          </span>

        </div>

        <h3>
          ${project.title}
        </h3>

        <p>
          ${project.description}
        </p>

        <div class="tech-list">
          ${project.tech
            .map(tech => `<span>${tech}</span>`)
            .join("")}
        </div>

        <a
          class="project-link"
          href="${project.github}"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub ↗
        </a>

      </article>
    `;
  }

  if (featuredProjects) {
    featuredProjects.innerHTML = data.projects
      .filter(project => project.featured)
      .map(project => projectCard(project, true))
      .join("");
  }

  if (otherProjects) {
    otherProjects.innerHTML = data.projects
      .filter(project => !project.featured)
      .map(project => projectCard(project))
      .join("");
  }


  /* =========================
     SKILLS
  ========================= */

  const skillsGrid = document.getElementById("skillsGrid");

  if (skillsGrid) {

    const skillGroups = [
      {
        title: "Languages",
        items: data.skills.languages
      },

      {
        title: "Development",
        items: data.skills.development
      },

      {
        title: "Tools",
        items: data.skills.tools
      },

      {
        title: "AI & Automation",
        items: data.skills.ai
      }
    ];

    skillsGrid.innerHTML = skillGroups
      .map(group => `
        <div class="skill-card reveal">

          <h3>
            ${group.title}
          </h3>

          <div class="skill-tags">

            ${group.items
              .map(item => `<span>${item}</span>`)
              .join("")}

          </div>

        </div>
      `)
      .join("");
  }


  /* =========================
     JOURNEY
  ========================= */

  const educationList =
    document.getElementById("educationList");

  if (educationList) {

    educationList.innerHTML = data.journey
      .map(item => `
        <div class="timeline-item reveal">

          <span class="timeline-year">
            ${item.year}
          </span>

          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>

        </div>
      `)
      .join("");
  }


  /* =========================
     ACHIEVEMENTS
  ========================= */

  const achievementList =
    document.getElementById("achievementList");

  if (achievementList) {

    achievementList.innerHTML = `
      <div class="achievement reveal">

        <span class="achievement-mark">
          ★
        </span>

        <div>
          <h3>SIH 2026 Team Leader</h3>

          <p>
            Leading the Yatri Nova project team for
            Smart India Hackathon 2026.
          </p>
        </div>

      </div>


      <div class="achievement reveal">

        <span class="achievement-mark">
          +
        </span>

        <div>
          <h3>WebCMD Campus Hackathon</h3>

          <p>
            Built RefundRakshak, an AI-assisted
            browser automation workflow with
            human approval for sensitive actions.
          </p>
        </div>

      </div>
    `;
  }


  /* =========================
     CERTIFICATES
  ========================= */

  const certificateGrid =
    document.getElementById("certificateGrid");

  if (certificateGrid) {

    certificateGrid.innerHTML = data.certificates
      .map((certificate, index) => {

        const extension =
          certificate.file.split(".").pop().toLowerCase();

        const isImage =
          ["png", "jpg", "jpeg", "webp"].includes(extension);

        return `
          <article
            class="certificate-card
            ${certificate.featured ? "featured" : ""}
            reveal"
          >

            <div class="certificate-index">
              ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="certificate-content">

              <span class="certificate-label">
                ${certificate.featured
                  ? "FEATURED CREDENTIAL"
                  : "CREDENTIAL"}
              </span>

              <h3>
                ${certificate.title}
              </h3>

              <p class="certificate-issuer">
                ${certificate.issuer}
              </p>

              ${
                certificate.date
                  ? `<p class="certificate-date">
                      ${certificate.date}
                    </p>`
                  : ""
              }

              <p class="certificate-note">
                ${certificate.note}
              </p>

              <a
                class="certificate-link"
                href="${certificate.file}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${isImage ? "View Certificate" : "Open Certificate"}
                ↗
              </a>

            </div>

          </article>
        `;
      })
      .join("");
  }


  /* =========================
     CONTACT
  ========================= */

  const contactLinks =
    document.getElementById("contactLinks");

  if (contactLinks) {

    contactLinks.innerHTML = `
      <a
        href="${data.profile.links.github}"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="${data.profile.links.linkedin}"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>

      <a
        href="${data.profile.links.leetcode}"
        target="_blank"
        rel="noopener noreferrer"
      >
        LeetCode ↗
      </a>
    `;
  }


  /* =========================
     MOBILE MENU
  ========================= */

  const menuBtn =
    document.getElementById("menuBtn");

  const navLinks =
    document.getElementById("navLinks");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });

    });
  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements =
    document.querySelectorAll(".reveal");

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.08
      }
    );

  revealElements.forEach(element => {
    observer.observe(element);
  });


  /* =========================
     YEAR
  ========================= */

  const year =
    document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});