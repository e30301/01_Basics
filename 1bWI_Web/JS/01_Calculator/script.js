function read() {
    let inputField = document.getElementById("input");
    let input = inputField.value
}

function calc() {
    var result
    var input = read()

    return eval(input);

}

function main() {
    let outputField = document.getElementById("output")
    
        output = calc()
        outputField.innerHTML = output;

    
}

