// Display a rotating "Today's Special" item
const specials = [
  "Classic Glazed Doughnut",
  "Chocolate Filled Delight",
  "Vanilla Sprinkle Treat",
  "Strawberry Frosted Ring",
  "Cinnamon Sugar Twist"
];

function updateSpecial() {
  const specialElement = document.getElementById("todays-special");
  if (specialElement) {
    const randomIndex = Math.floor(Math.random() * specials.length);
    specialElement.textContent = specials[randomIndex];
  }
}

// Run on load and every 10 seconds
window.onload = () => {
  updateSpecial();
  setInterval(updateSpecial, 10000);
};
