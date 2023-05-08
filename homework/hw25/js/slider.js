let i = 0;
let images = ["./img/1.png","./img/2.png", "./img/3.png"];

function handleChange() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } 
    else {
        i = 0;
    }
}

function previous() {
    if (i === 1) {
        document.getElementById(`buttonPrev`).style.display = `none`;
        i--;
    } 
    else {
        document.getElementById(`buttonNext`).style.display = `inline`;
        i--;
    }
    document.slide.src = images[i];
}

function next() {
    if (i === images.length - 2) {
        document.getElementById(`buttonNext`).style.display = `none`;
        i++;
    } 
    else {
        i++;
        document.getElementById(`buttonPrev`).style.display = `inline`;
    }
        document.slide.src = images[i];
}

window.onload = handleChange;