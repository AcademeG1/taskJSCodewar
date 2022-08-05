// function bingo(ticket, win){
//     let count = 0;
//
//     ticket.forEach(game => {
//         if (game[0].includes(String.fromCharCode(game[1]))) {
//             count++;
//         }
//     });
//
//     return (count >= win) ? "Winner!" : "Loser!";
// }
//
//


function bingo(ticket, win) {
    let count = 0

    if (ticket.forEach(mass => mass[0].includes(String.fromCharCode(mass[1])))) {
        count++
    }
    return count >= win ? 'Winner' : 'Lose'
}



console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 0))