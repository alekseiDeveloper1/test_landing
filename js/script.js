document.addEventListener("DOMContentLoaded", function () {
    // slider
const sliderContainer = document.querySelector(".slider-container");
const sliderImages = document.querySelectorAll(".slider-image");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const typeOptions = document.querySelectorAll(".type-option");
console.log(typeOptions)

let currentIndex = 0;

function updateSliderPosition() {
    const offset = -currentIndex * sliderImages[0].clientWidth;
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

function updateImageByGroup(group) {
    const targetIndex = Array.from(sliderImages).findIndex(
        (img) => img.dataset.group === group
    );
    if (targetIndex !== -1) {
        currentIndex = targetIndex;
        updateSliderPosition();
    }
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSliderPosition();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSliderPosition();
});

typeOptions.forEach((button) => {
    button.addEventListener("click", function () {
        console.log('clicked');
        const selectedGroup = button.dataset.group;
        console.log('selectedGroup', selectedGroup);
        // Update slider to show the image for the selected color
        updateImageByGroup(selectedGroup);

        // // Update button appearance to show selected state
        // groupOptions.forEach((btn) => btn.classList.remove("selected"));
        // button.classList.add("selected");
    });
});

// Initial setup
updateSliderPosition();

// create offer
const offerLink = document.getElementById("offer-link");
const purchaseOptions = document.querySelectorAll("input[name='purchase-option']");
const typePurchaseOptions = document.querySelectorAll("input[name='type-purchase-option']");
const offer = ''
// const colorToImageMap = {
//     Bleu: "pic1.webp",
//     Gray: "pic2.webp",
// };

let selectedType = "1_Customizable_Body_Kits"; // Couleur par défaut
let selectedOfferId = "14"; // Offre par défaut (Buy 1 )

// Mettre à jour la couleur sélectionnée
typeOptions.forEach((button) => {
    button.addEventListener("click", function () {
        selectedType = button.dataset.group.trim();
    });
});

// Mettre à jour l'ID de l'offre sélectionnée
purchaseOptions.forEach((option) => {
    option.addEventListener("change", function () {
        selectedOfferId = this.value;
    });
});

// Rediriger vers l'URL de l'offre
offerLink.addEventListener("click", function (e) {
    e.preventDefault();

    const offerUrl = `${offer}&product=https://tr4ckofferz.site/lander/uk-rc-cars-9-99/${selectedType}.webp&text=Two+RC+Bampers&offer_id=${selectedOfferId}`;
    // console.log(offerUrl)
    window.location.href = offerUrl;
});

    const scrollUpButton = document.querySelector(".arrow");
window.addEventListener('scroll', () => {
    if (window.scrollY > 800) { // Adjust the scroll distance
        scrollUpButton.style.display = 'block';
    } else {
        scrollUpButton.style.display = 'none';
    }
});

scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
        top: window.outerWidth > 1000 ? 0 : 550,
        behavior: 'smooth',
    });
});
function getScrollbarWidth() {
    return window.outerWidth;
}

const scrollbarWidth = getScrollbarWidth();
console.log('Scrollbar width:', scrollbarWidth);
});