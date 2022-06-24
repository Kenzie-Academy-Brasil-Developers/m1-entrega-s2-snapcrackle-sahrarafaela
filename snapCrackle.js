function snapCrackle(maxValue) {
    let string = []
    for (let number = 1; number <= maxValue; number++) {
        if (number % 5 == 0 && number % 2 != 0) {
            string += " SnapCrackle, "

        }
        else if (number % 2 != 0) {
            string += " Snap, "
        } else if (number % 5 != 0) {
            string += " Crackle, "
        } else {
            string += number + ","
        }
    }
    // método para tirar e começar uma determinada
    let tirarPontoString = string.substring(0, string.length - 1)

    return tirarPontoString
}

console.log(snapCrackle(12))