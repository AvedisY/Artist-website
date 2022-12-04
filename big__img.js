const img = document.getElementById('lol');

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

img.addEventListener('click', onClick)