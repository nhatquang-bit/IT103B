let nameBook = prompt("nhập tên sách");
let nameArtist = prompt("nhập tên tác giả");
let year = +prompt("nhập năm xuất bản");
const presentYear = 2026;
if(year === presentYear){
    console.log("đây là sách mới");
} else if(presentYear - year < 6){
    console.log("sách khá mới   ");
} else{
    console.log("sách cũ");    
}
