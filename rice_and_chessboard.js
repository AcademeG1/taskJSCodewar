const squaresNeeded = (grains) => {
    if (grains == 0) {
        return 0;
    } else {
        for (let i = 0; i < grains; i++) {
            if (grains == Math.pow(2, i)) {
                return i + 1;
            } else if (grains > Math.pow(2, i) && grains < Math.pow(2, (i + 1))) {
                return i + 1;
            }
        }
    }
}

console.log(squaresNeeded(4)); // 2