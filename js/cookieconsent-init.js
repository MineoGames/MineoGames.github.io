// Moved out from inline script
document.addEventListener("DOMContentLoaded", function () {
  if (typeof cookieconsent !== "undefined" && cookieconsent.run) {
    cookieconsent.run({
      notice_banner_type: "none",
      consent_type: "none",
      palette: "dark",
      language: "en",
      page_load_consent_levels: ["strictly-necessary", "tracking"],
      notice_banner_reject_button_hide: true,
      preferences_center_close_button_hide: false,
      page_refresh_confirmation_buttons: false,
    });
  }
});
