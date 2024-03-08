const loader = document.getElementById("loader");
const tekst = "Prime Wheels";
const fargetBokstaver = 5;
const fart = 100; // Definerer farten. 1000 er ett sekund.

let output = "";
for (let i = 0; i < tekst.length; i++) {
  output += `<span class="gjennomsiktig">${tekst[i]}</span>`;
}

loader.innerHTML = output;

let index = 0;
setInterval(() => {
  const chars = document.querySelectorAll("#loader span");
  for (let i = 0; i < chars.length; i++) {
    const modIndex = (index + i) % tekst.length;
    if (i < fargetBokstaver) {
      chars[modIndex].className = "farget";
    } else {
      chars[modIndex].className = "gjennomsiktig";
    }
  }
  index = (index + 1) % tekst.length;
}, fart);
