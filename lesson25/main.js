'use strict';
console.log('work');
var oldDiv = document.querySelector('div.list-group');

const  list = [
    {
        id :1,
        name: 'Раґнарок',
        description : 'американський супергеройський фільм, заснований на однойменних коміксах видавництва Marvel Comics. Виробництвом займається Marvel Studios. Є сімнадцятою картиною Кінематографічного всесвіту Marvel.',
        data :111111111111,
        href : "#"
    },

    {
        id :2,
        name: 'Лоґан: Росомаха',
        description : 'американський супергеройський фільм, знятий Джеймсом Менголдом за мотивами коміксу «Old Man Logan» Марк Міллара і Стіва Мак-Нівена',
        data :111152222,
        href : "#"
    },
    {
        id :3,
        name: 'Вогнеборці',
        description : 'американська біографічна кінодрама режисера Джозефа Косінські, що вийшла 2017 року. Стрічка створена на основі статті «No Exit» у журналі «GQ» про реальні події і розповідає про групу пожежників, що гасила пожежу в Аризоні.',
        data :111152222,
        href : "#"
    },
    {
        id :4,
        name: 'Воно. Частина перша',
        description : 'американський драматичний фільм жахів, знятий Андресом Мускетті за однойменним романом Стівена Кінга. Прем\'єра стрічки в Україні відбулася 7 вересня 2017 року.',
        data :111152222,
        href : "#"
    },
    {
        id :5,
        name: 'Геошто́рм',
        description : 'американський фантастичний фільм-катастрофа сценариста, продюсера і режисера Діна Девліна та його режисерський дебют.',
        data :111152222,
        href : "#"
    },
    {
        id :6,
        name: 'Зменшення',
        description : 'американський науково-фантастичний фільм-трагікомедія, знятий Александром Пейном. Прем\'єра стрічки в США відбудеться 25 грудня 2017 року',
        data :111152222,
        href : "#"
    },
    {
        id :7,
        name: 'Дюнке́рк',
        description : 'воєнний драматичний трилер режисера та сценариста Крістофера Нолана, що вийшов у 2017 році. Головні ролі виконали Том Гарді, Марк Райленс, Фінн Вайтгед і Гаррі Стайлс.',
        data :111152222,
        href : "#"
    },
    {
        id :8,
        name: 'Пастка',
        description : 'американський фільм жахів режисера і сценариста Джордана Піла, що вийшов 2017 року. Стрічка розповідає про чоловіка, що приїхав до батьків своєї дівчини. У головних ролях Деніел Калуя, Еллісон Вільямс, Бредлі Вітфорд..',
        data :111152222,
        href : "#"
    },
    {
        id :9,
        name: 'Пастка',
        description : 'американський супергеройський фільм, знятий Джеймсом Ганном. Він є продовженням фільму «Вартові галактики» 2014 року. Прем\'єра стрічки в Україні відбулась 4 травня 2017 року.',
        data :111152222,
        href : "#"
    },
    {
        id :10,
        name: 'Месники',
        description : 'Війна нескінченності» — американський супергеройський фільм, знятий братами Руссо за мотивами коміксів Marvel. Він є продовженням фільмів кінематографічного всесвіту Marvel.',
        data :111152222,
        href : "#"
    },
    {
        id :11,
        name: 'Чорна Пантера',
        description : ' майбутній американський супергеройський фільм, заснований на однойменних коміксах видавництва Marvel Comics, виробництва Marvel Studios і дистрибуції Walt Disney Studios Motion Picture.',
        data :111152222,
        href : "#"
    },
    {
        id :12,
        name: ' Той, що біжить лабіринтом: Ліки від смерті',
        description : 'майбутній американський науково-фантастичний фільм, знятий режисером Весом Боллом у США. Є продовженням фільмів «Той, що біжить лабіринтом: Випробування вогнем» і «Той, що біжить лабіринтом»..',
        data :111152222,
        href : "#"
    },
    {
        id :13,
        name: 'Дедпул 2',
        description : ' американський супергеройський кінокомедійний бойовик режисера Девіда Леітча, що має вийти 2018 року. Стрічка, заснована на однойменному персонажі коміксів Marvel. У головних ролях Раян Рейнольдс, Морена Баккарін, Ті Джей Міллер. ',
        data :111152222,
        href : "#"
    },
];
var search = document.getElementById('search');

function createItem(data) {
    console.log(data);
    var item = document.createElement('a');
    var name = document.createElement('h4');
    name.innerHTML = data.name;
    name.setAttribute('class', 'list-group-item-heading');
    var description = document.createElement('p');
    description.innerHTML = data.description;
    description.setAttribute('class', 'list-group-text');
    var date = document.createElement('span');
    date.innerHTML = data.date;
    date.setAttribute('class', 'label label-success');


    item.appendChild(name);
    item.appendChild(description);
    item.appendChild(date);

    //console.log(createItem());
    return item;
}

function createList(arr){
    var list = document.createElement('div');
    list.classList.add('list-group');
    arr.forEach(element => {
        list.appendChild(createItem(element));
    });
    return list;
}
search.addEventListener('keyup', function(e){
    var query = e.target.value;
    console.log(query.toLowerCase());
    var newlist = list.filter(function(e){
        return (e.name.toLowerCase().includes(query));
    });
    console.log(newlist);
    renderList(newlist, oldDiv);
});

console.log(oldDiv);

function renderList(data, oldDiv){
    oldDiv.parentElement.replaceChild(createList(data), oldDiv);
}

renderList(list, oldDiv);
console.log(createList(list));