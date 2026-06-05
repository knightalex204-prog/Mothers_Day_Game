var heartsLeft = 10;

function createHeart() {
  var heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 90 + "vw";

  heart.onclick = function() {
    heart.remove();
    heartsLeft--;

    if (heartsLeft === 0) {
      document.getElementById("game").style.display = "none";
      document.getElementById("message").style.display = "block";
    }
  };

  document.body.appendChild(heart);
}

for (var i = 0; i < 10; i++) {
  setTimeout(createHeart, i * 400);
}


