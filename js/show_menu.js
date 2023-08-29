
function toogleMenu() {
    let menu = document.querySelector(".expanded-header")

    if (menu.classList.contains("expanded-header-show")){
        menu.classList.remove("expanded-header-show")
    } else {
        menu.classList.add("expanded-header-show")
    }

}



let btns = document.querySelectorAll(".btn-connect-show-menu")

for (var i in btns){
	btns[i].onclick = toogleMenu;
};