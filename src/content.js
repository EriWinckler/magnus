// All copy shown on the site. Text comes from Eridan's reviewed resume and its Backend / Platform
// variants; the About summaries are those paragraphs split into an intro and bullets, with no new
// facts or claims. Do not paraphrase it here.

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/eridan-winckler",
  github: "https://github.com/EriWinckler",
  email: "efwinckler@gmail.com",
};

// Google Drive "anyone with the link" URLs. A variant whose URL is null falls back to `default`.
export const RESUME_URLS = {
  default: "https://drive.google.com/file/d/1j88L68SdmxFCfw7gL0LCt7gj7YNQPZqP/view?usp=sharing",
  backend: null,
  platform: null,
};

// Copy that changes with the ?cv= link parameter.
export const VARIANTS = {
  default: {
    headline:
      "Backend & Platform Engineer: Java/Spring Boot, ERP integrations, Ansible, Docker, GitLab CI/CD, AWS",
    intro:
      "Brazil-based backend and platform engineer with four-plus years of professional Java and Spring Boot development (Jun 2022 to present) on a fully remote US team.",
    highlights: [
      "Builds enterprise content management (ECM, ELO Digital Office) and ERP integration platforms and the automation that provisions, deploys, and releases them (Ansible, Docker, GitLab CI/CD, AWS).",
      "Turned a ~50-step server setup into a single Ansible run.",
      "Authored the CI/CD recommendation, adopted May 2026, that is moving the company from Jenkins to GitLab.",
      "Delivers customer projects end to end, from bare-VM install to production incident response.",
      "Documents for handover by default (65 Confluence pages, 22 decision records).",
    ],
  },
  backend: {
    headline: "Backend Engineer | Java 17/21, Spring Boot, REST APIs, ERP Integrations, Docker, AWS",
    intro:
      "Brazil-based backend engineer with four-plus years of professional Java and Spring Boot development (Jun 2022 to present) on a fully remote US team.",
    highlights: [
      "Builds Java/Spring Boot services, including a Testcontainers-tested sync service feeding an AWS Bedrock knowledge base.",
      "Maintains REST API integrations between enterprise content management (ECM, ELO Digital Office) and ERP/SaaS platforms (Business Central, QuickBooks Online, SAP Business One, DocuSign).",
      "Builds the automation that provisions, deploys, and releases the platform (Ansible, Docker, GitLab CI/CD, AWS).",
      "Authored the CI/CD recommendation, adopted May 2026, moving the company from Jenkins to GitLab.",
      "Delivers customer projects end to end, from bare-VM install to production incident response.",
      "Documents for handover by default (65 Confluence pages, 22 decision records).",
    ],
  },
  platform: {
    headline:
      "Platform / DevOps Engineer | Ansible (IaC), GitLab CI/CD, Docker, AWS, Linux, Bash, Java",
    intro:
      "Brazil-based platform and DevOps engineer on a fully remote US team (Jun 2022 to present), with four-plus years of professional Java and Spring Boot development.",
    highlights: [
      "Automates how enterprise content management (ECM, ELO Digital Office) and ERP integration platforms are provisioned, deployed, and released: infrastructure as code with Ansible, GitLab CI/CD pipelines, Docker, Linux administration, and AWS.",
      "Turned a ~50-step server setup into a single Ansible run.",
      "Authored the CI/CD recommendation, adopted May 2026, that is moving the company from Jenkins to GitLab.",
      "Delivers customer projects end to end, from bare-VM install to production incident response.",
      "Documents for handover by default (65 Confluence pages, 22 decision records).",
    ],
  },
};

const VARIANT_KEYS = ["backend", "platform"];

/**
 * Picks the copy for a ?cv= link parameter. Only whitelisted keys are honored; anything else,
 * including a missing parameter, gives the default. The parameter value is never rendered.
 */
export function selectVariant(search, resumeUrls = RESUME_URLS) {
  const requested = new URLSearchParams(search).get("cv")?.trim().toLowerCase();
  const key = VARIANT_KEYS.includes(requested) ? requested : "default";
  return {
    key,
    ...VARIANTS[key],
    resumeUrl: resumeUrls[key] ?? resumeUrls.default,
  };
}

export const CONTENT = {
  name: "Eridan Winckler",
  location: "Brazil | Remote, UTC-3, overlaps US Eastern business hours",
  contactLocation: "Brazil, remote (UTC-3)",
  experience: {
    employer: "Ovitas Inc.",
    employerLocation: "Burlington, MA, USA (fully remote)",
    roles: [
      {
        title: "Software Engineer",
        dates: "Jun 2024 - Present",
        bullets: [
          "Replaced a ~50-step manual environment setup with a 13-role Ansible provisioning system (configuration management and Linux administration as code) that takes a bare AWS Linux VM to a working ECM and integration platform in a single run and ends with a ~60-check verification playbook; ships as a Docker image so operators need no local Ansible, Java, or Python. Rebuilt the deployment tool it runs into a modular, rerunnable phase orchestrator.",
          "Authored the CI/CD recommendation that set the company's migration from Jenkins to GitLab (adopted May 2026); registered the company's first GitLab runner and shipped its first three pipelines: environment configuration sync, sprint-boundary schema sync, and package build/publish with drift detection. Owned release engineering: Python release automation that generates Confluence release notes from Jira sprints, plus the version, documentation, and security-scan gates.",
          "Built a Java 17 / Spring Boot master-data sync service replicating SAP-fed SQL Server data to JSON for an AWS Bedrock knowledge base: read-only against the customer schema, verified crash recovery, ~8,000 rows/second measured, 34 Testcontainers integration tests.",
          "Sole-authored a one-command local platform stack (~11 Docker containers behind an Apache reverse proxy with TLS, up in ~25 minutes on a laptop), built to end contention for shared VPN-only dev VMs; its customer profiles reproduce a specific customer's environment with no code changes.",
          "Maintained and extended third-party REST API integrations with ERP/SaaS platforms: Dynamics 365 Business Central (OAuth2, OData incremental sync), QuickBooks Online, SAP Business One, DocuSign, and WordPress publishing.",
        ],
      },
      {
        title: "Junior Software Engineer",
        dates: "Jun 2022 - Jun 2024",
        bullets: [
          "Eliminated a codebase-wide class of concurrency errors (ConcurrentModificationException from multi-threaded SDK connections in plugins) by designing a shared Java connection wrapper and refactoring 283 files across every module and plugin of a large multi-module Java platform.",
          "Replaced hand-run deployment steps with the platform's first Java deployment tool (ServiceManager, keystore generation and comparison, YAML generation with automatic backups; 83 files), still in use today as a phase of the Ansible provisioning system.",
          "Made Docker the standard deployment model for the Java integration services: containerized them and drove adoption, documented as a 14-page program.",
        ],
      },
    ],
  },
  // Self-rated by Eridan (2026-11-18), shown as bars in this order.
  skillBars: [
    { label: "Java", value: 95 },
    { label: "Spring Boot", value: 90 },
    { label: "GitLab CI/CD", value: 85 },
    { label: "Linux", value: 85 },
    { label: "Docker", value: 80 },
    { label: "Ansible", value: 80 },
    { label: "AWS", value: 80 },
    { label: "SQL", value: 80 },
  ],
  skillGroups: [
    {
      label: "Programming Languages",
      items: "Java 21, Java 17, Python, JavaScript, TypeScript, Bash, SQL",
    },
    {
      label: "Backend",
      items:
        "Spring Boot, Spring WebFlux (WebClient), R2DBC, REST APIs, OAuth2, webhooks, OSGi plugins, Apache Tomcat, Maven, Gradle, microservices",
    },
    {
      label: "DevOps & CI/CD",
      items:
        "Ansible (configuration management, infrastructure as code), GitLab CI/CD, Jenkins, Docker, Docker Compose, Git, YAML, configuration as code, Windows Server and Windows containers",
    },
    {
      label: "Cloud & Infrastructure",
      items:
        "AWS (EC2, S3, CloudWatch, Lambda, Bedrock knowledge bases), Linux administration (Amazon Linux 2023, Ubuntu), Apache HTTP Server (reverse proxy), TLS/SSL, Certbot/Let's Encrypt",
    },
    {
      label: "Databases & Search",
      items: "PostgreSQL, Microsoft SQL Server, MySQL, DynamoDB, Elasticsearch",
    },
    {
      label: "AI Tooling",
      items: "Model Context Protocol (MCP) server development, Claude Code custom commands, OpenAI API",
    },
    {
      label: "Testing, Process & Docs",
      items:
        "Unit tests and integration tests (JUnit, Testcontainers), mutation testing, Agile/Scrum, Jira, Confluence, MkDocs, secrets management (Jasypt, 1Password)",
    },
  ],
  education: [
    {
      school: "Uninter International",
      course: "B.S. in Software Engineering",
      years: "2019 - 2022",
      description:
        "Bachelor's degree covering software engineering principles and the full software development life cycle.",
    },
    {
      school: "Pontifícia Universidade Católica do Paraná (PUCPR)",
      course: "Law studies",
      years: "2008 - 2013",
    },
  ],
  certifications: [
    {
      title: "Model Context Protocol",
      issuer: "Anthropic Academy",
      date: "Completed in Apr 2026",
      url: "https://verify.skilljar.com/c/dxo6ua4davyk",
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic Academy",
      date: "Completed in Apr 2026",
      url: "https://verify.skilljar.com/c/jvr3656mcjmz",
    },
    {
      title: "Building with the Claude API",
      issuer: "Anthropic Academy",
      date: "Completed in Apr 2026",
      url: "https://verify.skilljar.com/c/tbfctmq6tqe9",
    },
    {
      title: "Agent Skills",
      issuer: "Anthropic Academy",
      date: "Completed in Mar 2026",
      url: "https://verify.skilljar.com/c/86mxkd2hz57a",
    },
  ],
  contactText: "The best way to reach me is by email or on LinkedIn.",
};
