
let isOpenMenu = false
let isOpenSubmissionForm = false

function openCurtain(){
    // задергивает шторку на экран

    let curtain_1 = document.createElement('div');
    curtain_1.className = "curtain-1";
    document.body.append(curtain_1);

    let curtain_2 = document.createElement('div');
    curtain_2.className = "curtain-2";
    document.body.append(curtain_2);

    let curtain_3 = document.createElement('div');
    curtain_3.className = "curtain-3";
    document.body.append(curtain_3);

    let curtain_main = document.createElement('div');
    curtain_main.className = "curtain-main";
    curtain_main.onclick = toggleMenu;
    document.body.append(curtain_main);

    const cwa = document.body.clientWidth;
    document.body.style.overflow = "hidden";
    const cwl = document.body.clientWidth;

    widthScroll = cwl - cwa

    if ( cwa < cwl ) {
        document.body.style.paddingRight = cwl - cwa + "px";
    };

    let btn = document.querySelector(".call-me-pretty");
    current_width = Number(getComputedStyle(btn).right.replace("px", ""))
    btn.style.right =  current_width + cwl - cwa + "px";

}

function closeCurtain(){
    // убирает шторку с экрана

    let curtain_1 = document.querySelector(".curtain-1");
    let curtain_2 = document.querySelector(".curtain-2");
    let curtain_3 = document.querySelector(".curtain-3");
    let curtain_main = document.querySelector(".curtain-main");

    curtain_1.style.transform = "translateX(200vw)";
    curtain_2.style.transform = "translateX(200vw)";
    curtain_3.style.transform = "translateX(200vw)";
    curtain_main.style.transform = "translateX(200vw)";

    setTimeout(() => {
        curtain_1.remove();
        curtain_2.remove();
        curtain_3.remove();
        curtain_main.remove();
    }, 2000);

    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    let btn = document.querySelector(".call-me-pretty");
    btn.style.right=""
}

function animShowPoints (points) {
    // анимирует пункты меню во время раскрытия главного меню
    let delay = 1;

    points.forEach((item, index, arr) => {
        if (item !== null) {
            setTimeout(() => {
                item.style.transform = "translateY(1em)";
                item.style.transform = "translateY(0)";
                item.style.opacity = 0;
                item.style.opacity = 1;

            }, delay);

            delay += 100;
        }
    })
}

function animHidePoints (points) {
    // анимирует пункты меню во время закрытия главного меню
    let delay = 0;

    points.reverse()
    points.forEach((item, index, arr) => {
        if (item !== null) {
            setTimeout(() => {
                item.style.transform = "translateY(0)";
                item.style.transform = "translateY(1em)";
                item.style.opacity = 1;
                item.style.opacity = 0;
            }, delay);

            delay += 50;
        }
    })
}

function toggleMenu() {
    // раскрывает и скрывает главное меню сайта
    let menu = document.querySelector(".expanded-header");

    let menu_points = [
        document.querySelector(".expanded-header > .search"),
        document.querySelector(".expanded-header-caption-big"),
        document.querySelector(".expanded-header-caption-little"),
        ...document.querySelector(".expanded-header-nav").children,
        document.querySelector(".expanded-header-submit"),
        ...document.querySelectorAll(".expanded-header-contacts-point"),
        ...document.querySelectorAll(".expanded-header-line"),
        document.querySelector(".expanded-header > div.castle"),
    ]


    if (menu.classList.contains("expanded-header-show")){
        // ЗАКРЫТИЕ ПАНЕЛИ САЙТА

        isOpenMenu = false

        animHidePoints(menu_points)

        setTimeout(() => {
            menu.classList.remove("expanded-header-show");
            closeCurtain();
        }, 1000)
        
        // ↓ если во время закрытия открыта форма отправки запроса
        if (isOpenSubmissionForm) {
            let nav = document.querySelector(".expanded-header-nav");
            let submit = document.querySelector(".expanded-header-submit");
            let form = document.querySelector(".expanded-header-form");
            

            form.style.transform = "translateY(1em)";
            form.style.opacity = 0;

            setTimeout(() => {
                form.style.transform = "";
                form.style.opacity = "";
                nav.style.display = "flex";
                submit.style.display = "flex";
                form.style.display = "none";
                nav.style.transform = "";
                nav.style.opacity = "";
                submit.style.transform = "";
                submit.style.opacity = "";

                isOpenSubmissionForm = false
                
            }, 1500)
        }

    } else {
        // ОТКРЫТИЕ ПАНЕЛИ САЙТА

        isOpenMenu = true
        
        openCurtain();

        setTimeout(() => {
            menu.classList.add("expanded-header-show");
        }, 500)

        setTimeout(() => {
            animShowPoints(menu_points);
        }, 1000)
        
    }
}


function openSubmissionForm (isOnWindow) {
    // открывает форму отправки заявки внутри уже открытого header

    isOpenSubmissionForm = true

    let nav = document.querySelector(".expanded-header-nav");
    let submit = document.querySelector(".expanded-header-submit");
    let form = document.querySelector(".expanded-header-form");
    let back = document.querySelector(".expanded-header-form-back");
    let stretcher = document.querySelector(".expanded-header-stretcher");
    stretcher.style.minHeight = getComputedStyle(stretcher).height;
    stretcher.style.maxHeight = getComputedStyle(stretcher).height;

    function returnToMenu() {
        form.style.transform = "";
        form.style.opacity = "";

        setTimeout(() => {
            nav.style.display = "flex";
            submit.style.display = "flex";
        }, 600)

        setTimeout(() => {
            nav.style.display = "flex";
            submit.style.display = "flex";
            form.style.display = "none";
            nav.style.transform = "translateX(0)";
            nav.style.opacity = 1;
            submit.style.transform = "translateX(0)";
            submit.style.opacity = 1;
            stretcher.style.minHeight = ""
            stretcher.style.maxHeight = ""
            isOpenSubmissionForm = false
        }, 650)
    }


    if (isOpenMenu) {
        // ЕСЛИ ПАНЕЛЬ ОТКРЫТА
        nav.style.transform = "translateX(-2em)";
        nav.style.opacity = 0;
        submit.style.transform = "translateX(-2em)";
        submit.style.opacity = 0;

        form.style.display = "flex";

        setTimeout(() => {
            nav.style.display = "none";
            submit.style.display = "none";
            form.style.transform = "translateX(0)";
            form.style.opacity = 1;
        }, 600)

        back.onclick = returnToMenu

    } else {
        // ЕСЛИ ПАНЕЛЬ ЕЩЕ НЕ ОТКРЫТА
        nav.style.display = "none";
        submit.style.display = "none";
        form.style.display = "flex";
        form.style.transform = "translateY(1em)";
        form.style.opacity = 0;

        console.log("ok")

        setTimeout(() => {
            form.style.transform = "translateY(0)";
            form.style.opacity = 1;
        }, 1500)

        toggleMenu()

        back.onclick = toggleMenu
    }
}


document.querySelectorAll(".btn-connect-show-menu").forEach(btn => {
    btn.onclick = toggleMenu;
})

document.querySelector(".expanded-header-submit").onclick = openSubmissionForm;
document.querySelector(".menu-bottom-btn-submit").onclick = openSubmissionForm;

const ctb = document.querySelector(".page-main-content-top-h-btn")
if (ctb != null) {
    ctb.onclick = openSubmissionForm;
}



const catsleLogo = document.querySelector(".expanded-header > .castle")
catsleLogo.insertAdjacentHTML('afterbegin', '<div class="castle-curtain"></div>')
const catsleCurtain = catsleLogo.querySelector(".castle-curtain")

const durCastle = 3400;
function strtAnimCastle() {
    catsleCurtain.style.transition = ""
    catsleCurtain.style.transform = "scaleX(1)"

    setTimeout(() => {
        catsleCurtain.style.transition = `transform ${durCastle}ms linear`;
        catsleCurtain.style.transform = "scaleX(0)"
    }, 100)

    setTimeout(() => {
        strtAnimCastle()
    }, durCastle + 100)
}

strtAnimCastle()