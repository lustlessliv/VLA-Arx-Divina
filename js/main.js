(function () {
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* Lambang & banner */
  var tplFor = { crest: "tpl-crest", bannerLeft: "tpl-banner", bannerRight: "tpl-banner" };
  document.querySelectorAll("[data-slot]").forEach(function (el) {
    var key = el.getAttribute("data-slot");
    var url = ASSETS[key];
    el.innerHTML = url
      ? '<img src="' + esc(url) + '" alt="' + esc(key) + '" style="width:100%;height:auto">'
      : document.getElementById(tplFor[key]).innerHTML;
  });

  /* Tombol link beranda */
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var url = LINKS[a.getAttribute("data-link")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    else { a.classList.add("off"); a.removeAttribute("href"); a.title = "Link belum diisi"; }
  });

  /* Castellan */
  function chip(label, url) {
    return url
      ? '<a class="chip" href="' + esc(url) + '" target="_blank" rel="noopener">' + label + "</a>"
      : '<span class="chip off" title="Link belum diisi">' + label + "</span>";
  }
  function member(m) {
    var on = String(m.status || "").toLowerCase() === "active";
    return '<div class="member"><div class="avatar">' + esc(String(m.name).charAt(0)) + "</div>" +
      '<div class="m-info"><b>' + esc(m.name) + "</b>" + (m.sub ? ' <span class="sub">· ' + esc(m.sub) + "</span>" : "") +
      '<div class="m-id">ID ' + esc(m.id || "-") + "</div>" +
      '<div class="status' + (on ? " on" : "") + '">' + esc(m.status || "-") + "</div></div>" +
      '<div class="m-links">' + chip("WA", m.wa) + chip("Dc", m.dc) + "</div></div>";
  }
  function position(p) {
    var body = p.members && p.members.length
      ? '<div class="members">' + p.members.map(member).join("") + "</div>"
      : '<div class="empty">Belum terisi · segera hadir</div>';
    return '<div class="panel pos"><div class="pos-head"><span class="tag">' + esc(p.tag) + "</span><h3>" +
      esc(p.role) + "</h3><p>" + esc(p.desc) + "</p></div>" + body + "</div>";
  }
  document.getElementById("staff-root").innerHTML = STAFF.map(function (t) {
    return '<div class="tier' + (t.boxed ? " tier-box panel" : "") + '"><h3 class="sec-title">' + esc(t.tier) + "</h3>" +
      (t.desc ? '<p class="tier-desc">' + esc(t.desc) + "</p>" : "") +
      '<div class="grid">' + t.positions.map(position).join("") + "</div></div>";
  }).join("");

  /* Pindah halaman lewat #hash */
  var names = ["beranda", "lore", "castellan", "system", "uniform", "chronicles"];
  function show(h) {
    if (names.indexOf(h) === -1) h = "beranda";
    names.forEach(function (n) {
      var el = document.getElementById("p-" + n);
      if (el) el.hidden = n !== h;
    });
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === h) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
  }
  function fromHash() { return (location.hash || "").replace("#", ""); }

  /* Klik menu: ganti halaman langsung lewat JS (tidak bergantung pada #hash,
     jadi tetap jalan di preview/iframe yang memblokir navigasi hash) */
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var h = a.getAttribute("href").slice(1);
    if (names.indexOf(h) === -1) return;
    e.preventDefault();
    show(h);
    try { history.replaceState(null, "", "#" + h); } catch (err) {}
  });
  window.addEventListener("hashchange", function () { show(fromHash()); });
  show(fromHash());
})();
