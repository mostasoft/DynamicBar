const footerLinks = document.querySelectorAll('.footer-link');
const activeSection = document.getElementById('activeSection');
const cardGrid = document.getElementById('cardGrid');
const loader = document.getElementById('loader');

// Tab data
const data = {
  "Essentials": [
    { title: "Campus Store", desc: "Overview", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=60" },
    { title: "Book Shop", desc: "Directions", img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=600&q=60" },
    { title: "Stationery", desc: "Directions", img: "/Images/Bars/download.jpg" },
    { title: "Stationery", desc: "Directions", img: "/Images/Bars/download.jpg" },
    { title: "Stationery", desc: "Directions", img: "/Images/Bars/download.jpg" },
    { title: "Stationery", desc: "Directions", img: "/Images/Bars/Infosys.Electronic.City.Cafeteria.jpg" },
  ],
  "Resources": [
    { title: "Library", desc: "Overview", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=60" },
    { title: "Computer Lab", desc: "Access Info", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=60" },
    { title: "Media Center", desc: "Services", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=60" },
    { title: "Media Center", desc: "Services", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=60" },
    { title: "Media Center", desc: "Services", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=60" },
    { title: "Media Center", desc: "Services", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=60" },
  ],
  "Viewpoints": [
    { title: "Lake View", desc: "Directions", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60" },
    { title: "Hilltop Point", desc: "Overview", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60" },
    { title: "Sunset Deck", desc: "Directions", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60" },
    { title: "Sunset Deck", desc: "Directions", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60" },
    { title: "Sunset Deck", desc: "Directions", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60" },
    { title: "Sunset Deck", desc: "Directions", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60" },
  ],
  "Bars": [
    { title: "Irchel Bar", desc: "Directions", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=60" },
    { title: "bQm Culture & Café Bar", desc: "Directions", img: "/Images/Bars/download.jpg" },
    { title: "Widder Bar", desc: "Directions", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=60" },
    { title: "Widder Bar", desc: "Directions", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=60" },
    { title: "Widder Bar", desc: "Directions", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=60" },
    { title: "Widder Bar", desc: "Directions", img: "/Images/Bars/download.jpg" },
  ],
  "Sport Centers": [
    { title: "Gym Hall", desc: "Overview", img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=600&q=60" },
    { title: "Swimming Pool", desc: "Details", img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=600&q=60" },
    { title: "Tennis Court", desc: "Directions", img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=600&q=60" },
    { title: "Tennis Court", desc: "Directions", img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=600&q=60" },
    { title: "Tennis Court", desc: "Directions", img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=600&q=60" },
    { title: "Tennis Court", desc: "Directions", img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=600&q=60" },
  ],
  "Social / Community": [
    { title: "Student Club", desc: "Activities", img: "Community Café", desc: "Overview", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=60" },
    { title: "Cultural Center", desc: "Events", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=60" },
    { title: "Community Café", desc: "Overview", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=60" },
    { title: "Community Café", desc: "Overview", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=60" },
    { title: "Community Café", desc: "Overview", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=60" },
    { title: "Community Café", desc: "Overview", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=60" },
  ]
};

// Render cards
function renderCards(category) {
  cardGrid.innerHTML = "";
  data[category].forEach(card => {
    cardGrid.innerHTML += `
      <div class="card">
        <img src="${card.img}" alt="${card.title}">
        <div class="card-text">
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>
      </div>`;
  });
}

// On page load
window.addEventListener("load", () => {
  renderCards("Bars");
  loader.style.display = "none"; // hide loader
});

// Footer tab click
footerLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    footerLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    const section = link.textContent.trim();
    activeSection.textContent = section;
    renderCards(section);
  });
});
