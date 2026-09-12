/**
 * Public site config — NO Apps Script URL here (stays in Cloudflare Worker only).
 */
window.APP_CONFIG = {
  brandTitle: "kaerii.cfd",
  brandLogo: "",
  domains: ["kaerii.cfd"],
  defaultPrefix: "",
  defaultPassword: "Ryshie23!!",

  // OWNER ONLY — never give to Person 1/2/3. Required to change unlock password.
  ownerPin: "Ryshie2008",

  contactAdminLabel: "Contact Admin",
  contactAdminLink: "https://t.me/grashiex",

  footerName: "GRASHIEX",
  footerLink: "https://t.me/grashiex",
  footerYear: 2026,

  // Same-origin Worker route (Cloudflare: kaerii.cfd/api* → Worker)
  // Or full workers.dev URL if you prefer.
  apiUrl: "/api",

  // Leave empty on public sites — use Worker GAS_WEBAPP_URL instead
  googleScriptUrl: "",
  demoMode: false,

  sessionKey: "webmail_session_ok",
  settingsKey: "webmail_settings",
  themeKey: "webmail_theme",
  customPaletteKey: "webmail_custom_palette",
};
