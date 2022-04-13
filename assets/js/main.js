var picsChildDivs = document
  .getElementById("pictures")
  .getElementsByClassName("pic");

var lightboxChildDivs = document
  .getElementById("lightboxes")
  .getElementsByClassName("lightbox");

console.log(picsChildDivs);
console.log(lightboxChildDivs);

var picToLightBox = {};

for (var i = 0; i < picsChildDivs.length; i++) {
  var childDiv = picsChildDivs[i];
  var lbDiv = lightboxChildDivs[i];
  picToLightBox[childDiv.id] = lbDiv.id;
}

console.log(picToLightBox);

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
  document.getElementById("lightbox-overlay").classList.remove("hidden");
  console.log(document.getElementById(lightboxID));
  document.getElementById(lightboxID).classList.remove("hidden");
}

function imageClicked() {
  let clicked = event.target;
  if (!clicked.classList.contains("pic")) {
    return;
  }
  console.log(clicked);
  let picId = clicked.id;
  unhideLightbox(picToLightBox[picId]);
}

document.body.onclick = imageClicked;

function closeLightbox(lightboxID) {
  document.getElementById("lightbox-overlay").classList.add("hidden");
  document.getElementById(lightboxID).classList.add("hidden");
}

// This function calls closeLightbox() for every .lightbox div.
function closeAllLightboxes() {
  for (var i = 0; i < lightboxChildDivs.length; i++) {
    var id = lightboxChildDivs[i].id;
    closeLightbox(id);
  }
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;
