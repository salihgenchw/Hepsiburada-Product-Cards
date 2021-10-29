const card = document.querySelector('.card');

card.addEventListener("mouseenter", function() {
    document.querySelector('.price-span').classList.add("d-none")
    document.querySelector('.btn').classList.remove("d-none")
});

card.addEventListener("mouseleave", function() {
    document.querySelector('.price-span').classList.remove("d-none")
    document.querySelector('.btn').classList.add("d-none")
});