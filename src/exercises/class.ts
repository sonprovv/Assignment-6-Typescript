// Bài 1:
// Tạo class 'Animal' với:
// - private property 'name'
// - constructor khởi tạo name
// - method 'speak()' in ra tên
class Animal {
    private name : string;
    constructor(name : string) {
        this.name = name;
    }
    speak() : void {
        console.log(`Animal name is: ${this.name}`);
    }
}

let a = new Animal("Son");
a.speak(); // Output: Animal name is: Son
// Bài 2:
// Tạo class 'Cat' kế thừa 'Animal', override method 'speak()' để in "Meow"
class Cat extends Animal {
    speak(): void {
        console.log("Meow");
    }
}
let c = new Cat("Mimi");
c.speak(); // Output: Meow
// Bài 3:
// Tạo abstract class 'Shape' với abstract method 'area()', sau đó triển khai cho class
// 'Circle' và 'Rectangle'
abstract class Shape {
  abstract area(): number;
}
class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}
const circle = new Circle(5); // bán kính = 5
const rectangle = new Rectangle(4, 6); // chiều rộng = 4, chiều cao = 6

console.log("Diện tích hình tròn:", circle.area());
console.log("Diện tích hình chữ nhật:", rectangle.area());

// Bài 4:
// Sử dụng getter/setter để validate giá trị age (0 < age < 120) trong class 'Person'
class Person {
    private age: number;

    constructor(age: number) {
        this.age = age; // Sử dụng setter để validate
    }

    get getAge(): number {
        return this.age;
    }

    set setAge(value: number) {
        if (value < 0 || value > 120) {
            throw new Error("Age must be between 0 and 120");
        }
        this.age = value;
    }
}
let p = new Person(25);
console.log(p.getAge); // Output: 25
p.setAge = 30; // Cập nhật age
console.log(p.getAge); // Output: 30