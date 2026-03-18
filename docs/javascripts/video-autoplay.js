// Force autoplay on all videos
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("video[autoplay]").forEach(function(video) {
    video.muted = true;
    video.play().catch(function() {});
  });
});
// Also handle MkDocs instant navigation
document.addEventListener("DOMContentSwitch", function() {
  document.querySelectorAll("video[autoplay]").forEach(function(video) {
    video.muted = true;
    video.play().catch(function() {});
  });
});
