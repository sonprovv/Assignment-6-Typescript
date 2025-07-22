// Bài 1:
// Viết hàm 'sum' nhận vào 2 số, trả về tổng, với tham số thứ hai có default value = 10
function sum(a:number, b:number=10) : number {
    return a + b;
}
console.log(sum(1,2)); // 3
console.log(sum(1)); // 11

// Bài 2:
// Sử dụng rest parameter để viết hàm 'mergeStrings' nhận nhiều chuỗi, trả về chuỗi đã
function mergeStrings(...strings: string[]) : string {
    return strings.join(" ");
}
console.log(mergeStrings("Hello", "World")); // "Hello World"

// Bài 3:
// Overload hàm 'getValue' để xử lý 2 trường hợp:
// - Nếu đầu vào là string, trả về string uppercase
// - Nếu đầu vào là number, trả về số * 2

// Bài 4:
// Tìm hiểu về generic và ứng dụng
// Sử dụng generic để viết hàm 'filterArray' lọc các phần tử theo điều kiện
// function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
// // Triển khai logic
// }