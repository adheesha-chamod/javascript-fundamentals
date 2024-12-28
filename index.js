function createCircule(radius, location, isVisible) {
    return {
        radius: radius,
        location: location,
        isVisible: isVisible,
        draw: function() {
            console.log("Draw");
        }
    }
}

const c1 = createCircule(1, {x: 1, y: 2}, true);
console.log(c1);
c1.draw();
