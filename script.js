const body = document.querySelector("body");

const swalst = Swal.mixin({
  timer: 2500,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 90,
});

audio = new Audio(linkmp3.src);
ftganti = 0;
fungsi = 0;
fungsiAwal = 0;
deffotostiker = fotostiker.src;

function berjatuhan() {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = (Math.random() * 90) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  body.appendChild(heart);
}

setInterval(function () {
  var heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);

Content.style = "opacity:1;margin-top:14vh";

teksAkhir = "di jalan ada lampu,<br>di kuburan ada hantu,<br>di kerajaan ada ratu,<br>tapi di hatiku...<br>cuma ada kamu ❤️";
teksAkhirB = "i love uuu ><";

document.getElementById("loveIn").onclick = function () {
  if (fungsiAwal == 0) {
    audio.play();
    loveIn.style = "transition:all .8s ease;transform:scale(15);opacity:0";
    ftAwal.style = "opacity:0";
    wallpaper.style = "transform: scale(1);";
    ket.style = "display:none";
    fungsiAwal = 1;
    setTimeout(initengahan, 300);
    setTimeout(pgmuncul, 600);
  }
};

const box = document.getElementById("pergeseran");
totalPesan = box.children.length;

aktigeser = 0;
thisgeser = 1;

/* ===============================
   🔥 KLIK DI MANA SAJA UNTUK GESER
================================= */
document.addEventListener("click", function (e) {

  // Jangan trigger kalau klik tombol LOVE
  if (e.target.id === "loveIn" || e.target.classList.contains("lovein")) return;

  if (aktigeser == 1) {

    document.getElementById('pergeseran').scrollLeft += 300;
    hsementara();

    if (thisgeser > 1) {
      if (thisgeser % 2 == 0) {
        wallpaper.style = "transform: scale(1.7)";
      } else {
        wallpaper.style = "transform: scale(1)";
      }
    }

    if (thisgeser == 3) { ftganti = 1; fthilang(); }
    if (thisgeser == 4) { ftganti = 2; fthilang(); }
    if (thisgeser == 5) { ftganti = 0; fthilang(); }
    if (thisgeser == 7) { ftganti = 3; fthilang(); }

  }

});

function hsementara() {
  ketgeser.style = "position:relative;";
  thisgeser += 1;
  aktigeser = 0;
  setTimeout(munculkembali, 500);
}

function munculkembali() {
  if (thisgeser < totalPesan) {
    ketgeser.style = "position:relative;transform:scale(1);opacity:.8";
    aktigeser = 1;
  }
  if (thisgeser == totalPesan) {
    setInterval(berjatuhan, 250);
  }
}

function initengahan() {
  ftAwal.style = "display:none";
  loveIn.style = "display:none";
  ket.style = "display:none";
  Content.style = "opacity:1;margin-top:7vh";
}

function ftmuncul() {
  if (ftganti == 0) { fotostiker.src = deffotostiker; }
  if (ftganti == 1) { fotostiker.src = fotostiker1.src; }
  if (ftganti == 2) { fotostiker.src = fotostiker2.src; }
  if (ftganti == 3) { fotostiker.src = fotostiker3.src; }

  fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}

function fthilang() {
  fotostiker.style = "display:inline-flex;opacity:0;transform:scale(0)";
  setTimeout(ftmuncul, 250);
}

function pgmuncul() {
  pergeseran.style = "position:relative;margin-top:5vh;opacity:1;visibility:visible;transform:scale(1)";
  ftmuncul();
  setTimeout(munculkembali, 500);
}
