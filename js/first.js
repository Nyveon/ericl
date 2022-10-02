"use strict"

/* ---- Stars ---- */

const star = {
    x: 0,
    y: 0,
    radius: 0,

    create: function (x, y, radius) {
        const obj = Object.create(this);
        obj.x = x;
        obj.y = y;
        obj.radius = radius;
        return obj;
    },

    draw: function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

const starField = {
    stars: [],
    starCount: 0,
    starRadius: 0,
    starColor: "",

    create: function (starCount, starRadius, starColor) {
        const obj = Object.create(this);
        obj.starCount = starCount;
        obj.starRadius = starRadius;
        obj.starColor = starColor;
        obj.stars = [];
        return obj;
    },

    generate: function (canvas) {
        // Star list
        for (let i = 0; i < this.starCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * this.starRadius;
            const s = star.create(x, y, radius);
            this.stars.push(s);
        }

        // Draw stars
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = this.starColor;
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].draw(ctx);
        }
    },
}


document.addEventListener("DOMContentLoaded", function(_event) { 

    //Canvases
    const stars_canvas = document.getElementById("stars-1");

    function resizeCanvas() {
        // Stars
        stars_canvas.width = window.innerWidth * 2;
        stars_canvas.height = window.innerHeight * 2;
        const sf = starField.create(1000, 1, "white");
        sf.generate(stars_canvas);
    }
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
});

/* ---- o ---- */