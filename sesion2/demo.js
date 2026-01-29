let nameBook = prompt("nhập tên sách:");
const nameArtist = prompt("nhập tên tác giả");
let  yearS = +prompt("nhập năm xuất bản");
let presentYear = 2026;
if(yearS === presentYear) {
    console.log("Đây là sách mới!");
} else if(presentYear - yearS < 6){
    console.log("sách khá mới");
} else {
    console.log("sách đã cú");
}