const slider = document.getElementById('slider');
const sliderBtn = document.getElementById("sliderBtn");
let sliderChecker = 0;//0閉じている 1開いている


sliderBtn.addEventListener("click", () => {
    console.log("つうか");
    if (sliderChecker == 0) {
        sliderChecker = 1;
        slider.style.transForm = "translateX(0)";
    }
    else if (sliderChecker == 1) {
        sliderChecker = 0;
        slider.style.transForm = "translateX(100%)";
    }
})
