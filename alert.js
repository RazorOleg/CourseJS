alert('Я JavaScript');

let date = new Date(2021, 1, 20, 3, 12);
alert(date);

function getWeekDay(date) {
    if(date.getDay() === 0) {
        return "ВС";
    } else if (date.getDay() === 1) {
        return "ПН";
    } else if (date.getDay() === 2) {
        return "ВТ";
    } else if (date.getDay() === 3) {
        return "СР";
    } else if (date.getDay() === 4) {
        return "ЧТ";
    } else if (date.getDay() === 5) {
        return "ПТ";
    } else if (date.getDay() === 6) {
        return "СБ";
    }
}

let date1 = new Date(2012, 0, 3);
alert( getWeekDay(date1) );

function getLocalDay(date) {
    let day = date.getDay();

    if (day === 0) {
        day = 7;
    }

    return day;
}
let date2 = new Date(2012, 0, 3);
alert( getLocalDay(date2) );

function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
let date3 = new Date(2015, 0, 2);
alert( getDateAgo(date3, 1) );
alert( getDateAgo(date3, 2) );
alert( getDateAgo(date3, 365) );

function getLastDayOfMonth(year, month) {
    let dateCopy = new Date(year, month);

    dateCopy.setDate(0);
    return dateCopy.getDate();
}

alert( getLastDayOfMonth(2012, 2) );

function getSecondToday() {
    let now = new Date();
    console.log(now);
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    console.log(today);
    let res = now - today;
    return Math.round(res / 1000);
}

alert( getSecondToday() );

function getSecondTomorrow() {
    let today = new Date();
    console.log(today);
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
    console.log(tomorrow);
    let res = tomorrow - today;
    return Math.round(res / 1000);
}

alert( getSecondTomorrow() );

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) );


let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user);
console.log(json);

json = JSON.parse(json);
console.log(json.name);
console.log(json.age);


let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};


room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));