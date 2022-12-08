Array.prototype.reduce = function(process, initial) {
    let result;
    if (initial === undefined) {
        result = this[0];
        for (let i = 1; i < this.length; i++) {
            result = process(result, this[i]);
        }
    } else {
        result = initial;
        for (let i = 0; i < this.length; i++) {
            result = process(result, this[i]);
        }
    }
    return result;
}

console.log(['a','y','!'].reduce(function(x,y){return x+y}, undefined)); // 'yay!'