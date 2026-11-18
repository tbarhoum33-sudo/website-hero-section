
const exploreBtn = document.getElementById("exploreBtn");
const features = document.getElementById("features");

exploreBtn.addEventListener("click", () => {
  features.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
