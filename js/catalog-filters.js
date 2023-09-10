
const districts = ["Арбат", "Басманный", "Замоскворечье", "Красносельский", "Мещанский", "Пресненский", "Таганский", "Тверской", "Хамовники", "Якиманка", "Аэропорт", "Беговой", "Бескудниковский", "Войковский", "Восточное Дегунино", "Головинский", "Дмитровский", "Западное Дегунино", "Коптево", "Левобережный", "Молжаниновский", "Савеловский", "Сокол", "Тимирязевский", "Ховрино", "Хорошевский", "Алексеевский", "Алтуфьевский", "Бабушкинский", "Бибирево", "Бутырский", "Лианозово", "Лосиноостровский", "Марфино", "Марьина Роща", "Останкинский", "Отрадное", "Ростокино", "Свиблово", "Северное Медведково", "Северный", "Южное Медведково", "Ярославский", "Богородское", "Вешняки", "Восточное Измайлово", "Восточный", "Гольяново", "Ивановское", "Косино-Ухтомский", "Измайлово", "Новогиреево", "Новокосино", "Перово", "Преображенское", "Северное Измайлово", "Соколиная гора", "Сокольники", "Выхино-Жулебино", "Капотня", "Кузьминки", "Лефортово", "Люблино", "Марьино", "Некрасовка", "Нижегородский", "Рязанский", "Печатники", "Текстильщики", "Южнопортовый", "Братеево", "Бирюлёво Восточное", "Даниловский", "Донской", "Бирюлево Западное", "Зябликово", "Москворечье-Сабурово", "Нагатино-Садовники", "Нагатинский затон", "Нагорный", "Орехово-Борисово Северное", "Чертаново Северное", "Чертаново Центральное", "Южное Орехово-Борисово", "Южное Чертаново", "Академический", "Гагаринский", "Зюзино", "Коньково", "Котловка", "Ломоносовский", "Обручевский", "Северное Бутово", "Теплый Стан", "Черемушки", "ЮжноеБутово", "Ясенево", "Внуково", "Дорогомилово", "Крылатское", "Кунцево", "Можайский", "Ново-Переделкино", "Очаково-Матвеевское", "Проспект Вернадского", "Раменки", "Солнцево", "Тропарёво-Никулино", "Филёвский парк", "Фили-Давыдково", "Куркино",  "Митино", "Покровское-Стрешнево", "Северное Тушино", "Строгино", "Хорошево-Мневники", "Щукино", "Южное Тушино", "Матушкино", "Савелки", "Силино", "Старое Крюково", "Крюково", "Вороновское", "Киевский", "Кленовское", "Краснопахорское", "Михайлово-Ярцевское", "Новофедоровское", "Первомайское", "Роговское", "Щаповское", "Внуковское", "Воскресенское", "Десеновское", "Кокошкино", "Марушкинское", "Московский", "Мосрентген", "Рязановское", "Сосенское", "Филимонковское"];

const stations = ["Тверская", "Смоленская", "Киевская", "Кропоткинская", "Арбатская", "Полянка", "Охотный ряд", "Фрунзеская", "Тушинская", "Октяборьская", "Сретенский Бульвар", "Цветной Бульвар", "Аэропорт", "Марьина роща", "Славянский бульвар", "Новослободская", "Маяковская", "Чистые пруды", "Новые ворота", "Сокол", "Пушкинская", "Динамо", "Павелецкая", "Новокузнецкая", "Парк Культуры", "Медведково", "Александровский сад", "Белорусская", "Калужская", "Бауманская", "Боровицкая", "Площадь Революции", "Трубная", "Чкаловская", "Курская", "Университет", "Краснопресенская", "Автозаводская", "Новые черемушки", "Кунцевская", "Арбат", "Таганская", "Сухаревская", "Ленинский проспект", "Алтуфьево", "Аннино", "Пражское", "Октяборьское поле", "Нахимовский проспект", "Волокаламская", "Марьево", "Бибирева", "Отрадное", "Строгино", "Третьяковская", "Щукинская", "1905 года", "Чеховская", "ВДНХ", "Войковская", "Международная", "Серпуховская", "Кузнецкий мост", "Тургеневская", "Проспект Мира", "Тульская", "Нагатинская", "Профсоюзная", "Академическая", "Ленинский проспект", "Шаболовская", "Калужская", "Беляево", "Спортивная", "Воробьевы горы", "Проспект Вернадского", "Юго-Западная", "Выставочная", "Парк Победы", "Молодежная", "Сокол", "Водный стадион", "Речной вокзал", "Тропарёво", "Крылатское", "Беговая", "Щукинская", "Рижская", "Алексеевская", "Красносельская", "Комсомольская", "Сокольники", "Преображеская площадь", "Автозаводская", "Третьяковская", "Новокузнецкая", "Театральная", "Красные ворота", "Чеховская", "Библиотека имени Ленина", "Теплый стан", "Кунцево", "Волоколамкая", "Авиамоторная", "Добрынинская", "Мякинино", "Коньково", "Китай Город", "Кутузовская", "Цветной бульвар", "Митино", "Пятницкое шоссе", "Свиблово", "Дмитровская", "Савеловская", "Фили", "Площадь Гагарина", "Тимирязевская"];

let isGenDistcrics = false;
let isGenStantions = false;

let isOpenDistcrics = false
let isOpenStantions = false
let isOpenFilters = false


function toggleFilters (event) {
    const className = event.target.getAttribute("area-element")
    const areaList = document.querySelector(`.${className}`);

    function createCheckBox (string) {
        const checkbox = document.createElement('label');
        checkbox.className = "checkbox";
        checkbox.innerHTML = string;
        areaList.append(checkbox);

        const input = document.createElement('input');
        input.type = "checkbox";
        checkbox.append(input);

        const checkmark = document.createElement('span');
        checkmark.className = "checkmark";
        checkbox.append(checkmark);
    }

    if (className === "filter-switch-station-list") {
        if (isGenStantions === false){
            stations.forEach( elem => createCheckBox(elem));
            isGenStantions = true;
        }
        areaList.style.transform = isOpenStantions ? "scaleY(0)" : "scaleY(1)"
        areaList.style.height = isOpenStantions ? "0em" : "15em"
        areaList.style.minHeight = isOpenStantions ? "0em" : "15em"
        isOpenStantions = !isOpenStantions
    } else if (className === "filter-switch-district-list") {
        if (isGenDistcrics === false){
            districts.forEach( elem => createCheckBox(elem));
            isGenDistcrics = true;
        }
        areaList.style.transform = isOpenDistcrics ? "scaleY(0)" : "scaleY(1)"
        areaList.style.height = isOpenDistcrics ? "0em" : "15em"
        areaList.style.minHeight = isOpenDistcrics ? "0em" : "15em"
        isOpenDistcrics = !isOpenDistcrics
    }
}


function toggleSwitcher (event) {
    const parent = event.target.parentNode
    const [btn0, btn1] = parent.querySelectorAll('button')
    const selected = parent.getAttribute("selected")

    if (selected === "0") {
        btn0.setAttribute("status", "false")
        btn1.setAttribute("status", "true")
        parent.setAttribute("selected", "1")
    } else if (selected === "1") {
        btn0.setAttribute("status", "true")
        btn1.setAttribute("status", "false")
        parent.setAttribute("selected", "0")
    }
}


function toggleRub (event) {
    const currency = event.target.getAttribute("currency")
    event.target.innerHTML = currency === "rub" ? "$" : "₽"
    event.target.setAttribute("currency", currency === "rub" ? "dol" : "rub")
}


function toggleOpenFilters (event) {
    const formWithFilters = document.querySelector(".page-catalog-panel-of-filters");
    
    if (isOpenFilters) {
        formWithFilters.style.transition = "all 1s ease";
        formWithFilters.style.transform = ""

        setTimeout(() => {
            closeCurtain()
        }, 300)

        setTimeout(() => {
            formWithFilters.style.transition = "";
        }, 2000)
        
    } else {

        openCurtain();
        formWithFilters.style.transition = "all 1s ease";

        setTimeout(() => {
            formWithFilters.style.transform = "translateX(0)";
        }, 500)

        setTimeout(() => {
            formWithFilters.style.transition = "";
        }, 2000)
    }

    isOpenFilters = !isOpenFilters

}


function setDelayForCards () {
    let delay = 0;

    document.querySelectorAll(".page-catalog-cards > a").forEach( elem => {
        elem.style.animationDelay = delay + "ms";
        delay += 300;
    })
}

setDelayForCards()

document.querySelector(".filter-switch-districts").onclick = toggleFilters;
document.querySelector(".filter-switch-stations").onclick = toggleFilters;

document.querySelectorAll(".page-catalog-panel-of-filters > .switcher > button").forEach(btn => {
    btn.onclick = toggleSwitcher;
})

document.querySelector(".filter-switch-price").onclick = toggleRub;

document.querySelector(".btn-connect-open-filters").onclick = toggleOpenFilters;
document.querySelector(
    ".page-catalog-panel-of-filters > .filter-btns > .filter-btns-back"
).onclick = toggleOpenFilters;



//    ==__==

const url_1 = new URL('cat-1-1.html', window.location.href); // квартиры
const url_2 = new URL('cat-1-2.html', window.location.href); // пентхаусы
const url_3 = new URL('cat-1-3.html', window.location.href); // дома
const url_4 = new URL('cat-2-1.html', window.location.href); // Офисы
const url_5 = new URL('cat-2-2.html', window.location.href); // Торговая недвижимость
const url_6 = new URL('cat-2-3.html', window.location.href); // Особняки
const url_7 = new URL('cat-2-4.html', window.location.href); // Street retail

document.querySelectorAll(".page-catalog-panel-of-filters > label").forEach(chck => {
    if (chck.innerText === "Квартиры"){
        chck.addEventListener('change', e => location.href = url_1);
    } else if (chck.innerText === "Пентхаусы"){
        chck.addEventListener('change', e => location.href = url_2);
    } else if (chck.innerText === "Дома"){
        chck.addEventListener('change', e => location.href = url_3);
    } else if (chck.innerText === "Офисы"){
        chck.addEventListener('change', e => location.href = url_4);
    } else if (chck.innerText === "Торговая недвижимость"){
        chck.addEventListener('change', e => location.href = url_5);
    } else if (chck.innerText === "Особняки"){
        chck.addEventListener('change', e => location.href = url_6);
    } else if (chck.innerText === "Street retail"){
        chck.addEventListener('change', e => location.href = url_7);
    } 
})