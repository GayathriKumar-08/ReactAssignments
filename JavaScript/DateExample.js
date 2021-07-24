//6 & //7
let today = new Date();
let yesterday = new Date(today);
function Datefunction() {
    console.log("Date is: " + today)
    yesterday.setDate(yesterday.getDate() - 1);
    console.log(yesterday.toDateString());
}
Datefunction();