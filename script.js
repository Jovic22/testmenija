//------- Navigacija heder meni ----//

const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.
  addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
  }))

// --- otvaranje/zatvranje galerije slika i zumiranje -- //

  var fullImgBox = document.getElementById("fullImgBox");
  var fullImg = document.getElementById("fullImg");

  function openfullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
  }

  function closefullImg(){
    fullImgBox.style.display = "none";
  }




