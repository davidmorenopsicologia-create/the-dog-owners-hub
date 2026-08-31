(function () {
  var STORAGE_KEY = "tdoh_cookie_consent"; // { choice: "accepted"|"rejected", ts: ISO string }
  var basePrefix = document.body.getAttribute("data-base") || "";

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setConsent(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice: choice, ts: new Date().toISOString() }));
    } catch (e) {}
    window.tdohConsent = choice; // exposed so future ad scripts can check window.tdohConsent === "accepted"
    document.dispatchEvent(new CustomEvent("tdoh-consent-change", { detail: { choice: choice } }));
  }

  function buildBanner() {
    var el = document.createElement("div");
    el.id = "tdoh-cookie-banner";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-live", "polite");
    el.setAttribute("aria-label", "Cookie notice");
    el.innerHTML =
      '<div class="tdoh-cookie-inner">' +
      '<p>We use cookies for basic analytics and, once ad partners are active, to show relevant advertising (including through Google AdSense). You can accept all cookies or reject non-essential ones. See our <a href="' + basePrefix + 'privacy-policy.html">Privacy Policy</a>.</p>' +
      '<div class="tdoh-cookie-actions">' +
      '<button type="button" class="tdoh-btn tdoh-btn-ghost" data-tdoh-action="reject">Reject non-essential</button>' +
      '<button type="button" class="tdoh-btn tdoh-btn-solid" data-tdoh-action="accept">Accept all</button>' +
      "</div></div>";
    document.body.appendChild(el);

    el.addEventListener("click", function (ev) {
      var action = ev.target && ev.target.getAttribute && ev.target.getAttribute("data-tdoh-action");
      if (!action) return;
      setConsent(action === "accept" ? "accepted" : "rejected");
      el.classList.add("tdoh-cookie-hide");
      window.setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 300);
    });

    return el;
  }

  function showBanner() {
    if (document.getElementById("tdoh-cookie-banner")) return;
    window.requestAnimationFrame ? window.requestAnimationFrame(buildBanner) : buildBanner();
  }

  var existing = getConsent();
  if (existing && (existing.choice === "accepted" || existing.choice === "rejected")) {
    window.tdohConsent = existing.choice;
  } else {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showBanner);
    } else {
      showBanner();
    }
  }

  // Lets any page add a "Manage cookie preferences" link that reopens the banner.
  document.addEventListener("click", function (ev) {
    var trigger = ev.target && ev.target.closest && ev.target.closest("[data-tdoh-manage-cookies]");
    if (trigger) {
      ev.preventDefault();
      showBanner();
    }
  });
})();
