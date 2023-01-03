// Dark Mode
let sunIcon = document.querySelector(".sun");
let moonIcon = document.querySelector(".moon");
let setTheme = document.body;
let IconToggleDark = document.querySelector(".toggleDark");
IconToggleDark.addEventListener("click", () => {
  setTheme.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
if (localStorage.getItem("theme") === "dark") {
  setTheme.classList.add("dark");
  setTheme.style.transition = ".8s";
  sunIcon.style.opacity = "1";
  moonIcon, (style.opacity = "0");
}
