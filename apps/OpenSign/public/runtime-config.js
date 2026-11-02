// Goal Migration deployment branding.
 // Keep credentials and private keys out of this public browser configuration.
window.RUNTIME_CONFIG = {
  schemaVersion: 1,
  brandKey: "goal-migration",
  productName: "Goal Migration",
  metaDescription: "Secure document signing for Goal Migration clients.",
  environment: "production",
  region: "australia",
  announcement: null,
  assets: {
    logoUrl: "/goal-migration-logo.svg",
    darkLogoUrl: "/goal-migration-logo-dark.svg",
    faviconUrl: "/goal-migration-logo.svg",
    fontCssUrl: "",
    pdfFontUrl: ""
  },
  theme: {
    light: {
      primary: "#013b85",
      "primary-content": "#ffffff",
      secondary: "#0b2347",
      "secondary-content": "#ffffff",
      accent: "#2f6fbd",
      "accent-content": "#ffffff",
      neutral: "#0b2347",
      "neutral-content": "#ffffff",
      "base-100": "#ffffff",
      "base-200": "#f4f7fb",
      "base-300": "#e6edf5",
      "base-content": "#17243a"
    },
    dark: {
      primary: "#5d9bff",
      "primary-content": "#071a33",
      secondary: "#9abfff",
      "secondary-content": "#071a33",
      accent: "#75aaff",
      "accent-content": "#071a33",
      neutral: "#d8e5f7",
      "neutral-content": "#071a33",
      "base-100": "#101a2b",
      "base-200": "#17243a",
      "base-300": "#253550",
      "base-content": "#f5f8ff"
    },
    emailAccent: "#013b85"
  },
  urls: {
    app: "https://sign.goalmigration.com",
    api: "",
    publicProfile: "",
    github: "",
    docs: "",
    support: "mailto:info@goalmigration.com",
    terms: "",
    privacy: "",
    sandbox: ""
  },
  regionTargets: [],
  features: {
    hostedSignup: false,
    regionSelector: false,
    appSwitcher: false,
    publicProfiles: false,
    embedding: false,
    googleAuth: false,
    dropbox: false,
    passkeys: false,
    sso: false,
    openSignDocs: false,
    openSignSocials: false,
    trialHandoff: false
  },
  analytics: {
    gtmId: "",
    googleTagIds: []
  },
  auth: {
    googleClientId: "",
    dropboxAppKey: "",
    googleAuthCallbackUrl: "",
    googleDriveCallbackUrl: "",
    ssoAuthorizationUrl: "",
    ssoAudience: "",
    ssoCallbackUrl: "",
    webAuthnRpId: "",
    webAuthnOrigins: []
  },
  billing: {
    provider: "stripe",
    catalogKey: "goal-migration"
  }
};
