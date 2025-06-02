class Book1 {
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    show() {
        console.log(Название: ${this.title}, Цена: ${this.price});
    }
}

const book1 = new Book1("JavaScript", 2020, 1000);
book1.show();

class Book2 {
    #title;
    #pubYear;
    #price;

    constructor(title, pubYear, price) {
        this.#title = title;
        this.#pubYear = pubYear;
        this.#price = price;
    }

    get title() { return this.#title; }
    set title(value) {
        if (value && value.trim() !== "") {
            this.#title = value;
        } else {
            console.error("Название не может быть пустым");
        }
    }

    get pubYear() { return this.#pubYear; }
    set pubYear(value) {
        if (value > 0) {
            this.#pubYear = value;
        } else {
            console.error("Год издания должен быть положительным");
        }
    }

    get price() { return this.#price; }
    set price(value) {
        if (value > 0) {
            this.#price = value;
        } else {
            console.error("Цена должна быть положительной");
        }
    }
}

const book2 = new Book2("JavaScript", 2020, 1000);
console.log(book2.title, book2.pubYear, book2.price);

book2.title = "New Title";
book2.pubYear = 2021;
book2.price = 1200;

class Book3 {
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

const books = [
    new Book3("Book A", 2010, 500),
    new Book3("Book B", 2005, 300),
    new Book3("Book C", 2020, 1000)
];

books.sort(Book3.compare);
console.log(books);

function isEmpty(obj) {
    return Reflect.ownKeys(obj).length === 0;
}

const emptyObj = {};
const symbolObj = { [Symbol()]: true };

console.log("Объект emptyObj пуст:", isEmpty(emptyObj));
console.log("Объект symbolObj пуст:", isEmpty(symbolObj));

let obj1 = {
    className: 'open menu'
};

obj1.addClass = function (cls) {
    const classes = this.className.split(' ');
    if (!classes.includes(cls)) {
        classes.push(cls);
        this.className = classes.join(' ').trim();
    }
    return this;
};

obj1.removeClass = function (cls) {
    const classes = this.className.split(' ');
    const index = classes.indexOf(cls);
    if (index !== -1) {
        classes.splice(index, 1);
        this.className = classes.join(' ').trim();
    }
    return this;
};

obj1.addClass('new').addClass('open').removeClass('menu');
console.log("obj1.className:", obj1.className);

let obj2 = {
    className: 'open menu',
    age: 30,
    details: {
        name: 'John',
        city: 'New York'
    }
};

const jsonString = JSON.stringify(obj2, null, 2);
console.log("JSON:\n", jsonString);

const obj3 = JSON.parse(jsonString);
console.log("obj3:", obj3);

console.log("JSON.stringify(obj2) === JSON.stringify(obj3):",
    JSON.stringify(obj2) === JSON.stringify(obj3));

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' ||
        typeof obj2 !== 'object' ||
        obj1 === null ||
        obj2 === null) {
        return false;
    }

    const keys1 = Reflect.ownKeys(obj1);
    const keys2 = Reflect.ownKeys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!Reflect.has(obj2, key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

console.log("deepEqual(obj2, obj3):", deepEqual(obj2, obj3));

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.floor(diff / 1000);
}

console.log("Секунд с начала дня:", getSecondsToday());
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear().toString().slice(-2);

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return ${day}.${month}.${year};
}

const myDate = new Date();
console.log("Дата в формате дд.мм.гг:", formatDate(myDate));

const myDate = new Date();
console.log("Дата в формате дд.мм.гг:", formatDate(myDate));
