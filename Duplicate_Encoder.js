function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}
// еще может быть вот так
// var unique='';
// word = word.toLowerCase();
// for(var i=0; i<word.length; i++){
//     if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
//         unique += '(';
//     }
//     else{
//         unique += ')';
//     }
// }
// return unique;


console.log(duplicateEncode("apa"))