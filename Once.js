function once(fn) {
    let reRun = true;
    return function () {
        if(reRun) {
            reRun = false; 
            return fn.apply(this, arguments);
        };
    }
}


logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect