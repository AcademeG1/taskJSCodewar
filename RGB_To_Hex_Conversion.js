// function rgb(r, g, b){
//     function rgbToHex(arg) {
//         let x = arg;
//         if (x < 0) {
//             x = 0;
//         }else if(x > 255) {
//             x = 255;
//         }
//         let hex = Number(x).toString(16);
//         if (hex.length < 2) {
//             hex = "0" + hex;
//         }
//         return hex;
//     }
//
//     let red = rgbToHex(r);
//     let green = rgbToHex(g);
//     let blue = rgbToHex(b);
//
//     let hexColor = red + green + blue;
//     return hexColor.toUpperCase();
// }

function rgb(r, g, b) {
    function convert(argument) {
        if (argument < 0) {
            argument = 0
        }
        if (argument > 255) {
            argument = 255
        }
        let conv = Number(argument).toString(16)
        if (conv.length < 2) {
            return '0' + conv
        }
        return conv
    }

    let red = convert(r)
    let green = convert(g)
    let blue = convert(b)

    let result = red + green + blue

    return result.toUpperCase()
}

console.log(rgb(291,51,8))