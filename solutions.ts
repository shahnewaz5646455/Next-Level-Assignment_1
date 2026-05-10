//Problem 1:
type Operation = (numbers: number[]) => number[];

const filterEvenNumbers: Operation = (numbers) => {
    let result: number[] = [];

    numbers.forEach((num: number) => {
        if (num % 2 === 0) {
            result.push(num);
        }
    })
    return result;
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//Problem 2:
type ReverseFunction = (s: string) => string;


const reverseString: ReverseFunction = (s) => {

    let result: string = "";
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;

}

console.log(reverseString("typescript"));

//Problem 3:

type StringNumber = string | number;

type CheckTypeFunction = (s: StringNumber) => string;

const checkType: CheckTypeFunction = (s) => {

    if (typeof s === "string") {
        return "String";
    } else if (typeof s === "number") {
        return "Number";
    }

    return "Unknown";
};

console.log(checkType("Hello"));
console.log(checkType(42));


//Problem 4:

const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
    return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
const userName = getProperty(user, "name");

//Problem 5:

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

type ReadStatus = { isRead: boolean };

const toggleReadStatus = (book: Book): Book & ReadStatus => {
    return {
        ...book,
        isRead: true,
    };
};

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

console.log(toggleReadStatus(myBook));





//Problem 6:
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());


//Problem 7:

const getIntersection = (array1: number[], array2: number[]): number[] => {
    const result: number[] = [];

    for (const item of array1) {
        if (array2.includes(item) && !result.includes(item)) {
            result.push(item);
        }
    }

    return result;
};


console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));