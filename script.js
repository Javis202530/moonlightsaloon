// Smooth fade animation on scroll

const boxes = document.querySelectorAll('.box, .team-card, .gallery-images img');

window.addEventListener('scroll', () => {

    boxes.forEach(box => {

        const position = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }

    });

});

boxes.forEach(box => {
    box.style.opacity = "0";
    box.style.transform = "translateY(50px)";
    box.style.transition = "0.7s";
});