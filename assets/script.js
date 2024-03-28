function startConfetti() {
  const confettiContainer = document.querySelector(".confetti-container");
  const colors = ["blue", "red", "yellow", "green", "purple", "orange"];

  for (let i = 0; i < 200; i++) {
    const confetti = document.createElement("div");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.className = `confetti confetti-${randomColor}`;
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    confettiContainer.appendChild(confetti);

    confetti.addEventListener("animationiteration", () => {
      confetti.remove();
    });
  }
}
function calculateAge(birthDate) {
  const currentDate = new Date();
  const dob = new Date(birthDate);
  const age = currentDate.getFullYear() - dob.getFullYear();
  if (
    currentDate.getMonth() < dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() < dob.getDate())
  ) {
    return age - 1;
  }
  return age;
}

const ageElement = document.getElementById("age");
const dob = "2005-10-17";
const age = calculateAge(dob);
ageElement.textContent = age + " Years Old.";
