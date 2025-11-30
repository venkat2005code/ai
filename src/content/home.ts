export type CtaLink = {
  label: string;
  href: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primary: CtaLink;
    secondary: CtaLink;
    highlights: string[];
  };
  logos: string[];
  features: {
    title: string;
    description: string;
    items: { title: string; description: string; icon: string }[];
  };
  metrics: {
    title: string;
    description: string;
    stats: { label: string; value: string; detail: string }[];
  };
  useCases: {
    title: string;
    description: string;
    items: { title: string; description: string; tag: string }[];
  };
  testimonials: {
    title: string;
    description: string;
    items: { quote: string; author: string; role: string }[];
  };
  cta: {
    title: string;
    description: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
};

export const homeOneContent: HomeContent = {
  hero: {
    eyebrow: "AI revenue co-pilot",
    title: "Scale decisions with the clarity of collaborative intelligence",
    description:
      "Monet unlocks a unified command center for finance, product, and GTM teams. Connect data, surface patterns, and push confident playbooks in hours, not quarters.",
    primary: { label: "Book a live tour", href: "/contact" },
    secondary: { label: "See platform in action", href: "/portfolio" },
    highlights: ["Workflow ready", "SOC2 & GDPR", "24/7 support"],
  },
  logos: ["Nebula", "PulseNine", "Aperture", "Cloudgrid", "Northwind", "Helix"],
  features: {
    title: "Operate every motion from a single intelligence layer",
    description:
      "Automations, experiments, and forecasting live together so teams can iterate faster with shared context.",
    items: [
      {
        title: "Dynamic playbooks",
        description:
          "Launch guided motions that adapt to pipeline shifts, pricing signals, and quota risk in real time.",
        icon: "⚡",
      },
      {
        title: "Insight fabric",
        description:
          "Blend product, billing, and CRM data with governed access controls and explainable AI summaries.",
        icon: "🧠",
      },
      {
        title: "Scenario sprints",
        description:
          "Model revenue outcomes side-by-side, layer assumptions, and share snapshots directly with leadership.",
        icon: "📈",
      },
    ],
  },
  metrics: {
    title: "Measurable lift across every launch",
    description:
      "Teams rely on Monet to surface clarity and move faster without sacrificing governance.",
    stats: [
      { label: "Cycle time", value: "-38%", detail: "Faster from insight to shipped play" },
      { label: "Revenue coverage", value: "+26%", detail: "Pipeline visibility across segments" },
      { label: "Adoption", value: "94%", detail: "Weekly active decision-makers" },
    ],
  },
  useCases: {
    title: "Purpose-built for modern operators",
    description:
      "Activate Monet across GTM, product, or finance pods with modular solutions.",
    items: [
      {
        title: "Strategic finance",
        description:
          "Consolidate billing, usage, and ERP data to reconcile forecasts daily and share trusted narratives.",
        tag: "Finance cloud",
      },
      {
        title: "Growth experiments",
        description:
          "Test new pricing or packaging with auto-generated guardrails and audience routing.",
        tag: "Product-led",
      },
      {
        title: "Customer success",
        description:
          "Spot churn risk early with intelligence that blends sentiment, utilization, and stakeholder heatmaps.",
        tag: "Customer link",
      },
    ],
  },
  testimonials: {
    title: "Trusted by operators at breakout companies",
    description:
      "Leaders bring Monet into exec reviews, board meetings, and daily standups.",
    items: [
      {
        quote:
          "Monet feels like an extra strategy partner in every pipeline review. We moved from debating data to aligning on action in one quarter.",
        author: "Mara Briggs",
        role: "CRO, LumenIQ",
      },
      {
        quote:
          "The automation layer cut three disconnected tools. Our finance pod now answers scenario questions live with the exec team.",
        author: "Theo Patel",
        role: "VP Finance, Alloy",
      },
    ],
  },
  cta: {
    title: "Bring Monet to your operating rhythm",
    description:
      "Schedule a collaborative session with our strategists and see how quickly teams can move with a shared intelligence layer.",
    primary: { label: "Plan a workshop", href: "/contact" },
    secondary: { label: "Download brief", href: "/faq" },
  },
};

export const homeTwoContent: HomeContent = {
  hero: {
    eyebrow: "Revenue experimentation OS",
    title: "Ship bold pricing moves with continuous learning",
    description:
      "Launch adaptive monetization programs with baked-in telemetry, approvals, and narrative-ready reporting for every stakeholder.",
    primary: { label: "Launch a sprint", href: "/contact" },
    secondary: { label: "Review success stories", href: "/portfolio" },
    highlights: ["Playbook templates", "Shared insights", "Rapid validation"],
  },
  logos: ["Orbit", "Modo", "Signalist", "Kepler", "Everbright", "Questline"],
  features: {
    title: "Everything you need to test, learn, and standardize",
    description:
      "Reusable experiment kits, automated approvals, and AI summaries keep cross-functional squads aligned.",
    items: [
      {
        title: "Experiment kits",
        description:
          "Spin up net-new monetization tests with prebuilt telemetry, guardrails, and alerting.",
        icon: "🧪",
      },
      {
        title: "Narrative engine",
        description:
          "Translate complex usage signals into board-ready stories with a single click.",
        icon: "📣",
      },
      {
        title: "Trust controls",
        description:
          "Granular governance ensures every team sees exactly what they need, when they need it.",
        icon: "🔐",
      },
    ],
  },
  metrics: {
    title: "Operational lift you can quantify",
    description:
      "Outcomes compound when teams learn together inside the same workspace.",
    stats: [
      { label: "Launch velocity", value: "4x", detail: "Experiments shipped per quarter" },
      { label: "Decision clarity", value: "98%", detail: "Leaders reporting higher confidence" },
      { label: "Time saved", value: "12h", detail: "Weekly manual reporting eliminated" },
    ],
  },
  useCases: {
    title: "Modular by design",
    description:
      "Deploy Monet where it matters most and expand with ready-made accelerators.",
    items: [
      {
        title: "Enterprise monetization",
        description:
          "Bundle approvals, redlines, and observability to help complex deals stay on script.",
        tag: "Sales ops",
      },
      {
        title: "Usage insights",
        description:
          "Detect hero features and lagging cohorts automatically and program responses instantly.",
        tag: "Product ops",
      },
      {
        title: "Executive briefing",
        description:
          "Auto-compose digestible readouts tailored to each functional leader every Monday.",
        tag: "Leadership",
      },
    ],
  },
  testimonials: {
    title: "Why modern operators rely on Monet",
    description:
      "Momentum builds when finance, product, and GTM share the same facts.",
    items: [
      {
        quote:
          "We finally have a living picture of revenue performance. Monet automates the prep work so our teams focus on decisions.",
        author: "Isla Warner",
        role: "COO, Stratus",
      },
      {
        quote:
          "Playbooks feel bespoke for every GTM squad yet run on the same backbone. That’s the leverage we needed.",
        author: "Devon Li",
        role: "SVP Growth, Meridian",
      },
    ],
  },
  cta: {
    title: "Ready to orchestrate smarter launches?",
    description:
      "Partner with our strategists to stand up your first Monet workspace in under two weeks.",
    primary: { label: "Talk with experts", href: "/contact" },
    secondary: { label: "View product map", href: "/about" },
  },
};
