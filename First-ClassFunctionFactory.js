const factory = (number) => {
    return (array) => {
        return array.map(item => item * number);
    }
}