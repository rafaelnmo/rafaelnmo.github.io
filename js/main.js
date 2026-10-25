// Small progressive enhancements. The site works fully without JS.
(function () {
    var root = document.documentElement;

    // Theme toggle (initial theme is set by the inline script in <head>)
    var themeBtn = document.querySelector(".theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            var isDark = root.getAttribute("data-theme") === "dark" ||
                (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
            var next = isDark ? "light" : "dark";
            root.setAttribute("data-theme", next);
            try { localStorage.setItem("theme", next); } catch (e) {}
        });
    }

    // Mobile menu
    var navBtn = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav__links");
    if (navBtn && navLinks) {
        navBtn.addEventListener("click", function () {
            var open = navLinks.classList.toggle("is-open");
            navBtn.setAttribute("aria-expanded", open ? "true" : "false");
        });
        navLinks.addEventListener("click", function (e) {
            if (e.target.tagName === "A") {
                navLinks.classList.remove("is-open");
                navBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Header border once the page scrolls
    var header = document.querySelector(".site-header");
    if (header) {
        var onScroll = function () {
            header.classList.toggle("is-scrolled", window.scrollY > 8);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Reveal on scroll
    var items = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -8% 0px" });
        items.forEach(function (el) { io.observe(el); });
    } else {
        items.forEach(function (el) { el.classList.add("is-visible"); });
    }

    // Topic filters on the research page
    var filters = document.querySelectorAll(".filters button");
    filters.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var topic = btn.getAttribute("data-filter");
            filters.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
            document.querySelectorAll("[data-topic]").forEach(function (card) {
                var match = topic === "all" || card.getAttribute("data-topic").split(" ").indexOf(topic) !== -1;
                card.hidden = !match;
            });
        });
    });

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
})();
