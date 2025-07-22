//Bài 1:
// Fix lỗi type và giải thích
let age: string = "25"; // do "25" là string 
let isActive: string = "true"; // do "true" là string 
let data: any = { x: 10 };
data = "hello";
//Bài 2:
// Định nghĩa bíên 'user' với các type sau bằng type annotation
// - name (string, bắt buộc)
// - age (number, optional)
// - roles: tuple gồm 2 thanh phan string va number

type user = {
    name : string,
    age ?: number,
    roles: [string, number]
}

//Bài 3:
// Sử dụng type assertion để fix lỗi
const input = document.getElementById("input") as HTMLInputElement;
const value = Number(input.value); // Chuyển đổi sang number
//Bài 4:
// Khi nào dùng 'unknown' thay cho 'any'? Víêt ví dụ minh họa

// Sử dụng any (không an toàn)
function processDataAny(data: any) {
    console.log(data.toUpperCase()); // Không có lỗi TypeScript, nhưng nếu data không phải string sẽ gây lỗi runtime
}
processDataAny("hello"); // OK: in ra "HELLO"
processDataAny(123); // Lỗi runtime: data.toUpperCase is not a function
  
// Sử dụng unknown (an toàn hơn any)
function processDataUnknown(data: unknown) {
// Phải kiểm tra kiểu trước khi sử dụng
    if (typeof data === "string") {
        console.log(data.toUpperCase()); // OK, TypeScript biết data là string
    } else {
        console.log("Data không phải là string");
    }
}
  
processDataUnknown("hello"); // OK: in ra "HELLO"
processDataUnknown(123); // OK: in ra "Data không phải là string"