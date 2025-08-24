document.addEventListener("DOMContentLoaded", () => {
  const giftBox = document.getElementById("giftBox");
  const loveLetter = document.getElementById("loveLetter");

  giftBox.addEventListener("click", () => {
    giftBox.classList.add("open");
    setTimeout(() => {
      loveLetter.classList.remove("hidden");
    }, 800); // show letter after lid opens
  });
});
