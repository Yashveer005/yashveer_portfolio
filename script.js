
/* =========================================
   YASHVEER SINGH — PORTFOLIO JAVASCRIPT
   Projects, certificates, experience and UI
   ========================================= */

const projects = [
  {
    id: "cybersentinel",
    title: "CyberSentinel — Cybersecurity Awareness Platform",
    category: ["Cybersecurity", "Python", "Web / Software"],
    status: "In Development",
    featured: true,
    image: "images/proj-cybersentinel.jpg",
    summary:
      "A cybersecurity awareness platform with learning content, quizzes, certificate generation, a dashboard, and practical security utilities.",
    problem:
      "Help users build security awareness while exploring useful security checks in one place.",
    features: [
      "User authentication and learning hub",
      "Quizzes, dashboard and certificate generation",
      "Password strength analyzer and generator",
      "URL phishing checker, DNS lookup and WHOIS lookup",
      "IP intelligence, email-header analysis and SHA-256/file hashing",
      "SIEM log viewer is in progress; MITRE ATT&CK mapping and incident workflows are planned"
    ],
    stack: [
      "Python",
      "Flask",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    contribution:
      "End-to-end project development, feature implementation, UI design, Flask integration, and database setup. AI tools were used as development assistance.",
    scope:
      "Continue SIEM dashboard work, then add MITRE ATT&CK mapping, incident case management, investigation reports, QR analysis, and metadata viewing.",
    github:
      "https://github.com/Yashveer005/CyberSentinel-CyberSecurity-Awareness-Platform"
  },

  {
    id: "securewifi",
    title: "Secure Wireless Network Setup for TechNova Solutions",
    category: ["Cybersecurity", "Web / Software"],
    status: "Completed",
    featured: true,
    image: "images/proj-securewifi.jpg",
    summary:
      "A Cisco Packet Tracer project focused on strengthening a small organization's wireless network against unauthorized access.",
    problem:
      "Reduce exposure from weak wireless settings and unauthorized Wi-Fi access attempts.",
    features: [
      "Wireless topology design in Cisco Packet Tracer",
      "WPA2-protected SSID",
      "MAC filtering configuration",
      "Stronger router administrator credentials",
      "Project file and README documentation"
    ],
    stack: [
      "Cisco Packet Tracer",
      "Networking",
      "WPA2",
      "MAC Filtering"
    ],
    contribution:
      "Individually designed and configured the network as a project for the NIIT Foundation × Cisco cybersecurity internship.",
    scope:
      "Use the project file and topology documentation to explain configuration decisions and security trade-offs.",
    github:
      "https://github.com/Yashveer005/Secure-WiFi-Project"
  },

  {
    id: "feature-management",
    title: "Feature Management System with Release Control Assistance",
    category: ["Web / Software", "Python"],
    status: "Completed / Submitted",
    image: null,
    summary:
      "A feature-flag platform for controlled releases, targeting, analytics, and auditability.",
    features: [
      "Boolean, string and JSON-number flags",
      "REST API with Redis caching and invalidation",
      "User/group targeting and deterministic percentage rollouts",
      "Environment overrides and JSON-diff audit logs",
      "Evaluation analytics and stale-flag cleanup advisor",
      "Python SDK/middleware, tests, Docker, and React dashboard"
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "React",
      "Docker"
    ],
    contribution:
      "Individually developed the system. The final presentation/demo was delivered as a team.",
    scope:
      "Submitted through Infosys Springboard Virtual Internship 7.0. No public live demo is currently listed.",
    github: null,
    githubLabel: "GitHub link to be added"
  },

  {
    id: "nutriai",
    title: "NutriAI — Personal AI Nutrition Assistant",
    category: ["AI", "Python", "Web / Software"],
    status: "Deployed",
    image: null,
    summary:
      "An AI-powered nutrition assistant with chat, meal planning, profile tools, and nutrition estimates.",
    features: [
      "AI nutrition chat and diet planner",
      "Profile, BMI and calorie estimator",
      "Quick prompts and locally stored chat history",
      "Dark/light mode and responsive interface",
      "API keys managed through environment variables"
    ],
    stack: [
      "IBM watsonx.ai",
      "Llama 3.3",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Render"
    ],
    contribution:
      "Built individually as the IBM × Edunet Foundation AI & Cloud internship project.",
    scope:
      "Live demo is available. Nutrition information is educational and is not a substitute for professional medical advice.",
    github: "https://github.com/Yashveer005/NutriAI",
    demo: "https://nutriai-6nhd.onrender.com"
  },

  {
    id: "agriculture",
    title: "Seasonal Agriculture Performance Analysis",
    category: ["Data Analytics", "Python"],
    status: "Completed",
    image: null,
    summary:
      "Exploratory analysis of seasonal crop performance, environmental conditions, irrigation, costs, and profitability.",
    features: [
      "Analysis of 4,000 records across 8 states, 8 crops and 3 seasons",
      "Data cleaning, missing-value handling and exploratory analysis",
      "Seasonal, environmental, regional and economic comparisons",
      "Visualizations, correlation analysis, outlier review and recommendations",
      "Documented limitations and future ML ideas"
    ],
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Google Colab"
    ],
    contribution:
      "Individually completed as a VOIS × Edunet Foundation Data Analytics internship project.",
    scope:
      "Potential extensions include yield prediction, crop recommendations, profit prediction, and a web dashboard.",
    github:
      "https://github.com/Yashveer005/Seasonal-Agriculture-Performance-Analysis"
  },

  {
    id: "healthcare",
    title: "Healthcare Analytics for Doctor Visits",
    category: ["Data Analytics", "Python"],
    status: "Completed",
    image: null,
    summary:
      "Exploratory data analysis of 5,190 patient records to investigate patterns associated with doctor visits.",
    features: [
      "Data cleaning and exploratory analysis",
      "Correlation review for activity, illness, health, age and income",
      "Visual exploration using Python plotting libraries",
      "Interpretation that correlation does not establish causation"
    ],
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Google Colab"
    ],
    contribution:
      "Individually completed as a VOIS × Edunet Foundation internship project.",
    scope:
      "Further work could explore stronger statistical validation and clearer reporting for non-technical audiences.",
    github:
      "https://github.com/Yashveer005/Healthcare-Analytics-for-Doctor-Visits"
  },

  {
    id: "quickbite",
    title: "QuickBite — Online Food Ordering",
    category: ["Web / Software"],
    status: "Completed",
    image: "images/proj-quickbite.jpg",
    summary:
      "A multi-page food-ordering project with a PHP backend for cart and session handling.",
    features: [
      "Responsive multi-page interface",
      "Food selection and cart workflow",
      "PHP session handling",
      "Project structure suitable for local demonstration"
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    contribution: "BCA minor project developed individually.",
    scope: "Not currently presented as a live deployment.",
    github: "https://github.com/Yashveer005/QuickBite_Project"
  },

  {
    id: "codsoft",
    title: "CodSoft — Python Programming Tasks",
    category: ["Python"],
    status: "Completed",
    image: "images/proj-codsoft.jpg",
    summary:
      "A collection of Python mini-apps completed during a virtual programming internship.",
    features: [
      "To-Do List",
      "Password Generator",
      "Contact Book"
    ],
    stack: ["Python 3", "VS Code", "Git", "GitHub"],
    contribution: "Completed the assigned tasks individually.",
    scope: "Task-based internship work; no live demo is listed.",
    github: "https://github.com/Yashveer005/CODSOFT"
  },

  {
    id: "cognifyz",
    title: "Cognifyz — Python Development Tasks",
    category: ["Python"],
    status: "Completed",
    image: "images/proj-cognifyz.jpg",
    summary:
      "Ten Python tasks covering string operations, validation, simple algorithms, and file handling.",
    features: [
      "String reversal, temperature conversion and email validation",
      "Calculator and palindrome checker",
      "Guessing games and password-strength checker",
      "Fibonacci sequence and file manipulation"
    ],
    stack: ["Python 3", "VS Code", "Git", "GitHub"],
    contribution: "Completed ten task-based exercises individually.",
    scope: "No live demo is listed.",
    github: "https://github.com/Yashveer005/Cognifyz_Python_Internship"
  }
];


/* =========================================
   EXPERIENCE DATA
   ========================================= */

const experiences = [
  {
    date: "AUG — SEP 2026",
    org: "VOIS for Tech · Vodafone Idea Foundation · Edunet Foundation",
    title: "Data Analytics Internship",
    status: "Completed",
    description:
      "Completed the AICTE-supported VOIS for Tech University Engagement Program focused on Data Analytics. Developed two individual analysis projects and received the internship certificate.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Google Colab"
    ],
    projects: [
      "Seasonal Agriculture Performance Analysis",
      "Healthcare Analytics for Doctor Visits"
    ],
    certificate: "images/cert-vois-data-analytics.png"
  },

  {
    date: "AUG — SEP 2026",
    org: "IBM SkillsBuild · IBM Cloud · Edunet Foundation",
    title: "AI & Cloud Internship",
    status: "Completed",
    description:
      "Completed a four-week emerging-technologies internship covering Agentic AI, Cyber Security, Quantum Computing, IBM SkillsBuild and IBM Cloud. Built NutriAI as an individual project.",
    tags: [
      "IBM watsonx.ai",
      "AI",
      "Cloud",
      "Flask"
    ],
    projects: [
      "NutriAI — Personal AI Nutrition Assistant"
    ],
    certificate: "images/cert-ibm-edunet.jpg"
  },

  {
    date: "AUG 2026 — ONGOING",
    org: "Infosys Springboard · Virtual Internship 7.0 · Batch 3",
    title: "Virtual Internship — Feature Management System",
    status: "Ongoing",
    description:
      "Selected after prerequisite learning and a video-proctored assessment. Independently developed the Feature Management System; final presentation/demo was given as a team. Update this status when the internship is officially completed.",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "React",
      "Docker"
    ],
    projects: [
      "Feature Management System with Release Control Assistance"
    ]
  },

  {
    date: "JUL — AUG 2025",
    org: "NIIT Foundation × Cisco",
    title: "Cybersecurity with AI — Virtual Internship",
    status: "Completed",
    description:
      "Completed a four-week virtual internship with a practical secure wireless network setup project using Cisco Packet Tracer.",
    tags: [
      "Cybersecurity",
      "Networking",
      "Cisco Packet Tracer",
      "WPA2"
    ],
    projects: [
      "Secure Wireless Network Setup for TechNova Solutions"
    ]
  },

  {
    date: "JUL — AUG 2025",
    org: "Cognifyz Technologies",
    title: "Python Development Intern",
    status: "Completed",
    description:
      "Completed ten task-based Python development exercises individually, covering validation, logic, strings, and file manipulation.",
    tags: ["Python", "Problem Solving", "File Handling"],
    projects: ["Cognifyz — Python Development Tasks"]
  },

  {
    date: "JUL — AUG 2025",
    org: "CodSoft",
    title: "Python Programming Intern",
    status: "Completed",
    description:
      "Completed the assigned programming tasks individually, including a to-do list, password generator, and contact book.",
    tags: ["Python", "GitHub", "Utilities"],
    projects: ["CodSoft — Python Programming Tasks"]
  }
];


/* =========================================
   CERTIFICATE DATA
   ========================================= */

const certificates = [
  {
    title: "Cyber Security Associate Certification Programme",
    issuer: "Reliance Foundation Skilling Academy",
    category: "Cybersecurity",
    detail: "180-hour programme · completed May 2026",
    image: "images/cert-reliance-cyber.jpg",
    featured: true
  },
  {
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    detail: "Issued June 2025",
    image: "images/cert-cisco-analyst.jpg",
    featured: true
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    detail: "Course completion",
    image: null,
    featured: true
  },
  {
    title: "Lenovo LEAP NextGen Scholar Program — Cybersecurity",
    issuer: "Lenovo × BharatCares",
    category: "Cybersecurity",
    detail: "60+ hours · Grade A · issued 27 June 2026",
    image: null,
    featured: true
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    detail: "Issued January 2025",
    image: "images/cert-cisco-intro.jpg"
  },
  {
    title: "Getting Started with Cybersecurity",
    issuer: "IBM SkillsBuild",
    category: "Cybersecurity",
    detail: "Course badge",
    image: "images/cert-ibm-cyber.jpg"
  },
  {
    title: "Cybersecurity",
    issuer: "Infosys Springboard",
    category: "Cybersecurity",
    detail: "Course completion",
    image: "images/cert-infosys-cyber.jpg"
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte Australia · Forage",
    category: "Cybersecurity",
    detail: "Job simulation · July 2025",
    image: "images/cert-deloitte.jpg"
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata · Forage",
    category: "Cybersecurity",
    detail: "Job simulation · July 2025",
    image: "images/cert-tata.jpg"
  },
  {
    title: "Introduction to Critical Infrastructure Protection",
    issuer: "OPSWAT",
    category: "Cybersecurity",
    detail: "Completed; credential expired May 2025",
    image: "images/cert-opswat.jpg"
  },
  {
    title: "AI & Cloud Internship Certificate",
    issuer: "IBM SkillsBuild × Edunet Foundation × AICTE",
    category: "AI & Cloud",
    detail: "Completed 17 August – 11 September 2026",
    image: "images/cert-ibm-edunet.jpg"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    category: "AI & Cloud",
    detail: "Course completion",
    image: "images/cert-ibm-ai.jpg"
  },
  {
    title: "AWS / Cloud Course Completion",
    issuer: "Infosys Springboard",
    category: "AI & Cloud",
    detail: "Course completion; not an AWS certification exam",
    image: "images/cert-aws.jpg"
  },
  {
    title: "Generative AI Foundations",
    issuer: "upGrad × Microsoft",
    category: "AI & Cloud",
    detail: "Course completion",
    image: "images/cert-upgrad.jpg"
  },
  {
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    category: "AI & Cloud",
    detail: "Workshop certificate",
    image: "images/cert-be10x.jpg"
  },
  {
    title: "Data Visualization",
    issuer: "VOIS × Edunet Foundation",
    category: "Data",
    detail: "Issued August 2026",
    image: null
  },
  {
    title: "Creating Compelling Reports",
    issuer: "Cisco",
    category: "Development",
    detail: "Course completion",
    image: "images/cert-cisco-reports.jpg"
  },
  {
    title: "Career Edge — Young Professional",
    issuer: "TCS iON",
    category: "Development",
    detail: "Course completion",
    image: "images/cert-tcs.jpg"
  },
  {
    title: "Introduction to Accenture Job Simulation",
    issuer: "Accenture UK · Forage",
    category: "Other",
    detail: "Job simulation",
    image: "images/cert-accenture.jpg"
  },
  {
    title: "Digital Productivity",
    issuer: "NIIT Foundation",
    category: "Other",
    detail: "Course completion",
    image: "images/cert-niit.jpg"
  }
];


/* =========================================
   HELPER FUNCTIONS
   ========================================= */

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderTags(items = []) {
  return `
    <div class="project-tags">
      ${items.map(item => `<span>${escapeHTML(item)}</span>`).join("")}
    </div>
  `;
}


/* =========================================
   PROJECT CARDS & FILTERS
   ========================================= */

const featuredHost = document.getElementById("featuredProjects");
const projectHost = document.getElementById("allProjects");
const projectCount = document.getElementById("projectCount");

const featuredProjects = projects.filter(project => project.featured);

function projectCard(project, featured = false) {
  const image = project.image
    ? `<img src="${escapeHTML(project.image)}" alt="" loading="lazy">`
    : "";

  if (featured) {
    return `
      <article
        class="featured-project surface"
        tabindex="0"
        role="button"
        data-project="${project.id}"
        aria-label="Open details for ${escapeHTML(project.title)}">

        <div class="featured-art">
          ${image}
          <span class="art-index">
            ${project.id === "cybersentinel" ? "01" : "02"}
          </span>
        </div>

        <div class="featured-copy">
          <div class="project-topline">
            <span class="project-index">SECURITY / FEATURED</span>
            <span class="status-badge ${
              project.status === "Completed"
                ? "status-complete"
                : "status-inprogress"
            }">${escapeHTML(project.status)}</span>
          </div>

          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.summary)}</p>
          ${renderTags(project.stack.slice(0, 4))}

          <span class="project-open">Explore project ↗</span>
        </div>
      </article>
    `;
  }

  const number = String(projects.indexOf(project) + 1).padStart(2, "0");

  return `
    <article
      class="project-card surface"
      tabindex="0"
      role="button"
      data-project="${project.id}"
      aria-label="Open details for ${escapeHTML(project.title)}">

      <span class="project-index">${number} / PROJECT</span>

      <div class="project-topline">
        <span class="status-badge ${
          project.status.includes("In Development") ||
          project.status === "Ongoing"
            ? "status-inprogress"
            : "status-complete"
        }">${escapeHTML(project.status)}</span>
      </div>

      <h3>${escapeHTML(project.title)}</h3>
      <p>${escapeHTML(project.summary)}</p>
      ${renderTags(project.stack.slice(0, 4))}

      <span class="project-open">View details ↗</span>
    </article>
  `;
}

function renderProjects(filter = "All") {
  const filteredProjects = projects.filter(project =>
    filter === "All" || project.category.includes(filter)
  );

  projectHost.innerHTML = filteredProjects.length
    ? filteredProjects.map(project => projectCard(project)).join("")
    : `<p class="empty-state">No projects in this category yet.</p>`;

  projectCount.textContent = String(filteredProjects.length).padStart(2, "0");
}

featuredHost.innerHTML = featuredProjects
  .map(project => projectCard(project, true))
  .join("");

renderProjects();

document.getElementById("projectFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  document.querySelectorAll("#projectFilters .filter-button")
    .forEach(item => item.classList.toggle("active", item === button));

  renderProjects(button.dataset.filter);
});


/* =========================================
   MODAL HANDLING
   ========================================= */

const modal = document.getElementById("detailModal");
const modalContent = document.getElementById("modalContent");
let lastFocusedElement = null;

function openDialog(content) {
  lastFocusedElement = document.activeElement;
  modalContent.innerHTML = content;
  modal.showModal();
  document.getElementById("modalClose").focus();
}

function projectDetails(project) {
  const actions = [];

  if (project.github) {
    actions.push(`
      <a class="button button-primary"
         href="${escapeHTML(project.github)}"
         target="_blank"
         rel="noopener">View GitHub ↗</a>
    `);
  }

  if (project.demo) {
    actions.push(`
      <a class="button button-outline"
         href="${escapeHTML(project.demo)}"
         target="_blank"
         rel="noopener">Live demo ↗</a>
    `);
  }

  if (project.image) {
    actions.push(`
      <button class="button button-outline"
              data-image-preview="${escapeHTML(project.image)}">
        View screenshot
      </button>
    `);
  }

  if (project.githubLabel) {
    actions.push(`<span class="modal-meta">${escapeHTML(project.githubLabel)}</span>`);
  }

  return `
    <div class="modal-eyebrow">
      PROJECT / ${escapeHTML(project.status.toUpperCase())}
    </div>

    <h2 class="modal-title">${escapeHTML(project.title)}</h2>
    <p class="modal-description">${escapeHTML(project.summary)}</p>

    <div class="modal-layout">
      <div>
        <h4>Problem / overview</h4>
        <p class="modal-description">
          ${escapeHTML(project.problem || project.summary)}
        </p>

        <h4>Key features</h4>
        <ul>
          ${project.features.map(feature =>
            `<li>${escapeHTML(feature)}</li>`
          ).join("")}
        </ul>
      </div>

      <div>
        <h4>Technology stack</h4>
        ${renderTags(project.stack)}

        <h4 style="margin-top:22px">My contribution</h4>
        <p class="modal-description">
          ${escapeHTML(project.contribution || "Project work and documentation.")}
        </p>

        <h4 style="margin-top:22px">Next steps / scope</h4>
        <p class="modal-description">
          ${escapeHTML(project.scope || "See the repository for project details.")}
        </p>
      </div>
    </div>

    <div class="modal-actions">${actions.join("")}</div>
  `;
}

function openProject(projectId) {
  const project = projects.find(item => item.id === projectId);
  if (project) openDialog(projectDetails(project));
}

document.addEventListener("click", event => {
  const projectCardElement = event.target.closest("[data-project]");

  if (projectCardElement) {
    openProject(projectCardElement.dataset.project);
  }

  const imageButton = event.target.closest("[data-image-preview]");

  if (imageButton) {
    const imagePath = imageButton.dataset.imagePreview;

    openDialog(`
      <div class="modal-eyebrow">PROJECT IMAGE</div>
      <h2 class="modal-title">Project preview</h2>
      <img
        class="modal-certificate"
        src="${escapeHTML(imagePath)}"
        alt="Project screenshot preview">
    `);
  }
});

document.addEventListener("keydown", event => {
  const card = event.target.closest?.("[data-project]");

  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openProject(card.dataset.project);
  }
});


/* =========================================
   CERTIFICATE GALLERY
   ========================================= */

const certHost = document.getElementById("allCerts");
const featuredCertHost = document.getElementById("featuredCerts");

function certificateCard(certificate) {
  const image = certificate.image
    ? `<img src="${escapeHTML(certificate.image)}" alt="" loading="lazy">`
    : `<span class="cert-placeholder">YS / CERT</span>`;

  return `
    <article
      class="cert-card surface"
      tabindex="0"
      role="button"
      data-cert="${escapeHTML(certificate.title)}"
      aria-label="Preview ${escapeHTML(certificate.title)}">

      <div class="cert-thumb">${image}</div>

      <div class="cert-info">
        <h4>${escapeHTML(certificate.title)}</h4>
        <p>${escapeHTML(certificate.issuer)} · ${escapeHTML(certificate.category)}</p>
      </div>
    </article>
  `;
}

function renderCertificates(filter = "All") {
  const filtered = certificates.filter(certificate =>
    filter === "All" || certificate.category === filter
  );

  certHost.innerHTML = filtered.map(certificateCard).join("");
}

function renderFeaturedCertificates() {
  featuredCertHost.innerHTML = certificates
    .filter(certificate => certificate.featured)
    .slice(0, 6)
    .map(certificate => `
      <article
        class="cert-feature surface"
        tabindex="0"
        role="button"
        data-cert="${escapeHTML(certificate.title)}">

        <span class="cert-feature-mark">✳</span>

        <div>
          <h3>${escapeHTML(certificate.title)}</h3>
          <p>${escapeHTML(certificate.issuer)} · ${escapeHTML(certificate.detail)}</p>
        </div>
      </article>
    `).join("");
}

function certificateDetails(certificate) {
  const image = certificate.image
    ? `
      <img
        class="modal-certificate"
        src="${escapeHTML(certificate.image)}"
        alt="${escapeHTML(certificate.title)} certificate preview">
    `
    : `
      <div class="cert-placeholder" style="padding:40px;text-align:center">
        Certificate image can be added here
      </div>
    `;

  return `
    <div class="modal-eyebrow">
      CERTIFICATE / ${escapeHTML(certificate.category.toUpperCase())}
    </div>

    <h2 class="modal-title">${escapeHTML(certificate.title)}</h2>
    <p class="modal-description">${escapeHTML(certificate.issuer)}</p>
    <p class="modal-meta">${escapeHTML(certificate.detail || "Credential details")}</p>

    ${image}
  `;
}

function openCertificate(title) {
  const certificate = certificates.find(item => item.title === title);
  if (certificate) openDialog(certificateDetails(certificate));
}

renderFeaturedCertificates();
renderCertificates();

document.getElementById("certFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  document.querySelectorAll("#certFilters .filter-button")
    .forEach(item => item.classList.toggle("active", item === button));

  renderCertificates(button.dataset.filter);
});

document.addEventListener("click", event => {
  const certificateCardElement = event.target.closest("[data-cert]");

  if (certificateCardElement) {
    openCertificate(certificateCardElement.dataset.cert);
  }
});

document.addEventListener("keydown", event => {
  const card = event.target.closest?.("[data-cert]");

  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openCertificate(card.dataset.cert);
  }
});


/* =========================================
   EXPERIENCE TIMELINE
   ========================================= */

const timeline = document.getElementById("experienceTimeline");

timeline.innerHTML = experiences.map(experience => `
  <article class="timeline-item reveal">
    <div class="timeline-card surface">

      <div>
        <div class="timeline-date">${escapeHTML(experience.date)}</div>
        <div class="timeline-org">${escapeHTML(experience.org)}</div>
      </div>

      <div>
        <div class="project-topline">
          <h3>${escapeHTML(experience.title)}</h3>

          <span class="status-badge ${
            experience.status === "Ongoing"
              ? "status-inprogress"
              : "status-complete"
          }">${escapeHTML(experience.status)}</span>
        </div>

        <p>${escapeHTML(experience.description)}</p>

        <div class="timeline-tags">
          ${experience.tags.map(tag =>
            `<span>${escapeHTML(tag)}</span>`
          ).join("")}
        </div>

        ${
          experience.projects?.length
            ? `<p style="margin-top:12px;margin-bottom:0">
                 <strong style="color:var(--text);font-size:10px">
                   Project${experience.projects.length > 1 ? "s" : ""}:
                 </strong>
                 ${experience.projects.map(escapeHTML).join(" · ")}
               </p>`
            : ""
        }

        ${
          experience.certificate
            ? `<button
                 class="text-link"
                 style="border:0;background:none;padding:0;margin-top:12px;cursor:pointer"
                 data-cert-image="${escapeHTML(experience.certificate)}"
                 data-cert-title="${escapeHTML(experience.title)}">
                 View internship certificate ↗
               </button>`
            : ""
        }
      </div>

    </div>
  </article>
`).join("");

document.addEventListener("click", event => {
  const button = event.target.closest("[data-cert-image]");
  if (!button) return;

  openDialog(`
    <div class="modal-eyebrow">EXPERIENCE / CERTIFICATE</div>
    <h2 class="modal-title">${escapeHTML(button.dataset.certTitle)}</h2>
    <img
      class="modal-certificate"
      src="${escapeHTML(button.dataset.certImage)}"
      alt="${escapeHTML(button.dataset.certTitle)} certificate">
  `);
});


/* =========================================
   CLOSE MODAL
   ========================================= */

document.getElementById("modalClose").addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.close();
  }
});

modal.addEventListener("close", () => {
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
});


/* =========================================
   DARK / LIGHT THEME
   ========================================= */

const themeToggle = document.getElementById("themeToggle");

function updateThemeButton() {
  const isLight = document.documentElement.dataset.theme === "light";

  themeToggle.textContent = isLight ? "☾" : "☼";

  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );

  themeToggle.title = isLight
    ? "Switch to dark theme"
    : "Switch to light theme";
}

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "light"
      ? "dark"
      : "light";

  document.documentElement.dataset.theme = nextTheme;

  try {
    localStorage.setItem("ys-theme", nextTheme);
  } catch (error) {}

  updateThemeButton();
});

updateThemeButton();


/* =========================================
   MOBILE MENU
   ========================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("primaryNav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});


/* =========================================
   COPY EMAIL
   ========================================= */

document.getElementById("copyEmail").addEventListener("click", async () => {
  const feedback = document.getElementById("copyFeedback");
  const email = "yashveersingh0785@gmail.com";

  try {
    await navigator.clipboard.writeText(email);
    feedback.textContent = "Email copied to clipboard.";
  } catch (error) {
    feedback.textContent = `Email: ${email}`;
  }
});


/* =========================================
   FOOTER YEAR
   ========================================= */

document.getElementById("year").textContent = new Date().getFullYear();


/* =========================================
   ACTIVE NAV LINK
   ========================================= */

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...nav.querySelectorAll("a")];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.hash === `#${entry.target.id}`
          );
        });
      }
    });
  }, {
    rootMargin: "-35% 0px -55% 0px"
  });

  sections.forEach(section => observer.observe(section));
}
