function openPopUp(typePopUp) {
    let popUpArea = document.querySelector(".pop-up-area");
    let popUp = document.querySelector(".pop-up");

    popUpArea.style.display = "flex"
    openCurtain()

    const callMeInputs = ["name", "number", "email", "time", "comment", "title", "btns"]
    const quoteInputs = ["name", "number", "email", "comment", "title", "btns"]
    const viewInputs = ["name", "number", "email", "time", "comment", "title", "btns"]
    const sendInputs = ["email", "title", "btns"]
    const offerInputs = ["name", "number", "email", "price", "comment", "title", "btns"]

    let currentInputs = [];
    let textTitle = ""

    if (typePopUp === "call-me"){
        currentInputs = callMeInputs;
        textTitle = "Заказать звонок"
    } else if (typePopUp === "request-quote"){
        currentInputs = quoteInputs;
        textTitle = "Запросить цену"
    } else if (typePopUp === "request-view"){
        currentInputs = viewInputs;
        textTitle = "Заказать просмотр"
    } else if (typePopUp === "request-send"){
        currentInputs = sendInputs;
        textTitle = "Отправить по почте"
    } else if (typePopUp === "request-offer"){
        currentInputs = offerInputs;
        textTitle = "Предложить свою цену"
    }

    document.querySelectorAll(".pop-up-area > .pop-up > *").forEach( elem => {
        elem.style.display = "none"

        const typeElem = elem.getAttribute("type-line")

        if (currentInputs.includes(typeElem)){
            elem.style.display = "flex"

            if (typeElem === "title"){
                elem.innerHTML = textTitle
            }
        }
    })

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

document.querySelector(".call-me-pretty").onclick = () => openPopUp("call-me");
document.querySelector(".pop-up-area").onclick = closePopUp;
document.querySelector(".pop-up-back").onclick = closePopUp;
document.querySelector(".pop-up").onclick = function (event) {
	event.stopPropagation(); //блокируется дальнейшая передача события
};


const requestQuote = document.querySelector(".page-tender-widghet-price > .btn-submit-light");
if (requestQuote !== null) {
    requestQuote.onclick = () => openPopUp("request-quote");
}

const requestView = document.querySelector(".page-tender-requests > .page-tender-request-view");
if (requestView !== null) {
    requestView.onclick = () => openPopUp("request-view");
}

const requestSend = document.querySelector(".page-tender-requests > .page-tender-request-send");
if (requestSend !== null) {
    requestSend.onclick = () => openPopUp("request-send");
}

const requestOffer = document.querySelector(".page-tender-requests > .page-tender-request-offer");
if (requestOffer !== null) {
    requestOffer.onclick = () => openPopUp("request-offer");
}