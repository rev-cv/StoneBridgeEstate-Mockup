function openPopUp() {
    let popUpArea = document.querySelector(".pop-up-area");
    let popUp = document.querySelector(".pop-up");

    popUpArea.style.display = "flex"
    openCurtain()

    setTimeout(() => {
        popUp.style.transform = "translateY(0)"
        popUp.style.opacity = 1
    }, 600)
}

function closePopUp() {
    let popUpArea = document.querySelector(".pop-up-area");
    let popUp = document.querySelector(".pop-up");

    popUp.style.transform = "translateY(1em)"
    popUp.style.opacity = 0

    setTimeout(() => {
        closeCurtain()
    }, 500)

    setTimeout(() => {
        popUpArea.style.display = "none"
    }, 1000)
}

document.querySelector(".call-me-pretty").onclick = openPopUp;
document.querySelector(".pop-up-area").onclick = closePopUp;
document.querySelector(".pop-up-back").onclick = closePopUp;
document.querySelector(".pop-up").onclick = function (event) {
	event.stopPropagation(); //блокируется дальнейшая передача события
};