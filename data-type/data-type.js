function main() {
    // Showing to Web

    var i = 0xa1;
    var j = 0Xf2;
    var s = i + j;
    var b = true; // true or false

    // Line signal: <br> in document.write
    document.write("<li> hex/oct value: 0xa1, " + i + "<br>");
    document.write("<li> hex/oct value: 0xf2, " + j + "<br>");
    document.write("<li> hex/oct sum: 0xa1 + 0xf2 = " + s + "<br>");

    if (b) {
        document.write("b value is true <br>");
    } else {
        document.write("b value is false <br>");
    }
}

main()
