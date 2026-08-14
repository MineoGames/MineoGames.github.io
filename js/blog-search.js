/*
 * Blog search. Filters the cards already in the DOM.
 *
 * Cost control: the searchable text of each card is read once at startup and
 * kept folded in an array. Reading textContent on every keystroke would make
 * each one cost a pass over the whole list, and matching would then compete
 * with layout instead of running off it.
 */
(function () {
  "use strict";

  var form = document.querySelector("[data-post-search]");
  var grid = document.querySelector(".post-grid");
  if (!form || !grid) return;

  var input = form.querySelector(".post-search__input");
  var counter = form.querySelector("[data-search-count]");
  var label = form.querySelector("[data-search-label]");
  var cards = Array.prototype.slice.call(grid.querySelectorAll(".post-card"));
  if (!input || !cards.length) return;

  // Accent folding, so "requete" finds "requête". The combining-mark range is
  // built from char codes rather than written literally: as source characters
  // they are invisible, and any tool that renormalises the file would eat them.
  var COMBINING_MARKS = new RegExp(
    "[" + String.fromCharCode(0x300) + "-" + String.fromCharCode(0x36f) + "]",
    "g"
  );

  function fold(value) {
    var lower = String(value).toLowerCase();
    try {
      return lower.normalize("NFD").replace(COMBINING_MARKS, "");
    } catch (e) {
      return lower;
    }
  }

  var haystack = cards.map(function (card) {
    return fold(card.textContent.replace(/\s+/g, " "));
  });

  var strings = {
    one: form.getAttribute("data-count-one"),
    many: form.getAttribute("data-count-many"),
    empty: form.getAttribute("data-empty")
  };

  label.textContent = form.getAttribute("data-label");
  input.setAttribute("placeholder", form.getAttribute("data-placeholder"));
  input.setAttribute("aria-label", form.getAttribute("data-label"));
  form.hidden = false;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  function report(shown) {
    if (shown === 0) {
      counter.textContent = strings.empty;
      return;
    }
    var template = shown === 1 ? strings.one : strings.many;
    counter.textContent = template.replace("{n}", shown);
  }

  function apply() {
    loadIndex(); // covers paste and autofill, which reach input without a focus
    var terms = fold(input.value).split(/\s+/).filter(Boolean);

    if (!terms.length) {
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("is-filtered-out");
      }
      counter.textContent = "";
      return;
    }

    var shown = 0;
    for (var j = 0; j < cards.length; j++) {
      var text = haystack[j];
      var match = true;
      for (var k = 0; k < terms.length; k++) {
        if (text.indexOf(terms[k]) === -1) {
          match = false;
          break;
        }
      }
      cards[j].classList.toggle("is-filtered-out", !match);
      if (match) shown++;
    }
    report(shown);
  }

  /*
   * Full text lives in a separate index, fetched the first time the field is
   * touched. Putting it in the page would have doubled the weight of the blog
   * index for every visitor, most of whom never search; this way it costs
   * nothing until someone does. Until it lands, the card text above already
   * answers — the index only widens the match.
   */
  var indexUrl = form.getAttribute("data-index");
  var indexState = "idle";

  function absorb(entries) {
    var byUrl = {};
    for (var i = 0; i < entries.length; i++) {
      byUrl[entries[i].u] = entries[i].t;
    }
    for (var j = 0; j < cards.length; j++) {
      var link = cards[j].querySelector(".post-card__link");
      var body = link && byUrl[link.getAttribute("href")];
      if (body) haystack[j] += " " + fold(body);
    }
  }

  function loadIndex() {
    if (indexState !== "idle" || !indexUrl || !window.fetch) return;
    indexState = "loading";
    fetch(indexUrl)
      .then(function (response) {
        return response.ok ? response.json() : null;
      })
      .then(function (entries) {
        if (!entries) {
          indexState = "failed";
          return;
        }
        absorb(entries);
        indexState = "ready";
        apply(); // re-run whatever is typed, now against the full text
      })
      .catch(function () {
        indexState = "failed";
      });
  }

  input.addEventListener("focus", loadIndex);
  input.addEventListener("input", apply);

  // Escape clears, which is what a search field is expected to do.
  input.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      input.value = "";
      apply();
    }
  });
})();
