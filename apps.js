const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



{/*-- modal code --*/}


const div_container = document.getElementById("container");
const count = div_container.getElementsByTagName("div").length;
const title = document.getElementById("name01");
const size = document.getElementById("size01");
const keys = ['a', 'b', 'c'];
const obj = {
  ...Object.fromEntries(
    keys.map(key => [key, "100 x 100"])
  ),
  d: 6
};


function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  title.textContent = element.getAttribute("alt");
  

  if (title.textContent == "Escape" || title.textContent == "Reborn"){
    size.textContent = "90 x 90"
  }else {
    size.textContent = "100 x 100"
  }
}


