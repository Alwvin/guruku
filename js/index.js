// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Location Dropdown
const locationBtn = document.getElementById("locationBtn");
const locationMenu = document.getElementById("locationMenu");

locationBtn.addEventListener("click", () => {
  locationMenu.classList.toggle("hidden");
});

locationMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    locationBtn.querySelector("span").textContent = item.textContent;
    locationMenu.classList.add("hidden");
  });
});

// Filter Guru
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".teacher-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => {
      b.classList.remove("bg-purple-800", "text-white");
      b.classList.add("bg-gray-200");
    });

    btn.classList.add("bg-purple-800", "text-white");
    btn.classList.remove("bg-gray-200");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      card.style.display =
        filter === "all" || card.dataset.category === filter ? "block" : "none";
    });
  });
});
