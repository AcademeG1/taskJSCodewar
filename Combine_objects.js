function combine() {
    let result = {};
    for (let obj of arguments) {
        for (let property in obj) {
            if (property in result) {
                result[property] += obj[property];
            } else {
                result[property] = obj[property];
            }
        }
    }
    return result;
}
