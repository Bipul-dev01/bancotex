// Selecting required elements
const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeBtn = previewBox.querySelector(".icon");
const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");
const shadow = document.querySelector(".shadow");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let newIndex = 0;
const totalImages = gallery.length;

document.addEventListener("DOMContentLoaded", () => {
  totalImg.textContent = totalImages;

  gallery.forEach((img, index) => {
    img.onclick = () => {
      newIndex = index;
      openPreview();
    };
  });
});

// Open preview
function openPreview() {
  previewBox.classList.add("show");
  shadow.style.display = "block";
  document.body.style.overflow = "hidden";
  updatePreview();
}

// Update image + buttons
function updatePreview() {
  currentImg.textContent = newIndex + 1;
  previewImg.src = gallery[newIndex].querySelector("img").src;

  // Reset buttons first
  prevBtn.style.display = "block";
  nextBtn.style.display = "block";

  // Hide when needed
  if (newIndex === 0) {
    prevBtn.style.display = "none";
  }
  if (newIndex === totalImages - 1) {
    nextBtn.style.display = "none";
  }
}

// Prev button
prevBtn.onclick = () => {
  if (newIndex > 0) {
    newIndex--;
    updatePreview();
  }
};

// Next button
nextBtn.onclick = () => {
  if (newIndex < totalImages - 1) {
    newIndex++;
    updatePreview();
  }
};

// Close button
closeBtn.onclick = closePreview;

// Shadow click close
shadow.onclick = closePreview;

function closePreview() {
  previewBox.classList.remove("show");
  shadow.style.display = "none";
  document.body.style.overflow = "auto";
}
