function brightest(colors){
   let colorIndex = 0,
       maxColor = 0,
       index = 0
    colors.forEach(color => {
        let r = parseInt(color.slice(1,3), 16),
            g = parseInt(color.slice(3,5), 16),
            b = parseInt(color.slice(5,7), 16),
            value = Math.max(r,g,b)
        if (value > maxColor) {
            maxColor = value
            colorIndex = index
        }
        index++
    })
    return colors[colorIndex]
}

console.log(brightest(["#00FF00", "#FFFF00"]))