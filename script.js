
function snapCrackle(maxValue) {

    let string = ""

    for (let cont = 1; cont <= maxValue; cont++) {

        if (cont % 2 !== 0 && cont % 5 === 0) {
            string += `SnapCrackle, `
        } else if (cont % 2 !== 0) {
            string += `Snap, `
        } else if (cont % 5 === 0) {
            string += `Crackle, `
        } else {
            string += `${cont} `
        }
    }
    return string
}

console.log(snapCrackle(12))