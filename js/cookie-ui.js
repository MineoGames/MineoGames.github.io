// Small UI/localStorage handlers moved out of head
document.addEventListener("DOMContentLoaded", function () {
  try {
    var consentBox = document.querySelector(".cookie-consent");
    if (!consentBox) return;
    if (localStorage.getItem("cookieConsent") === "true") {
      consentBox.style.display = "none";
      return;
    }
    var cookieButtons = document.querySelectorAll(
      "#cookie-consent-btn, #open_preferences_center"
    );
    cookieButtons.forEach(function (box) {
      box.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "true");
        consentBox.style.display = "none";
      });
    });
  } catch (e) {
    // fail silently if DOM structure differs
    console.error(e);
  }
});
