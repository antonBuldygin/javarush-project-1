function serializeForm(formNode) {
    const {elements} = formNode
    const data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const {name, value} = element
            return {name, value}
        })
    console.log(data)
}

function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}

const applicantForm = document.getElementById('form1')
applicantForm.addEventListener(
    'submit',
    handleFormSubmit
)
var cities = ['Абаза', 'Абакан', 'Абдулино', 'Абинск', 'Агидель', 'Агрыз',
    'Адыгейск', 'Азнакаево', 'Азов', 'Ак-Довурак', 'Аксай', 'Алагир',
    'Алапаевск', 'Алатырь', 'Алдан', 'Алейск', 'Александров', 'Александровск',
    'Александровск-Сахалинский', 'Алексеевка', 'Алексин', 'Алзамай', 'Алупка',
    'Алушта', 'Альметьевск', 'Амурск', 'Анадырь', 'Анапа', 'Ангарск',
    'Андреаполь', 'Анжеро-Судженск', 'Анива', 'Апатиты', 'Апрелевка',
    'Апшеронск', 'Арамиль', 'Аргун', 'Ардатов', 'Ардон', 'Арзамас', 'Аркадак',
    'Армавир', 'Армянск', 'Арсеньев', 'Арск', 'Артём', 'Артёмовск',
    'Артёмовский', 'Архангельск', 'Асбест', 'Асино', 'Астрахань', 'Аткарск',
    'Ахтубинск', 'Ачинск', 'Аша', 'Бабаево', 'Бабушкин', 'Бавлы',
    'Багратионовск', 'Байкальск', 'Баймак', 'Бакал', 'Баксан', 'Балабаново',
    'Балаково', 'Балахна', 'Балашиха', 'Балашов', 'Балей', 'Балтийск',
    'Барабинск', 'Барнаул', 'Барыш', 'Батайск', 'Бахчисарай', 'Бежецк',
    'БелаяКалитва', 'БелаяХолуница', 'Белгород', 'Белебей', 'Белинский',
    'Белово', 'Белогорск', 'Белогорск', 'Белозерск', 'Белокуриха', 'Беломорск',
    'Белорецк', 'Белореченск', 'Белоусово', 'Белоярский', 'Белый', 'Белёв',
    'Бердск', 'Березники', 'Берёзовский', 'Берёзовский', 'Беслан', 'Бийск',
    'Бикин', 'Билибино', 'Биробиджан', 'Бирск', 'Бирюсинск', 'Бирюч',
    'Благовещенск(Амурскаяобласть)', 'Благовещенск(Башкортостан)',
    'Благодарный', 'Бобров', 'Богданович', 'Богородицк', 'Богородск', 'Боготол',
    'Богучар', 'Бодайбо', 'Бокситогорск', 'Болгар', 'Бологое', 'Болотное',
    'Болохово', 'Болхов', 'БольшойКамень', 'Бор', 'Борзя', 'Борисоглебск',
    'Боровичи', 'Боровск', 'Бородино', 'Братск', 'Бронницы', 'Брянск',
    'Бугульма', 'Бугуруслан', 'Будённовск', 'Бузулук', 'Буинск', 'Буй',
    'Буйнакск', 'Бутурлиновка', 'Валдай', 'Валуйки', 'Велиж', 'ВеликиеЛуки',
    'ВеликийНовгород', 'ВеликийУстюг', 'Вельск', 'Венёв', 'Верещагино', 'Верея',
    'Верхнеуральск', 'ВерхнийТагил', 'ВерхнийУфалей', 'ВерхняяПышма',
    'ВерхняяСалда', 'ВерхняяТура', 'Верхотурье', 'Верхоянск', 'Весьегонск',
    'Ветлуга', 'Видное', 'Вилюйск', 'Вилючинск', 'Вихоревка', 'Вичуга',
    'Владивосток', 'Владикавказ', 'Владимир', 'Волгоград', 'Волгодонск',
    'Волгореченск', 'Волжск', 'Волжский', 'Вологда', 'Володарск', 'Волоколамск',
    'Волосово', 'Волхов', 'Волчанск', 'Вольск', 'Воркута', 'Воронеж', 'Ворсма',
    'Воскресенск', 'Воткинск', 'Всеволожск', 'Вуктыл', 'Выборг', 'Выкса',
    'Высоковск', 'Высоцк', 'Вытегра', 'ВышнийВолочёк', 'Вяземский', 'Вязники',
    'Вязьма', 'ВятскиеПоляны', 'ГавриловПосад', 'Гаврилов-Ям', 'Гагарин',
    'Гаджиево', 'Гай', 'Галич', 'Гатчина', 'Гвардейск', 'Гдов', 'Геленджик',
    'Георгиевск', 'Глазов', 'Голицыно', 'Горбатов', 'Горно-Алтайск',
    'Горнозаводск', 'Горняк', 'Городец', 'Городище', 'Городовиковск',
    'Гороховец', 'ГорячийКлюч', 'Грайворон', 'Гремячинск', 'Грозный', 'Грязи',
    'Грязовец', 'Губаха', 'Губкин', 'Губкинский', 'Гудермес', 'Гуково',
    'Гулькевичи', 'Гурьевск', 'Гурьевск', 'Гусев', 'Гусиноозёрск',
    'Гусь-Хрустальный', 'Давлеканово', 'ДагестанскиеОгни', 'Далматово',
    'Дальнегорск', 'Дальнереченск', 'Данилов', 'Данков', 'Дегтярск', 'Дедовск',
    'Демидов', 'Дербент', 'Десногорск', 'Джанкой', 'Дзержинск', 'Дзержинский',
    'Дивногорск', 'Дигора', 'Димитровград', 'Дмитриев', 'Дмитров', 'Дмитровск',
    'Дно', 'Добрянка', 'Долгопрудный', 'Долинск', 'Домодедово', 'Донецк',
    'Донской', 'Дорогобуж', 'Дрезна', 'Дубна', 'Дубовка', 'Дудинка',
    'Духовщина', 'Дюртюли', 'Дятьково', 'Евпатория', 'Егорьевск', 'Ейск',
    'Екатеринбург', 'Елабуга', 'Елец', 'Елизово', 'Ельня', 'Еманжелинск',
    'Емва', 'Енисейск', 'Ермолино', 'Ершов', 'Ессентуки', 'Ефремов',
    'Железноводск', 'Железногорск(Красноярскийкрай)',
    'Железногорск(Курскаяобласть)', 'Железногорск-Илимский', 'Жердевка',
    'Жигулёвск', 'Жиздра', 'Жирновск', 'Жуков', 'Жуковка', 'Жуковский',
    'Завитинск', 'Заводоуковск', 'Заволжск', 'Заволжье', 'Задонск', 'Заинск',
    'Закаменск', 'Заозёрный', 'Заозёрск', 'ЗападнаяДвина', 'Заполярный',
    'Зарайск', 'Заречный(Пензенскаяобласть)', 'Заречный(Свердловскаяобласть)',
    'Заринск', 'Звенигово', 'Звенигород', 'Зверево', 'Зеленогорск',
    'Зеленоградск', 'Зеленодольск', 'Зеленокумск', 'Зерноград', 'Зея', 'Зима',
    'Златоуст', 'Злынка', 'Змеиногорск', 'Знаменск', 'Зубцов', 'Зуевка',
    'Ивангород', 'Иваново', 'Ивантеевка', 'Ивдель', 'Игарка', 'Ижевск',
    'Избербаш', 'Изобильный', 'Иланский', 'Инза', 'Инкерман', 'Иннополис',
    'Инсар', 'Инта', 'Ипатово', 'Ирбит', 'Иркутск', 'Исилькуль', 'Искитим',
    'Истра', 'Ишим', 'Ишимбай', 'Йошкар-Ола', 'Кадников', 'Казань', 'Калач',
    'Калач-на-Дону', 'Калачинск', 'Калининград', 'Калининск', 'Калтан',
    'Калуга', 'Калязин', 'Камбарка'];
var listFrom = document.getElementById('city-from');
var listTo = document.getElementById('city-to');
cities.forEach(function (item) {
    var option = document.createElement('option');
    option.value = item;
    listTo.appendChild(option);
});
cities.forEach(function (item) {
                   var option = document.createElement('option');
                   option.value = item;
                   listFrom.appendChild(option);
               }
);
var max_value = 9;
const dialog = document.querySelector("dialog");
console.log(dialog);
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
// "Show the dialog" button opens the dialog modally
showButton.addEventListener(
    "click",
    () => {
        max_value = 9;
        dialog.showModal();
    }
);
// "Close" button closes the dialog
closeButton.addEventListener(
    "click",
    () => {
        dialog.close();
        var input = document.getElementById("adults");
        input.setAttribute(
            "max",
            max_value
        );
    }
);
let input = document.getElementById("adults");
let input_children = document.getElementById("children");
let input_babies = document.getElementById("babies");
input.onfocus = () => {
    let children = parseFloat(input_children.value) || '';
    let babies = parseFloat(input_babies.value) || '';
    console.log("max_value" + max_value);
    input.setAttribute(
        "max",
        max_value - children - babies
    );
}
input_children.onfocus = () => {
    let adults = parseFloat(input.value) || '';
    let babies = parseFloat(input_babies.value) || '';
    console.log("max_value" + max_value);
    input_children.setAttribute(
        "max",
        max_value - adults - babies
    );
}
input_babies.onfocus = () => {
    let adults = parseFloat(input.value) || '';
    let children = parseFloat(input_children.value) || '';
    console.log("max_value" + max_value);
    input_babies.setAttribute(
        "max",
        max_value - adults - children
    );
}

// const datato = document.getElementById('datato')
// console.log(datato.value);

document.getElementById('data-to').onchange = function () {
    var input = document.getElementById("datafrom");
    input.setAttribute("min", this.value);
    console.log(input.value);
}

document.getElementById('data-from').onchange = function () {
    var input = document.getElementById("datato");
    input.setAttribute("max", this.value);
    console.log(input.value);
}
{
    const container = document.querySelector(".posts");
    const template = document.querySelector("#destinations-template")
        .content
        .querySelector(".post");
    let count = 1

    function renderNews(news) {
        if (news.length === 0) {
            container.innerHTML = `<p style="color: #ccc">Данных нет.</p>`;
        }
        const newsElements = news.map((n) => {
            const newsElement = template.cloneNode(true);
            newsElement.querySelector(".origin").textContent
                = `${count++}. Дата вылета ${new Date(n.departureDate)
                .toLocaleDateString("ru-RU")},   ${n.origin} -> ${n.destination}  Цена ${n.price.total} Евро` ;
            return newsElement;
        });
        const fragmentContainer = document.createDocumentFragment();
        newsElements.forEach((ne) => {
            console.log(ne);
            fragmentContainer.append(ne);
        });
        container.append(fragmentContainer);
    }
}
let accessToken;
const newsRequest = fetch(
    `https://test.api.amadeus.com/v1/security/oauth2/token`,
    {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
                                      grant_type: "client_credentials",
                                      client_id:
                                          "i5pjcyIK6WDn1uLPqa3m5RpZ5OlZPhPj",
                                      client_secret: "VUdag1mvVUPPCd82"
                                  })
    }
)
    //              Второй способ распарсить JSON — воспользоваться
    //              методом json() у объекта Response
    .then((resp) => resp.json())
    .then((data) => {
        accessToken = data.access_token;
        console.log(accessToken)
        let param = {origin: 'PAR', maxPrice: '200'};
        (async () => {
            const response = await fetch(
                'https://test.api.amadeus.com/v1/shopping/flight-destinations?' +
                new URLSearchParams({
                                        origin: 'PAR',
                                        maxPrice: '200'
                                        // , destination:''
                                    }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + accessToken
                    }
                }
            )
            const data = await response.json()
            console.log(JSON.stringify(data.data[0]))
            console.log(JSON.stringify(data.data[0].origin))
            console.log(JSON.stringify(data.data[0].destination))
            console.log(JSON.stringify(data.data[0].departureDate))
            console.log(JSON.stringify(data.data[0].price.total))
            renderNews(data.data)
        })()
    });

document.getElementById('data-to').valueAsDate = new Date();
document.getElementById('data-from').valueAsDate = new Date();