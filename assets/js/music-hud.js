
(function () {
  var toggle = document.getElementById("ffMusicToggle");
  var openSpotify = document.getElementById("ffOpenSpotify");
  var drawer = document.getElementById("ffSpotifyDrawer");

  if (!toggle || !openSpotify || !drawer) return;

  toggle.addEventListener("click", function () {
    drawer.classList.toggle("is-open");
    toggle.textContent = drawer.classList.contains("is-open") ? "Hide" : "Play";
  });

  openSpotify.addEventListener("click", function () {
    window.open("https://open.spotify.com/track/720wnQkeYLjOoVpUALmoMv", "_blank", "noopener");
  });
})();
