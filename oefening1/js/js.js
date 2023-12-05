function printTextBox (text){
    let border = "*".repeat(text.length);
    console.log("/" + border + "\\");
    console.log("|" + text + "|"); 
    console.log("\\" + border + "/");
}
printTextBox("HELLO WORLD");
printTextBox("HALLO WERELD");
printTextBox("HOLA MUNDO");
