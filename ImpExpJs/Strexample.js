export default class Strexample {
    static searchWord() {
        var str = "Hello this a static class, welcome to the javascript.";
        var n = str.includes("javascript");
        console.log("position " + n);
    }
}
Strexample.searchWord();

