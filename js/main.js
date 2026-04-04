(function () {
  var grid = document.getElementById("games-grid");
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var games = window.GAMES || [];
  if (!grid || !games.length) return;

  games.forEach(function (g) {
    var card = document.createElement("article");
    card.className = "game-card";
    card.setAttribute("role", "listitem");

    var media = document.createElement("div");
    media.className = "game-card-media";
    var img = document.createElement("img");
    img.src = g.image;
    img.alt = g.title + " screenshot or key art";
    img.loading = "lazy";
    img.decoding = "async";
    media.appendChild(img);

    var body = document.createElement("div");
    body.className = "game-card-body";

    var header = document.createElement("div");
    header.className = "game-card-header";

    var title = document.createElement("h3");
    title.className = "game-title";
    title.textContent = g.title;
    header.appendChild(title);

    if (g.published && g.playUrl) {
      var play = document.createElement("a");
      play.className = "game-play";
      play.href = g.playUrl;
      play.target = "_blank";
      play.rel = "noopener noreferrer";
      play.textContent = g.linkLabel || "Play";
      header.appendChild(play);
    } else {
      var badge = document.createElement("span");
      badge.className = "game-badge";
      badge.textContent = "In development";
      header.appendChild(badge);
    }

    var desc = document.createElement("p");
    desc.className = "game-desc";
    desc.textContent = g.description;

    body.appendChild(header);
    body.appendChild(desc);

    var metaParts = [];
    if (g.role) metaParts.push(g.role);
    if (g.tech) metaParts.push(g.tech);
    if (metaParts.length) {
      var ul = document.createElement("ul");
      ul.className = "game-meta";
      metaParts.forEach(function (part) {
        var li = document.createElement("li");
        li.textContent = part;
        ul.appendChild(li);
      });
      body.appendChild(ul);
    }

    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);
  });
})();
