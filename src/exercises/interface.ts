// Bài 1:
// Định nghĩa interface 'Car' với các thuộc tính:
// - brand (string, readonly)
// - speed (number)
// - start() (method)
interface Car {
    readonly brand: string;
    speed: number;
    start(): void;
}
// Bài 2:
// Tạo type 'Person' và 'Employee' kế thừa Person, thêm thuộc tính 'employeeId'
// type Person = { name: string };
// type Employee = /* Your code */;
type Person = { name: string };
type Employee = Person & { employeeId: number };
// Bài 3:
// Sử dụng index signature để định nghĩa type 'Dictionary' cho object có key là string,
// value là number
type Dictionary = {
    [key: string]: number;
};
// Bài 4:
// Viết utility type 'OptionalFields<T>' để biến tất cả thuộc tính của T thành optional
type OptionalFields<T> = {
    [K in keyof T]?: T[K];
};