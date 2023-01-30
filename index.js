const cardImg = document.querySelectorAll(".card_img");
const cardTitle = document.querySelectorAll(".card__small__title");
const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const targetP = document.getElementById(targetId);

        document.querySelectorAll(".target-p").forEach(p => {
            p.style.display = "none";
        });

        targetP.style.display = "block";
    });
});

cardImg.forEach((img, i) => {
    img.addEventListener("mouseover", () => {
        cardTitle[i].style.display = "block";
        cardTitle[i].style.top = `${img.offsetTop + 60}px`;
        cardTitle[i].style.left = `${img.offsetLeft + 35}px`;
    });
});

cardImg.forEach((img, i) => {
    img.addEventListener("mouseout", () => {
        cardTitle[i].style.display = "none";
    });
});